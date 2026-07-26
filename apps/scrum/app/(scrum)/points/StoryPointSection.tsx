'use client'

import {
  DragDropContext,
  Draggable,
  Droppable,
  type OnDragEndResponder,
  type OnDragUpdateResponder,
} from '@hello-pangea/dnd'
import clsx from 'clsx'
import { type CSSProperties, useState } from 'react'
import {
  DRAG_ID_QUERY,
  EMPTY_OBJECT,
  FeatureBacklogEntity,
  FeatureBacklogTitle,
} from '../constants'
import ActiveBoxes from './ActiveBoxes'
import WhiteBox from './WhiteBox'

enum DroppableId {
  ProductBacklog = 'product-point',
  SprintList = 'sprint-point',
}

const DEFAULT_ITEM_GROUP: Record<DroppableId, FeatureBacklogTitle[]> = {
  [DroppableId.ProductBacklog]: [
    FeatureBacklogTitle.後台職缺管理功能,
    FeatureBacklogTitle.前台職缺列表,
    FeatureBacklogTitle.會員系統,
    FeatureBacklogTitle.應徵者的線上履歷編輯器,
  ],
  [DroppableId.SprintList]: [],
}

export default function StoryPointSection() {
  const [itemGroup, setItemGroup] = useState(DEFAULT_ITEM_GROUP)
  const [placeholderStyle, setPlaceholderStyle] = useState<CSSProperties>(EMPTY_OBJECT)
  const [activePoints, setActivePoints] = useState(0)

  const onDragUpdate: OnDragUpdateResponder = (update) => {
    const { destination, draggableId, source } = update

    if (!destination) {
      setPlaceholderStyle({ display: 'hidden' })
      return
    }

    const draggedDOM = document.querySelector<HTMLElement>(`[${DRAG_ID_QUERY}='${draggableId}']`)

    if (!draggedDOM?.parentNode) {
      return
    }

    const { clientHeight, clientWidth, parentNode } = draggedDOM
    const childrenArray = [...parentNode.children]

    const [removed] = childrenArray.splice(source.index, 1)
    childrenArray.splice(destination.index, 0, removed)

    const clientY =
      Number.parseFloat(window.getComputedStyle(parentNode as HTMLElement).paddingTop) +
      childrenArray
        .slice(0, destination.index)
        .reduce(
          (total, curr) =>
            total +
            curr.clientHeight +
            Number.parseFloat(window.getComputedStyle(curr).marginBottom),
          0
        )

    setPlaceholderStyle((state) => ({
      ...state,
      height: clientHeight,
      left: Number.parseFloat(window.getComputedStyle(parentNode as Element).paddingLeft),
      top: clientY,
      width: clientWidth,
    }))
  }

  const onDragEnd: OnDragEndResponder = (result) => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    const newItemGroup = { ...itemGroup }

    const [removed] = newItemGroup[source.droppableId as DroppableId].splice(source.index, 1)
    newItemGroup[destination.droppableId as DroppableId].splice(destination.index, 0, removed)

    setItemGroup(newItemGroup)
    setActivePoints(
      newItemGroup[DroppableId.SprintList].reduce(
        (total, id) => total + FeatureBacklogEntity[id].storyPoint,
        0
      )
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <section className="relative z-10 mt-5 flex flex-1 flex-col gap-6 px-7 md:flex-row 2xl:gap-12">
        <div className="flex flex-1 flex-col">
          <hgroup className="mb-12 px-8 text-neutral-black-dark">
            <h2 className="inline text-h2">產品待辦清單</h2>
            <h3 className="inline text-h3">Product Backlog</h3>
          </hgroup>
          <Droppable droppableId={DroppableId.ProductBacklog}>
            {(dropProvided, dropSnapshot) => (
              <ul
                className={clsx(
                  'relative min-h-[42rem] flex-1 rounded-20 p-8 text-center',
                  dropSnapshot.isDraggingOver && 'bg-neutral-black-dark/10'
                )}
                ref={dropProvided.innerRef}
                {...dropProvided.droppableProps}
              >
                {itemGroup[DroppableId.ProductBacklog].map((title, index) => {
                  const item = FeatureBacklogEntity[title]

                  return (
                    <Draggable draggableId={item.title} index={index} key={item.title}>
                      {(dragProvided, dragSnapshot) => (
                        <li
                          className={clsx(
                            'z-10 mb-8 flex items-center justify-center gap-6 rounded-xl px-6 py-4 shadow-brown 2xl:px-9 2xl:py-6',
                            dragSnapshot.isDragging
                              ? 'bg-secondary-green-light/50'
                              : 'bg-secondary-green-light/85'
                          )}
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                        >
                          <div>
                            <p className="text-h3">{item.title}</p>
                            {item.description ? (
                              <p className="font-bold">{item.description}</p>
                            ) : null}
                          </div>
                          <div className="inline-flex shrink-0 grow-0 items-center">
                            <WhiteBox className="h-9 w-auto" />
                            <span className="ml-3 text-h3">x{item.storyPoint}</span>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  )
                })}
                {dropProvided.placeholder}
                {dropSnapshot.isUsingPlaceholder && dropSnapshot.isDraggingOver ? (
                  <span
                    aria-hidden="true"
                    className="absolute rounded-xl border-3 border-neutral-white-light border-dashed"
                    style={placeholderStyle}
                  />
                ) : null}
              </ul>
            )}
          </Droppable>
        </div>
        <div className="flex flex-1 flex-col">
          <h1 className="mx-8 text-h2 text-neutral-black-dark">開發 A 組的短衝待辦清單</h1>
          <div className="mx-8 flex h-12 flex-wrap gap-2">
            <ActiveBoxes count={activePoints} />
            {activePoints > 20 && (
              <span className="text-error-main text-notice">點數超過了唷！</span>
            )}
          </div>
          <Droppable droppableId={DroppableId.SprintList}>
            {(dropProvided, dropSnapshot) => (
              <ul
                className={clsx(
                  'relative flex-1 rounded-20 p-8 text-center',
                  dropSnapshot.isDraggingOver && 'bg-neutral-black-dark/10'
                )}
                ref={dropProvided.innerRef}
                {...dropProvided.droppableProps}
              >
                {itemGroup[DroppableId.SprintList].map((title, index) => {
                  const item = FeatureBacklogEntity[title]

                  return (
                    <Draggable draggableId={item.title} index={index} key={item.title}>
                      {(dragProvided, dragSnapshot) => (
                        <li
                          className={clsx(
                            'z-10 mb-8 flex items-center justify-center gap-6 rounded-xl px-6 py-4 shadow-brown 2xl:px-9 2xl:py-6',
                            dragSnapshot.isDragging
                              ? 'bg-secondary-green-light/50'
                              : 'bg-secondary-green-light/85'
                          )}
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                        >
                          <div>
                            <p className="text-h3">{item.title}</p>
                            {item.description ? (
                              <p className="font-bold">{item.description}</p>
                            ) : null}
                          </div>
                          <div className="inline-flex shrink-0 grow-0 items-center">
                            <WhiteBox className="h-9 w-auto" />
                            <span className="ml-3 text-h3">x{item.storyPoint}</span>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  )
                })}
                {dropProvided.placeholder}
                {dropSnapshot.isUsingPlaceholder && dropSnapshot.isDraggingOver ? (
                  <span
                    aria-hidden="true"
                    className="absolute rounded-xl border-3 border-neutral-white-light border-dashed"
                    style={placeholderStyle}
                  />
                ) : null}
              </ul>
            )}
          </Droppable>
        </div>
      </section>
    </DragDropContext>
  )
}

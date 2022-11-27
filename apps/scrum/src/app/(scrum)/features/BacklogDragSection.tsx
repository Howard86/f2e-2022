'use client'

import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
  OnDragUpdateResponder,
} from '@hello-pangea/dnd'
import clsx from 'clsx'
import { CSSProperties, useState } from 'react'
import { FeatureBacklogTitle, FeatureBacklogEntity } from '../constants'
import BacklogBackground from './BacklogBackground'

const enum DroppableId {
  ProductBacklog = 'product',
  SprintList = 'sprint',
}

const DEFAULT_ITEM_GROUP: Record<DroppableId, FeatureBacklogTitle[]> = {
  [DroppableId.ProductBacklog]: [
    FeatureBacklogTitle['會員系統'],
    FeatureBacklogTitle.應徵者的線上履歷編輯器,
    FeatureBacklogTitle.前台職缺列表,
    FeatureBacklogTitle.後台職缺管理功能,
  ],
  [DroppableId.SprintList]: [],
}

const DRAG_ID_QUERY = 'data-rfd-draggable-id'
const EMPTY_OBJECT = {}

export default function BacklogDragSection() {
  const [itemGroup, setItemGroup] = useState(DEFAULT_ITEM_GROUP)
  const [placeholderStyle, setPlaceholderStyle] = useState<CSSProperties>(EMPTY_OBJECT)

  const onDragUpdate: OnDragUpdateResponder = (update) => {
    const { destination, draggableId, source } = update

    if (!destination) return

    if (destination.droppableId !== source.droppableId) {
      setPlaceholderStyle({ display: 'hidden' })
      return
    }

    const draggedDOM = document.querySelector<HTMLElement>(`[${DRAG_ID_QUERY}='${draggableId}']`)

    if (!draggedDOM || !draggedDOM.parentNode) return

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
      width: clientWidth,
      top: clientY,
      left: Number.parseFloat(window.getComputedStyle(parentNode as Element).paddingLeft),
    }))
  }

  const onDragEnd: OnDragEndResponder = (result) => {
    const { source, destination } = result

    if (!destination) return

    const newItemGroup = { ...itemGroup }

    const [removed] = newItemGroup[source.droppableId as DroppableId].splice(source.index, 1)
    newItemGroup[destination.droppableId as DroppableId].splice(destination.index, 0, removed)

    setItemGroup(newItemGroup)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <section className="px-15 relative z-10 mt-5 -mb-24 flex text-center">
        <Droppable droppableId={DroppableId.ProductBacklog}>
          {(dropProvided, dropSnapshot) => (
            <ul
              ref={dropProvided.innerRef}
              className={clsx(
                'rounded-20 relative mr-20 flex-1 p-8',
                dropSnapshot.isDraggingOver && 'bg-neutral-black-dark/10'
              )}
              {...dropProvided.droppableProps}
            >
              {itemGroup[DroppableId.ProductBacklog].map((title, index) => {
                const item = FeatureBacklogEntity[title]

                return (
                  <Draggable key={item.title} draggableId={item.title} index={index}>
                    {(dragProvided, dragSnapshot) => (
                      <li
                        ref={dragProvided.innerRef}
                        className={clsx(
                          'text-neutral-black-dark shadow-brown z-10 mb-8 rounded-xl px-9 py-6',
                          dragSnapshot.isDragging
                            ? 'bg-neutral-white-light/50'
                            : 'bg-neutral-white-light/75'
                        )}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                      >
                        <p className="text-h3">{item.title}</p>
                        {item.description && <p className="font-bold">{item.description}</p>}
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {dropProvided.placeholder}
              {dropSnapshot.isUsingPlaceholder && dropSnapshot.isDraggingOver && (
                <span
                  aria-hidden="true"
                  className="border-neutral-white-light border-3 absolute rounded-xl border-dashed"
                  style={placeholderStyle}
                />
              )}
            </ul>
          )}
        </Droppable>

        <div className="relative flex min-h-[690px] flex-1 flex-col">
          <BacklogBackground className="absolute inset-0 w-full" />
          <hgroup className="text-neutral-black-dark relative z-10">
            <h1 className="text-h2 inline">產品待辦清單</h1>
            <h2 className="text-h3 inline">Product Backlog</h2>
          </hgroup>
          <div className="relative z-10 flex flex-1 gap-2 px-12">
            <div className="flex-1">
              <p className="mr-1 mb-5 text-end">優先度</p>
              <Droppable droppableId={DroppableId.SprintList}>
                {(dropProvided, dropSnapshot) => (
                  <ul
                    ref={dropProvided.innerRef}
                    className={clsx(
                      'rounded-20 relative h-full w-[500px] flex-1',
                      dropSnapshot.isDraggingOver && 'bg-neutral-black-dark/10'
                    )}
                    {...dropProvided.droppableProps}
                  >
                    {itemGroup[DroppableId.SprintList].map((title, index) => {
                      const item = FeatureBacklogEntity[title]

                      return (
                        <Draggable key={item.title} draggableId={item.title} index={index}>
                          {(dragProvided, dragSnapshot) => (
                            <li
                              ref={dragProvided.innerRef}
                              className={clsx(
                                'text-neutral-black-dark shadow-brown z-10 mb-6 rounded-xl px-6 py-4',
                                dragSnapshot.isDragging
                                  ? 'bg-neutral-white-light/50'
                                  : 'bg-neutral-white-light/75'
                              )}
                              {...dragProvided.draggableProps}
                              {...dragProvided.dragHandleProps}
                            >
                              <p className="text-h3">{item.title}</p>
                              {item.description && <p className="font-bold">{item.description}</p>}
                            </li>
                          )}
                        </Draggable>
                      )
                    })}
                    {dropProvided.placeholder}
                    {dropSnapshot.isUsingPlaceholder && dropSnapshot.isDraggingOver && (
                      <span
                        aria-hidden="true"
                        className="border-neutral-white-light border-3 absolute rounded-xl border-dashed transition-all"
                        style={placeholderStyle}
                      />
                    )}
                  </ul>
                )}
              </Droppable>
            </div>
            <div className="mt-5 flex w-6 shrink-0 flex-col items-center">
              {itemGroup[DroppableId.SprintList].length > 0 && (
                <>
                  <span>高</span>
                  <span className="bg-neutral-white-light border-neutral-white-light mx-auto my-1 block h-full w-px rounded-sm border" />
                  <span>低</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </DragDropContext>
  )
}

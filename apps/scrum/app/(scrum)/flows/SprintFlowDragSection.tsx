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
import { DRAG_ID_QUERY, EMPTY_OBJECT } from '../constants'
import DroppableArea, { DroppableId, ItemGroup } from './DroppableArea'
import SprintFlowCard from './SprintFlowCard'

const CORRECT_ORDER: [string, string][] = [
  ['每日站立會議', 'Daily Scrum'],
  ['短衝檢視會議', 'Sprint Review'],
  ['短衝自省會議', 'Sprint Retrospective'],
]

export const DEFAULT_ITEM_GROUP: ItemGroup = {
  [DroppableId.List]: [
    ['短衝檢視會議', 'Sprint Review'],
    ['每日站立會議', 'Daily Scrum'],
    ['短衝自省會議', 'Sprint Retrospective'],
  ],
  [DroppableId.Top]: [],
  [DroppableId.Left]: [],
  [DroppableId.Right]: [],
}

export default function SprintFlowDragSection() {
  const [itemGroup, setItemGroup] = useState(DEFAULT_ITEM_GROUP)
  const [isWrongOrder, setWrongOrder] = useState(false)
  const [placeholderStyle, setPlaceholderStyle] = useState<CSSProperties>(EMPTY_OBJECT)

  const onDragUpdate: OnDragUpdateResponder = (update) => {
    const { destination, draggableId, source } = update

    if (!destination || destination.droppableId !== source.droppableId) {
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
    const destinationItems = newItemGroup[destination.droppableId as DroppableId]

    if (destination.droppableId === DroppableId.List) {
      destinationItems.splice(destination.index, 0, removed)
    } else {
      const popped = destinationItems.pop()

      if (popped) newItemGroup[source.droppableId as DroppableId].push(popped)
      destinationItems.push(removed)
    }

    setItemGroup(newItemGroup)
    setWrongOrder(
      newItemGroup[DroppableId.List].length === 0 &&
        (newItemGroup[DroppableId.Top][0][0] !== CORRECT_ORDER[0][0] ||
          newItemGroup[DroppableId.Left][0][0] !== CORRECT_ORDER[1][0] ||
          newItemGroup[DroppableId.Right][0][0] !== CORRECT_ORDER[2][0])
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <>
        <div className="relative z-10 mx-auto">
          <div className="absolute bottom-52 right-24 text-center">
            <h2 className="text-h1 ">Sprint</h2>
            {isWrongOrder && (
              <p className="text-notice text-error-main">
                有選項位置好像不太對 <br />
                可以再調整一下唷~
              </p>
            )}
          </div>
          <DroppableArea
            itemGroup={itemGroup}
            droppableId={DroppableId.Top}
            className="absolute bottom-[21.5rem] -left-3"
          />
          <DroppableArea
            itemGroup={itemGroup}
            droppableId={DroppableId.Left}
            className="absolute bottom-0 -left-3"
          />
          <DroppableArea
            itemGroup={itemGroup}
            droppableId={DroppableId.Right}
            className="absolute bottom-0 left-[20rem]"
          />
        </div>
        <Droppable droppableId={DroppableId.List}>
          {(dropProvided, dropSnapshot) => (
            <div
              ref={dropProvided.innerRef}
              className={clsx(
                'absolute -right-8 -top-4 z-10 h-[28rem] rounded-xl px-4 pt-4 2xl:px-8 2xl:pt-8',
                dropSnapshot.isDraggingOver && 'bg-neutral-black-dark/10'
              )}
              {...dropProvided.droppableProps}
            >
              {itemGroup[DroppableId.List].map((item, index) => (
                <Draggable key={item[0]} draggableId={item[0]} index={index}>
                  {(dragProvided, dragSnapshot) => (
                    <SprintFlowCard
                      ref={dragProvided.innerRef}
                      header={item[0]}
                      subheader={item[1]}
                      className={
                        dragSnapshot.isDragging
                          ? 'bg-neutral-white-light/50'
                          : 'bg-neutral-white-light/75'
                      }
                      {...dragProvided.dragHandleProps}
                      {...dragProvided.draggableProps}
                    />
                  )}
                </Draggable>
              ))}
              {dropProvided.placeholder}
              {dropSnapshot.isUsingPlaceholder && dropSnapshot.isDraggingOver && (
                <span
                  aria-hidden="true"
                  className="border-neutral-white-light border-3 absolute rounded-xl border-dashed"
                  style={placeholderStyle}
                />
              )}
            </div>
          )}
        </Droppable>
      </>
    </DragDropContext>
  )
}

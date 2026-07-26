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
import { DRAG_ID_QUERY, EMPTY_OBJECT } from '../constants'
import DroppableArea, { DroppableId, type ItemGroup } from './DroppableArea'
import SprintFlowCard from './SprintFlowCard'

const CORRECT_ORDER: [string, string][] = [
  ['每日站立會議', 'Daily Scrum'],
  ['短衝檢視會議', 'Sprint Review'],
  ['短衝自省會議', 'Sprint Retrospective'],
]

const DEFAULT_ITEM_GROUP: ItemGroup = {
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
    const destinationItems = newItemGroup[destination.droppableId as DroppableId]

    if (destination.droppableId === DroppableId.List) {
      destinationItems.splice(destination.index, 0, removed)
    } else {
      const popped = destinationItems.pop()

      if (popped) {
        newItemGroup[source.droppableId as DroppableId].push(popped)
      }
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
      <div className="relative z-10 mx-auto">
        <div className="absolute right-24 bottom-52 text-center">
          <h2 className="text-h1">Sprint</h2>
          {isWrongOrder ? (
            <p className="text-error-main text-notice">
              有選項位置好像不太對 <br />
              可以再調整一下唷~
            </p>
          ) : null}
        </div>
        <DroppableArea
          className="absolute bottom-[21.5rem] -left-3"
          droppableId={DroppableId.Top}
          itemGroup={itemGroup}
        />
        <DroppableArea
          className="absolute bottom-0 -left-3"
          droppableId={DroppableId.Left}
          itemGroup={itemGroup}
        />
        <DroppableArea
          className="absolute bottom-0 left-[20rem]"
          droppableId={DroppableId.Right}
          itemGroup={itemGroup}
        />
      </div>
      <Droppable droppableId={DroppableId.List}>
        {(dropProvided, dropSnapshot) => (
          <div
            className={clsx(
              'absolute -top-4 -right-8 z-10 h-[28rem] rounded-xl px-4 pt-4 2xl:px-8 2xl:pt-8',
              dropSnapshot.isDraggingOver && 'bg-neutral-black-dark/10'
            )}
            ref={dropProvided.innerRef}
            {...dropProvided.droppableProps}
          >
            {itemGroup[DroppableId.List].map((item, index) => (
              <Draggable draggableId={item[0]} index={index} key={item[0]}>
                {(dragProvided, dragSnapshot) => (
                  <SprintFlowCard
                    className={
                      dragSnapshot.isDragging
                        ? 'bg-neutral-white-light/50'
                        : 'bg-neutral-white-light/75'
                    }
                    header={item[0]}
                    ref={dragProvided.innerRef}
                    subheader={item[1]}
                    {...dragProvided.dragHandleProps}
                    {...dragProvided.draggableProps}
                  />
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
            {dropSnapshot.isUsingPlaceholder && dropSnapshot.isDraggingOver ? (
              <span
                aria-hidden="true"
                className="absolute rounded-xl border-3 border-neutral-white-light border-dashed"
                style={placeholderStyle}
              />
            ) : null}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

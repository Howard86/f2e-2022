'use client'

import { Droppable, Draggable } from '@hello-pangea/dnd'
import clsx from 'clsx'
import { DivProps } from 'react-html-props'
import SprintFlowCard from './SprintFlowCard'

export const enum DroppableId {
  List = 'list',
  Top = 'top',
  Left = 'left',
  Right = 'right',
}

interface DroppableAreaProps extends DivProps {
  itemGroup: ItemGroup
  droppableId: DroppableId
}

export type ItemGroup = Record<DroppableId, [string, string][]>

export default function DroppableArea({ itemGroup, droppableId, ...props }: DroppableAreaProps) {
  return (
    <Droppable droppableId={droppableId}>
      {(dropProvided, dropSnapshot) => (
        <div ref={dropProvided.innerRef} {...dropProvided.droppableProps} {...props}>
          {itemGroup[droppableId].length > 0 ? (
            <Draggable
              key={itemGroup[droppableId][0][0]}
              draggableId={itemGroup[droppableId][0][0]}
              index={0}
            >
              {(dragProvided, dragSnapshot) => (
                <SprintFlowCard
                  ref={dragProvided.innerRef}
                  header={itemGroup[droppableId][0][0]}
                  subheader={itemGroup[droppableId][0][1]}
                  className={
                    dragSnapshot.isDragging || dropSnapshot.isDraggingOver
                      ? 'bg-neutral-white-light/50'
                      : 'bg-neutral-white-light/75 translate-y-8'
                  }
                  {...dragProvided.dragHandleProps}
                  {...dragProvided.draggableProps}
                />
              )}
            </Draggable>
          ) : (
            <div
              className={clsx(
                'bg-primary-dark/50 border-5 border-neutral-white-light h-[118px] w-[296px] rounded-xl border-dashed',
                dropSnapshot.isDraggingOver && 'hidden'
              )}
            />
          )}
          {dropProvided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

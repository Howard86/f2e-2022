'use client'

import { Draggable, Droppable } from '@hello-pangea/dnd'
import clsx from 'clsx'
import type { DivProps } from 'react-html-props'
import SprintFlowCard from './SprintFlowCard'

export enum DroppableId {
  List = 'list',
  Top = 'top',
  Left = 'left',
  Right = 'right',
}

interface DroppableAreaProps extends DivProps {
  droppableId: DroppableId
  itemGroup: ItemGroup
}

export type ItemGroup = Record<DroppableId, [string, string][]>

export default function DroppableArea({ itemGroup, droppableId, ...props }: DroppableAreaProps) {
  return (
    <Droppable droppableId={droppableId}>
      {(dropProvided, dropSnapshot) => (
        <div ref={dropProvided.innerRef} {...dropProvided.droppableProps} {...props}>
          {itemGroup[droppableId].length > 0 ? (
            <Draggable
              draggableId={itemGroup[droppableId][0][0]}
              index={0}
              key={itemGroup[droppableId][0][0]}
            >
              {(dragProvided, dragSnapshot) => (
                <SprintFlowCard
                  className={
                    dragSnapshot.isDragging || dropSnapshot.isDraggingOver
                      ? 'bg-neutral-white-light/50'
                      : 'translate-y-8 bg-neutral-white-light/75'
                  }
                  header={itemGroup[droppableId][0][0]}
                  ref={dragProvided.innerRef}
                  subheader={itemGroup[droppableId][0][1]}
                  {...dragProvided.dragHandleProps}
                  {...dragProvided.draggableProps}
                />
              )}
            </Draggable>
          ) : (
            <div
              className={clsx(
                'h-[118px] w-[296px] rounded-xl border-5 border-neutral-white-light border-dashed bg-primary-dark/50',
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

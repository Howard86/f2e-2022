import clsx from 'clsx'
import { ChildrenProps } from 'react'
import { DivProps } from 'react-html-props'

export default function ConversationArticle({ className, ...props }: DivProps & ChildrenProps) {
  return (
    <article
      className={clsx(
        'border-5 border-secondary-brown-dark text-neutral-black-dark bg-neutral-white-light rounded-20 flex',
        className
      )}
      {...props}
    />
  )
}

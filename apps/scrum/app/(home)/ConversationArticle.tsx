import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import type { DivProps } from 'react-html-props'

export default function ConversationArticle({ className, ...props }: PropsWithChildren<DivProps>) {
  return (
    <article
      className={clsx(
        'flex rounded-20 border-5 border-secondary-brown-dark bg-neutral-white-light text-neutral-black-dark',
        className
      )}
      {...props}
    />
  )
}

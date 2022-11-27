import type { FC, ReactNode } from 'react'
import ConversationArticle from '@/app/(home)/ConversationArticle'
import type { CharacterIconProps } from '../characters/ProductOwnerIcon'

interface StoryPointConversationProps {
  name: string
  Icon: FC<CharacterIconProps>
  children: ReactNode
}

export default function StoryPointConversation({
  name,
  Icon,
  children,
}: StoryPointConversationProps) {
  return (
    <div className="flex items-center justify-center gap-12">
      <div className="flex min-w-[120px] flex-col items-center">
        <Icon head />
        <p className="font-bold">{name}</p>
      </div>
      <ConversationArticle className="flex-1 py-6 px-9">{children}</ConversationArticle>
    </div>
  )
}

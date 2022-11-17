import { Tab } from '@headlessui/react'
import { ExtractProps } from 'react'
import Button from './Button'

export default function HandWritingPanel(props: ExtractProps<typeof Tab.Panel>) {
  return (
    <Tab.Panel className="space-y-10 px-4 pt-10 pb-8" {...props}>
      <div className="flex items-center justify-end gap-2">
        <Button size="sm" variant="text">
          回上一步
        </Button>
        <Button size="sm" variant="text">
          清除
        </Button>
      </div>
      {/* TODO: Add board */}
      <div>HandWriting Board</div>
    </Tab.Panel>
  )
}

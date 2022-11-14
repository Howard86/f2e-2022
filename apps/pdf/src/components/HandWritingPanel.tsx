import { Tab } from '@headlessui/react'
import { ExtractProps } from 'react'

export default function HandWritingPanel(props: ExtractProps<typeof Tab.Panel>) {
  return (
    <Tab.Panel className="space-y-10 px-4 pt-10 pb-8" {...props}>
      <div className="flex items-center justify-end gap-2">
        <button type="button" className="btn-primary">
          回上一步
        </button>
        <button type="button" className="btn-primary">
          清除
        </button>
      </div>
      {/* TODO: Add board */}
      <div>HandWriting Board</div>
    </Tab.Panel>
  )
}

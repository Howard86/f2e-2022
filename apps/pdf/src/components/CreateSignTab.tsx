import { Tab } from '@headlessui/react'
import { ExtractProps } from 'react'

export default function CreateSignTab(props: ExtractProps<typeof Tab>) {
  return (
    <Tab
      className="ui-selected:border-primary-main ui-selected:text-primary-main flex-1 whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-base"
      {...props}
    />
  )
}

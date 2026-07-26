import { Tab } from '@headlessui/react'
import type { ComponentProps } from 'react'

export default function CreateSignTab(props: ComponentProps<typeof Tab>) {
  return (
    <Tab
      className="flex-1 whitespace-nowrap border-transparent ui-selected:border-primary-main border-b-2 px-1 py-4 text-base ui-selected:text-primary-main"
      {...props}
    />
  )
}

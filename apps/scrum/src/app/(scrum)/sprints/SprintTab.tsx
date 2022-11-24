'use client'

import { Fragment } from 'react'

import { Tab } from '@headlessui/react'
import DirtBlock from './DirtBlock'
import type { NormalisedTab } from '../constants'

interface SprintTabProps {
  tab: NormalisedTab
}

export default function SprintTab({ tab }: SprintTabProps) {
  return (
    <div className="z-10 mx-auto w-full max-w-screen-lg">
      <Tab.Group>
        <Tab.List as="ul" className="flex w-full justify-between">
          {tab.ids.map((id) => (
            <Tab key={id} as="li" className="outline-none">
              <button
                type="button"
                className="ui-not-selected:opacity-50 relative inline-flex flex-col items-center justify-center px-8 py-2 transition-opacity"
              >
                <DirtBlock className="ui-selected:opacity-100 absolute left-0 top-0 translate-y-1/2 -translate-x-1/2 opacity-0 transition-opacity" />
                <span className="text-h3">{tab.entities[id].title}</span>
                <span className="font-bold">{tab.entities[id].subheader}</span>
              </button>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels as={Fragment}>
          {tab.ids.map((id) => (
            <Tab.Panel
              key={id}
              as="article"
              className="px-15 bg-neutral-white-light/85 text-neutral-black-dark text-h3 mt-10 flex flex-col gap-4 rounded-3xl py-9 text-start"
            >
              {tab.entities[id].children}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

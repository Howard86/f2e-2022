'use client'

import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import type { NormalisedTab } from '../constants'
import DirtBlock from './DirtBlock'

interface SprintTabProps {
  tab: NormalisedTab
}

export default function SprintTab({ tab }: SprintTabProps) {
  return (
    <div className="z-10 mx-auto w-full max-w-screen-lg">
      <Tab.Group>
        <Tab.List as="ul" className="mt-8 flex w-full justify-between md:mt-0">
          {tab.ids.map((id) => (
            <Tab as="li" className="outline-none" key={id}>
              <button
                className="relative inline-flex flex-col items-center justify-center px-8 py-2 ui-not-selected:opacity-50 transition-opacity ui-not-selected:hover:opacity-75"
                type="button"
              >
                <DirtBlock className="absolute top-0 left-1/2 -translate-y-full opacity-0 ui-selected:opacity-100 transition-opacity md:left-0 md:-translate-x-1/2 md:translate-y-1/2" />
                <span className="text-h3">{tab.entities[id].title}</span>
                <span className="font-bold">{tab.entities[id].subheader}</span>
              </button>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels as={Fragment}>
          {tab.ids.map((id) => (
            <Tab.Panel
              as="article"
              className="mt-10 flex flex-col gap-4 rounded-3xl bg-neutral-white-light/85 px-10 py-6 text-start text-h3 text-neutral-black-dark 2xl:px-15 2xl:py-9"
              key={id}
            >
              {tab.entities[id].children}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

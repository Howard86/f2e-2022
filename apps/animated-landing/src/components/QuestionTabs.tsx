import { ChangeEvent, Fragment, useRef, useState } from 'react'

import { Tab } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { NORMALISED_TABS } from '../constants/tabs'
import QuestionButton from './QuestionButton'
import { AnimationVariant, FADE_UP_VARIANTS, HIDE_AND_SHOW_VARIANTS } from '@/constants/animations'

export default function QuestionTab() {
  const ref = useRef<HTMLDivElement>(null)
  const [selectedTab, setSelectedTab] = useState(NORMALISED_TABS.ids[0])

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTab(Number.parseInt(event.target.value, 10))
  }

  return (
    <div
      ref={ref}
      className="section w-full max-w-[688px] overflow-x-hidden px-4 py-2 lg:max-w-screen-lg"
    >
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <div className="md:hidden">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control  */}
          <label htmlFor="tabs" className="sr-only">
            選擇問題種類
          </label>
          <select
            id="tabs"
            name="tabs"
            role="tablist"
            value={selectedTab}
            className="focus:border-p1 focus:ring-p1 focus:shadow-purple border-n1 text-ch-h5 block w-full rounded-md border bg-transparent py-2 transition-all focus:outline-none"
            onChange={handleSelect}
          >
            {NORMALISED_TABS.ids.map((id) => (
              <option key={id} id={`tab-${id}`} value={id} aria-selected={id === selectedTab}>
                {NORMALISED_TABS.entities[id].name}
              </option>
            ))}
          </select>
        </div>
        <nav className="hidden md:block">
          <Tab.List as="ul" className="flex flex-nowrap">
            {NORMALISED_TABS.ids.map((id) => (
              <Tab
                as="li"
                key={id}
                className="text-n2 relative whitespace-nowrap focus-visible:outline-none"
              >
                <button
                  id={`tab-${id}`}
                  type="button"
                  className="ui-not-selected:hover:text-n1 ui-not-selected:hover:[text-shadow:theme(boxShadow.white)] ui-selected:text-n1 ui-selected:[text-shadow:theme(boxShadow.white)] ui-not-selected:focus:text-n1 ui-not-selected:focus:[text-shadow:theme(boxShadow.white)] text-ch-h5 lg:text-ch-h4 ui-not-selected:before:transition-all relative px-3 py-2 font-medium transition-all lg:px-4"
                >
                  {NORMALISED_TABS.entities[id].name}
                  {selectedTab === id && (
                    <motion.span
                      className="bg-g1 shadow-green absolute left-1/2 -bottom-2 h-1 w-3 -translate-x-1/2 rounded-full"
                      layoutId="underline"
                    />
                  )}
                </button>
              </Tab>
            ))}
          </Tab.List>
        </nav>
        <Tab.Panels as={Fragment}>
          <AnimatePresence mode="wait">
            {NORMALISED_TABS.ids.map((id) => {
              const prevId = id - 1
              const nextId = id + 1

              return (
                <Tab.Panel
                  key={id}
                  as={motion.article}
                  variants={HIDE_AND_SHOW_VARIANTS}
                  initial={AnimationVariant.Initial}
                  animate={AnimationVariant.Activate}
                  exit={AnimationVariant.Initial}
                  className="text-n5 bg-n1 rounded-card mt-9 space-y-6 py-4 lg:py-8"
                >
                  {NORMALISED_TABS.entities[id].docs.map((doc, index) => (
                    <motion.div
                      key={doc.title}
                      variants={FADE_UP_VARIANTS}
                      className="px-6 py-4 lg:flex lg:gap-6 lg:px-12"
                    >
                      <span className="text-p3 text-en-h4 lg:text-en-h3 font-en tracking-widest">
                        Q{index + 1}
                      </span>
                      <div>
                        <h3 className="text-ch-h4 font-bold">{doc.title}</h3>
                        <p className="text-ch-h5 mt-4">{doc.description}</p>
                      </div>
                    </motion.div>
                  ))}
                  <div className="flex items-center justify-between px-5 lg:px-12">
                    {NORMALISED_TABS.entities[prevId] && (
                      <QuestionButton
                        startIcon
                        onClick={() => {
                          setSelectedTab(prevId)
                          if (ref.current) ref.current.scrollIntoView()
                        }}
                      >
                        {NORMALISED_TABS.entities[prevId].name}
                      </QuestionButton>
                    )}
                    <span className="flex-1" />
                    {NORMALISED_TABS.entities[nextId] && (
                      <QuestionButton
                        endIcon
                        onClick={() => {
                          setSelectedTab(nextId)
                          if (ref.current) ref.current.scrollIntoView()
                        }}
                      >
                        {NORMALISED_TABS.entities[nextId].name}
                      </QuestionButton>
                    )}
                  </div>
                </Tab.Panel>
              )
            })}
          </AnimatePresence>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

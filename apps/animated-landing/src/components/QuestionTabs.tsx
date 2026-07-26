import { Tab } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { type ChangeEvent, Fragment, useRef, useState } from 'react'
import { AnimationVariant, CommonQuestionSectionAnimation } from '@/constants/animations'
import { NORMALISED_TABS } from '../constants/tabs'
import QuestionButton from './QuestionButton'

export default function QuestionTab() {
  const ref = useRef<HTMLDivElement>(null)
  const [selectedTab, setSelectedTab] = useState(NORMALISED_TABS.ids[0])

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTab(Number.parseInt(event.target.value, 10))
  }

  return (
    <div
      className="section w-full max-w-[688px] overflow-x-hidden px-4 py-2 lg:max-w-screen-lg"
      ref={ref}
    >
      <Tab.Group onChange={setSelectedTab} selectedIndex={selectedTab}>
        <div className="md:hidden">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control  */}
          <label className="sr-only" htmlFor="tabs">
            選擇問題種類
          </label>
          <select
            className="block w-full rounded-md border border-n1 bg-transparent py-2 text-ch-h5 transition-all focus:border-p1 focus:shadow-purple focus:outline-none focus:ring-p1"
            id="tabs"
            name="tabs"
            onChange={handleSelect}
            role="tablist"
            value={selectedTab}
          >
            {NORMALISED_TABS.ids.map((id) => (
              <option aria-selected={id === selectedTab} id={`tab-${id}`} key={id} value={id}>
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
                className="relative whitespace-nowrap text-n2 focus-visible:outline-none"
                key={id}
              >
                <button
                  className="relative px-3 py-2 font-medium text-ch-h5 ui-selected:text-n1 transition-all ui-selected:[text-shadow:theme(boxShadow.white)] ui-not-selected:before:transition-all ui-not-selected:hover:text-n1 ui-not-selected:focus:text-n1 lg:px-4 lg:text-ch-h4 ui-not-selected:hover:[text-shadow:theme(boxShadow.white)] ui-not-selected:focus:[text-shadow:theme(boxShadow.white)]"
                  id={`tab-${id}`}
                  type="button"
                >
                  {NORMALISED_TABS.entities[id].name}
                  {selectedTab === id && (
                    <motion.span
                      className="absolute -bottom-2 left-1/2 h-1 w-3 -translate-x-1/2 rounded-full bg-g1 shadow-green"
                      layoutId="underline"
                    />
                  )}
                </button>
              </Tab>
            ))}
          </Tab.List>
        </nav>
        <Tab.Panels as={Fragment}>
          <AnimatePresence>
            {NORMALISED_TABS.ids.map((id) => {
              const prevId = id - 1
              const nextId = id + 1

              return (
                <Tab.Panel
                  animate={AnimationVariant.Activate}
                  as={motion.article}
                  className="mt-9 space-y-6 rounded-card bg-n1 py-4 text-n5 lg:py-8"
                  exit={AnimationVariant.Initial}
                  initial={AnimationVariant.Initial}
                  key={id}
                  variants={CommonQuestionSectionAnimation.tabPanel}
                >
                  {NORMALISED_TABS.entities[id].docs.map((doc, index) => (
                    <motion.div
                      className="px-6 py-4 lg:flex lg:gap-6 lg:px-12"
                      key={doc.title}
                      variants={CommonQuestionSectionAnimation.doc}
                    >
                      <span className="font-en text-en-h4 text-p3 tracking-widest lg:text-en-h3">
                        Q{index + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-ch-h4">{doc.title}</h3>
                        <p className="mt-4 text-ch-h5">{doc.description}</p>
                      </div>
                    </motion.div>
                  ))}
                  <div className="flex items-center justify-between px-5 lg:px-12">
                    {NORMALISED_TABS.entities[prevId] ? (
                      <QuestionButton
                        onClick={() => {
                          setSelectedTab(prevId)
                          if (ref.current) {
                            ref.current.scrollIntoView()
                          }
                        }}
                        startIcon
                      >
                        {NORMALISED_TABS.entities[prevId].name}
                      </QuestionButton>
                    ) : null}
                    <span className="flex-1" />
                    {NORMALISED_TABS.entities[nextId] ? (
                      <QuestionButton
                        endIcon
                        onClick={() => {
                          setSelectedTab(nextId)
                          if (ref.current) {
                            ref.current.scrollIntoView()
                          }
                        }}
                      >
                        {NORMALISED_TABS.entities[nextId].name}
                      </QuestionButton>
                    ) : null}
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

import clsx from 'clsx'
import { ChangeEvent, useRef, useState } from 'react'
import { NORMALISED_TABS } from '@/constants/tabs'
import QuestionButton from './QuestionButton'

export default function QuestionTab() {
  const ref = useRef<HTMLDivElement>(null)
  const [selectedTab, setSelectedTab] = useState(NORMALISED_TABS.ids[0])

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTab(Number.parseInt(event.target.value, 10))
  }

  return (
    <div className="flex flex-col items-center px-4 pt-8">
      <div ref={ref} className="sm:hidden">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control  */}
        <label htmlFor="tabs" className="sr-only">
          選擇問題種類
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          role="tablist"
          value={selectedTab}
          className="focus:border-p1 focus:ring-p1 border-n1 block w-full rounded-md border bg-transparent py-2 pl-3 pr-10 focus:outline-none"
          onChange={handleSelect}
        >
          {NORMALISED_TABS.ids.map((id) => (
            <option key={id} id={`tab-${id}`} value={id} aria-selected={id === selectedTab}>
              {NORMALISED_TABS.entities[id].name}
            </option>
          ))}
        </select>
      </div>

      <nav className="hidden sm:block">
        <ul className="flex" aria-label="Tabs" role="tablist">
          {NORMALISED_TABS.ids.map((id) => (
            <li key={id} className="relative">
              <button
                id={`tab-${id}`}
                type="button"
                role="tab"
                onClick={() => setSelectedTab(id)}
                className={clsx(
                  id === selectedTab
                    ? 'before:bg-g1 before:shadow-green [text-shadow:theme(boxShadow.white)] before:absolute before:-bottom-1 before:left-1/2 before:h-1 before:w-3 before:-translate-x-1/2 before:rounded-full'
                    : 'text-n2',
                  'px-3 py-2 font-medium'
                )}
                tabIndex={-1}
                aria-controls={`panel ${id}`}
                aria-selected={id === selectedTab}
              >
                {NORMALISED_TABS.entities[id].name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {NORMALISED_TABS.ids.map((id) => {
        const notSelected = id !== selectedTab
        const prevId = id - 1
        const nextId = id + 1

        return (
          <article
            key={id}
            id={`panel ${id}`}
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`tab ${id}`}
            hidden={notSelected}
            className={clsx(
              notSelected ? 'hidden' : 'text-n5 bg-n1 rounded-card mt-9 space-y-6 py-4'
            )}
          >
            {NORMALISED_TABS.entities[id].docs.map((doc, index) => (
              <div key={doc.title} className="px-6 py-4">
                <span className="text-p3 text-en-h4 font-en tracking-widest">Q{index + 1}</span>
                <h3 className="text-ch-h4 font-bold">{doc.title}</h3>
                <p className="text-ch-h5 mt-4">{doc.description}</p>
              </div>
            ))}
            <div className="flex justify-between px-5">
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
          </article>
        )
      })}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import BlueBlock from './BlueBlock'
import DirtBlock from '../sprints/DirtBlock'

interface RetroRadioGroupProps {
  label: string
  options: string[]
}

export default function RetroRadioGroup({ label, options }: RetroRadioGroupProps) {
  const [activeOption, setActiveOption] = useState()

  return (
    <RadioGroup value={activeOption} onChange={setActiveOption} className="mt-9 flex-1 text-center">
      <RadioGroup.Label className="text-h3">{label}</RadioGroup.Label>
      <div className="bg-neutral-white-light/65 rounded-20 relative z-10 mt-9 flex flex-col gap-9 py-9 px-12">
        {options.map((option) => (
          <RadioGroup.Option
            key={option}
            value={option}
            className="text-neutral-black-dark border-5 ui-checked:border-neutral-black-dark ui-checked:text-secondary-green-light hover:border-primary-main bg-neutral-white-light rounded-20 text-h3 relative flex min-h-[144px] cursor-pointer items-center gap-6 border-transparent p-6 text-start"
          >
            {({ checked }) => (
              <>
                {checked ? (
                  <DirtBlock width={36} height={42} aria-hidden="true" className="shrink-0" />
                ) : (
                  <BlueBlock className="shrink-0" aria-hidden="true" />
                )}
                {option}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

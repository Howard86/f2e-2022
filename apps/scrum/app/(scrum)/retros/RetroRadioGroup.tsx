'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import BlueBlock from './BlueBlock'
import DirtBlock from '../sprints/DirtBlock'

interface RetroRadioGroupProps {
  label: string
  options: string[]
  correctOption: string
}

interface DynamicBlockProps {
  checked?: boolean
  error?: boolean
}

function DynamicBlock({ checked, error }: DynamicBlockProps) {
  if (checked)
    return error ? (
      <BlueBlock className="text-error-main shrink-0" aria-hidden="true" />
    ) : (
      <DirtBlock width={36} height={42} aria-hidden="true" className="shrink-0" />
    )

  return <BlueBlock className="text-primary-main shrink-0" aria-hidden="true" />
}

export default function RetroRadioGroup({ label, options, correctOption }: RetroRadioGroupProps) {
  const [activeOption, setActiveOption] = useState(false)

  return (
    <RadioGroup value={activeOption} onChange={setActiveOption} className="mt-9 flex-1 text-center">
      <RadioGroup.Label className="text-h3">{label}</RadioGroup.Label>
      <div className="bg-neutral-white-light/65 rounded-20 relative z-10 mt-9 flex flex-col gap-6 py-6 px-9 2xl:gap-9 2xl:py-9 2xl:px-12">
        {options.map((option) => (
          <RadioGroup.Option
            key={option}
            value={option}
            className={clsx(
              'text-neutral-black-dark border-5 ui-checked:border-neutral-black-dark hover:border-primary-main bg-neutral-white-light rounded-20 text-h3 relative flex min-h-[9rem] cursor-pointer items-center gap-6 border-transparent p-6 text-start',
              option === correctOption
                ? 'ui-checked:text-secondary-green-light'
                : 'ui-checked:text-error-main'
            )}
          >
            {({ checked }) => (
              <>
                <DynamicBlock checked={checked} error={option !== correctOption} />
                {option}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

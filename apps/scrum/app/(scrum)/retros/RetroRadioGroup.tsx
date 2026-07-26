'use client'

import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
import DirtBlock from '../sprints/DirtBlock'
import BlueBlock from './BlueBlock'

interface RetroRadioGroupProps {
  correctOption: string
  label: string
  options: string[]
}

interface DynamicBlockProps {
  checked?: boolean
  error?: boolean
}

function DynamicBlock({ checked, error }: DynamicBlockProps) {
  if (checked) {
    return error ? (
      <BlueBlock aria-hidden="true" className="shrink-0 text-error-main" />
    ) : (
      <DirtBlock aria-hidden="true" className="shrink-0" height={42} width={36} />
    )
  }

  return <BlueBlock aria-hidden="true" className="shrink-0 text-primary-main" />
}

export default function RetroRadioGroup({ label, options, correctOption }: RetroRadioGroupProps) {
  const [activeOption, setActiveOption] = useState(false)

  return (
    <RadioGroup className="mt-9 flex-1 text-center" onChange={setActiveOption} value={activeOption}>
      <RadioGroup.Label className="text-h3">{label}</RadioGroup.Label>
      <div className="relative z-10 mt-9 flex flex-col gap-6 rounded-20 bg-neutral-white-light/65 px-9 py-6 2xl:gap-9 2xl:px-12 2xl:py-9">
        {options.map((option) => (
          <RadioGroup.Option
            className={clsx(
              'relative flex min-h-[9rem] cursor-pointer items-center gap-6 rounded-20 border-5 border-transparent ui-checked:border-neutral-black-dark bg-neutral-white-light p-6 text-start text-h3 text-neutral-black-dark hover:border-primary-main',
              option === correctOption
                ? 'ui-checked:text-secondary-green-light'
                : 'ui-checked:text-error-main'
            )}
            key={option}
            value={option}
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

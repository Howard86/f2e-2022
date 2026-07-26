import { Switch } from '@headlessui/react'
import type { ComponentProps } from 'react'

type ToggleProps = ComponentProps<typeof Switch> & {
  startLabel?: string
  endLabel?: string
}

export default function Toggle({ startLabel, endLabel, ...props }: ToggleProps) {
  return (
    <Switch.Group as="div" className="flex items-center gap-3 text-h6">
      <Switch
        className="peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 ui-checked:bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        {...props}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 translate-x-0 ui-checked:translate-x-5 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
      {startLabel ? (
        <Switch.Label as="span" className="order-first peer-disabled:text-greyscale-grey">
          {startLabel}
        </Switch.Label>
      ) : null}
      {endLabel ? (
        <Switch.Label as="span" className="peer-disabled:text-greyscale-grey">
          {endLabel}
        </Switch.Label>
      ) : null}
    </Switch.Group>
  )
}

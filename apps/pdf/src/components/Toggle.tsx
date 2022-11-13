import { Switch } from '@headlessui/react'
import type { ComponentType } from 'react'

type ExtractProps<T> = T extends ComponentType<infer P> ? P : T

type ToggleProps = ExtractProps<typeof Switch> & {
  startLabel?: string
  endLabel?: string
}

export default function Toggle({ startLabel, endLabel, ...props }: ToggleProps) {
  return (
    <Switch.Group as="div" className="text-h6 flex items-center gap-3">
      <Switch
        className="ui-checked:bg-indigo-600 peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        {...props}
      >
        <span
          aria-hidden="true"
          className="ui-checked:translate-x-5 pointer-events-none inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
      {startLabel && (
        <Switch.Label as="span" className="peer-disabled:text-greyscale-grey order-first">
          {startLabel}
        </Switch.Label>
      )}
      {endLabel && (
        <Switch.Label as="span" className="peer-disabled:text-greyscale-grey">
          {endLabel}
        </Switch.Label>
      )}
    </Switch.Group>
  )
}

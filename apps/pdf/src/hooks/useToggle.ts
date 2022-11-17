import { useState } from 'react'

export default function useToggle(initialState = false) {
  const [open, setOpen] = useState(initialState)

  const onToggle = () => setOpen((state) => !state)

  return [open, onToggle] as const
}

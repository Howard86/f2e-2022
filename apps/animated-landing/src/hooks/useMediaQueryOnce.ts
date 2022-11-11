import { useState, useEffect, useRef } from 'react'

export default function useMediaQueryOnce(query: string) {
  const matchesRef = useRef(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    matchesRef.current = window.matchMedia(query).matches
    setReady(true)
  }, [query])

  return { ready, matches: matchesRef.current }
}

'use client'

import ArrowDownIcon from '@/components/icons/ArrowDownIcon'

export default function ScrollButton() {
  const onClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className="group inline-flex flex-col items-center justify-center"
      onClick={onClick}
    >
      <span className="text-neutral-white-light/75 group-hover:text-neutral-white-light text-h1 mb-6 transition-colors">
        開始探索
      </span>
      <ArrowDownIcon className="opacity-75 transition-opacity group-hover:opacity-100" />
    </button>
  )
}

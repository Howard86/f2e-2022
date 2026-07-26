'use client'

import ArrowDownIcon from './ArrowDownIcon'

export default function ScrollButton() {
  const onClick = () => {
    window.scrollTo({ behavior: 'smooth', top: document.body.scrollHeight })
  }

  return (
    <button
      className="group inline-flex flex-col items-center justify-center"
      onClick={onClick}
      type="button"
    >
      <span className="mb-6 text-h1 text-neutral-white-light/75 transition-colors group-hover:text-neutral-white-light">
        開始探索
      </span>
      <ArrowDownIcon className="opacity-75 transition-opacity group-hover:opacity-100" />
    </button>
  )
}

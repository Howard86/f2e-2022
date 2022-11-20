import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-greyscale-dark-grey text-greyscale-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        <p> &copy; 2022 The F2E 4th</p>
        <div className="flex items-center gap-4">
          {/* TODO: add localisation */}
          <Link href="/" className="font-bold">
            繁中
          </Link>
          <Link href="/" aria-disabled>
            English
          </Link>
        </div>
      </div>
    </footer>
  )
}

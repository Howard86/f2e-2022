import Link from 'next/link'
import Logo from './Logo'
import Button from './Button'

export default function Header() {
  return (
    <header className="bg-greyscale-white border-greyscale-grey sticky inset-x-0 top-0 z-40 border-b md:static">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 md:py-6">
        <h2 className="text-greyscale-dark-grey text-h2 absolute inset-x-0 top-1/2 hidden -translate-y-1/2 text-center font-bold md:block">
          快速省時的電子簽署工具
        </h2>
        <Link className="z-10" href="/">
          <Logo className="h-auto w-20 md:w-24" />
        </Link>
        <nav className="z-10 flex items-center gap-4">
          <Button as={Link} size="md" variant="text" href="/login">
            登入
          </Button>
          <Button as={Link} size="md" href="/signup">
            註冊
          </Button>
        </nav>
      </div>
    </header>
  )
}

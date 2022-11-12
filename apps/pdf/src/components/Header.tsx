import { Popover } from '@headlessui/react'
import { MdClose, MdMenu } from 'react-icons/md'

import clsx from 'clsx'
import Link from 'next/link'
import Logo from './Logo'

const navigation = [
  { name: '登入', href: '#', current: true },
  { name: '註冊', href: '#', current: false },
]

export default function Header() {
  return (
    <Popover
      as="header"
      className="ui-open:fixed ui-open:inset-0 ui-open:z-40 ui-open:overflow-y-auto bg-greyscale-white border-greyscale-grey border lg:static lg:overflow-y-visible"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
          <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Logo className="w-20" />
              </Link>
            </div>
          </div>
          <div className="hidden min-w-0 flex-1 md:block md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 text-center md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
              <h2>快速省時的電子簽署工具</h2>
            </div>
          </div>
          <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
            <Popover.Button className="text-greyscale-dark border-greyscale-grey inline-flex shrink-0 items-center justify-center rounded-sm border p-1 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">打開選單</span>
              <MdClose className="ui-open:block hidden h-6 w-6" aria-hidden="true" />
              <MdMenu className="ui-open:hidden block h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
            <Link
              href="/login"
              className="ml-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              註冊
            </Link>
          </div>
        </div>
      </div>

      <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
        <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={clsx(
                item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                'block rounded-md py-2 px-3 text-base font-medium'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  )
}

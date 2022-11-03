import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { Fragment } from 'react'
import Link from 'next/link'
import logo from '@/../public/logo.png'
import ExternalLink from './ExternalLink'
import UnifiedLink from './UnifiedLink'

// TODO: update links
const NAV_ITEMS = [
  { name: '關卡資訊', href: '#', current: true },
  { name: '攻略資源', href: 'https://hackmd.io/ofJD4K7iSI65V19zxC7d0w' },
  { name: '求職專區', href: 'https://2022.thef2e.com/jobs' },
]

export default function Header() {
  return (
    <Popover
      as="header"
      className="ui-open:overflow-y-auto bg-n5 fixed inset-x-0 top-0 z-50 lg:static lg:overflow-y-visible"
    >
      <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 lg:py-6">
        <nav className="flex">
          <div className="-ml-1 mr-2 flex items-center md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-1">
              <span className="sr-only">Open menu</span>
              <XMarkIcon className="ui-not-open:hidden w-7.5 h-7.5 block" aria-hidden="true" />
              <Bars3Icon className="ui-open:hidden w-7.5 h-7.5 block" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="flex flex-1 items-center">
            <Link href="/">
              <Image src={logo} alt="f2e logo" className="ml-1 w-[110px]" />
            </Link>
          </div>
          <ul className="hidden md:mx-6 md:flex md:items-center md:space-x-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="relative">
                <UnifiedLink
                  href={item.href}
                  className={clsx(
                    item.current
                      ? 'before:bg-g1 before:shadow-green text-shadow before:absolute before:-bottom-3 before:left-10 before:h-1 before:w-3 before:rounded-full'
                      : 'text-n2',
                    'px-3 py-2 font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </UnifiedLink>
              </li>
            ))}
          </ul>
          <ExternalLink href="#" className="btn">
            立即報名
          </ExternalLink>
        </nav>
      </div>
      {/* TODO: replace with framer motion */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel as="nav" className="lg:hidden" aria-label="menu">
          <ul className="flex flex-col justify-center px-4 pb-8">
            {NAV_ITEMS.map((item) => (
              <Popover.Button key={item.name} as="li">
                <UnifiedLink
                  href={item.href}
                  className="relative flex flex-col items-center"
                  aria-current={item.current ? 'page' : undefined}
                >
                  <span
                    className={clsx(
                      item.current
                        ? 'before:bg-g1 before:shadow-green text-shadow before:absolute before:h-[9px] before:w-1 before:-translate-x-3 before:translate-y-1.5 before:rounded-full'
                        : 'text-n2',
                      'text-ch-p3 inline-block rounded-md p-4 text-center font-medium'
                    )}
                  >
                    {item.name}
                  </span>
                </UnifiedLink>
              </Popover.Button>
            ))}
            <Popover.Button className="btn mt-6">登入</Popover.Button>
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

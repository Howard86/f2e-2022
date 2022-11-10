import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Fragment } from 'react'
import Link from 'next/link'
import logo from '@/../public/logo.png'
import ExternalLink from './ExternalLink'
import UnifiedLink from './UnifiedLink'
import { NAV_ITEMS, SIGN_UP_LINK, SIGN_IN_LINK } from '@/constants/links'

export default function Header() {
  return (
    <Popover
      as="header"
      className="ui-open:overflow-y-auto bg-n5 fixed inset-x-0 top-0 z-50 lg:relative lg:overflow-visible"
    >
      <nav className="mx-auto flex max-w-screen-xl items-center justify-center overflow-visible p-4 md:px-6 lg:px-8 lg:py-6">
        <Popover.Button className="hover:btn-green inline-flex items-center justify-center p-1 lg:hidden">
          <span className="sr-only">開啟選單</span>
          <XMarkIcon
            className="ui-not-open:hidden w-7.5 block h-auto stroke-2"
            aria-hidden="true"
          />
          <Bars3Icon className="ui-open:hidden w-7.5 block h-auto" aria-hidden="true" />
        </Popover.Button>
        <Link href="/" className="ml-4 flex-1">
          <Image
            src={logo}
            alt="f2e logo"
            sizes="(min-width: 980px) 180px, 110px"
            className="h-auto w-[110px] lg:w-[180px]"
            placeholder="blur"
          />
        </Link>
        <ul className="space-x-2 lg:flex lg:items-center lg:gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative hidden lg:block">
              <UnifiedLink
                href={item.href}
                className="text-n2 hover:before-underline focus:before-underline px-3 py-2 font-medium hover:before:-bottom-4"
              >
                {item.name}
              </UnifiedLink>
            </li>
          ))}
          <li className="my-2 lg:hidden">
            <ExternalLink
              href={SIGN_UP_LINK}
              className="rounded-card text-ch-p3 hover:btn-green focus:btn-green border px-4 py-2 transition-all"
            >
              立即報名
            </ExternalLink>
          </li>
          <li className="my-2.5 hidden lg:block">
            <ExternalLink
              href={SIGN_IN_LINK}
              className="rounded-card text-ch-p3 hover:btn-green focus:btn-green border px-6 py-2.5 transition-all"
            >
              登入
            </ExternalLink>
          </li>
        </ul>
      </nav>
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
        <Popover.Panel as="nav" className="text-center lg:hidden" aria-label="menu">
          <ul className="flex flex-col justify-center px-4 pb-8">
            {NAV_ITEMS.map((item) => (
              <Popover.Button key={item.name} as="li">
                <UnifiedLink href={item.href} className="relative">
                  <span className="text-n2 text-ch-p3 hover:before-underline focus:before-underline inline-block rounded-md p-4 text-center font-medium">
                    {item.name}
                  </span>
                </UnifiedLink>
              </Popover.Button>
            ))}
            <Popover.Button
              as={ExternalLink}
              href={SIGN_IN_LINK}
              className="rounded-card text-ch-p3 hover:btn-green focus:btn-green mx-auto mt-6 w-full max-w-xs border px-4 py-2 transition-all"
            >
              登入
            </Popover.Button>
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

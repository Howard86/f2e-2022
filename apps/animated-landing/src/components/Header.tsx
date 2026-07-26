import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import logo from '@/../public/logo.png'
import { NAV_ITEMS, SIGN_IN_LINK, SIGN_UP_LINK } from '@/constants/links'
import ExternalLink from './ExternalLink'
import UnifiedLink from './UnifiedLink'

export default function Header() {
  return (
    <Popover
      as="header"
      className="fixed inset-x-0 top-0 z-50 ui-open:overflow-y-auto bg-n5 lg:relative lg:snap-start lg:overflow-visible"
    >
      <nav className="mx-auto flex max-w-screen-xl items-center justify-center overflow-visible p-4 md:px-6 lg:px-8 lg:py-6">
        <Popover.Button className="hover:btn-green inline-flex items-center justify-center p-1 lg:hidden">
          <span className="sr-only">開啟選單</span>
          <XMarkIcon
            aria-hidden="true"
            className="block ui-not-open:hidden h-auto w-7.5 stroke-2"
          />
          <Bars3Icon aria-hidden="true" className="block ui-open:hidden h-auto w-7.5" />
        </Popover.Button>
        <Link className="ml-4 flex-1" href="/">
          <Image
            alt="f2e logo"
            className="h-auto w-[110px] lg:w-[180px]"
            placeholder="blur"
            sizes="(min-width: 980px) 180px, 110px"
            src={logo}
          />
        </Link>
        <ul className="space-x-2 lg:flex lg:items-center lg:gap-6">
          {NAV_ITEMS.map((item) => (
            <li className="relative hidden lg:block" key={item.href}>
              <UnifiedLink
                className="hover:before-underline focus:before-underline px-3 py-2 font-medium text-n2 hover:text-n1 hover:[text-shadow:theme(boxShadow.white)]"
                href={item.href}
              >
                {item.name}
              </UnifiedLink>
            </li>
          ))}
          <li className="my-2 lg:hidden">
            <ExternalLink
              className="hover:btn-green focus:btn-green rounded-card border px-4 py-2 text-ch-p3 transition-all"
              href={SIGN_UP_LINK}
            >
              立即報名
            </ExternalLink>
          </li>
          <li className="my-2.5 hidden lg:block">
            <ExternalLink
              className="hover:btn-green focus:btn-green rounded-card border px-6 py-2.5 text-ch-p3 transition-all"
              href={SIGN_IN_LINK}
            >
              登入
            </ExternalLink>
          </li>
        </ul>
      </nav>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel aria-label="menu" as="nav" className="text-center lg:hidden">
          <ul className="flex flex-col justify-center px-4 pb-8">
            {NAV_ITEMS.map((item) => (
              <Popover.Button as="li" key={item.name}>
                <UnifiedLink className="relative" href={item.href}>
                  <span className="hover:before-underline focus:before-underline inline-block rounded-md p-4 text-center font-medium text-ch-p3 text-n2 hover:text-n1 hover:[text-shadow:theme(boxShadow.white)]">
                    {item.name}
                  </span>
                </UnifiedLink>
              </Popover.Button>
            ))}
            <Popover.Button
              as={ExternalLink}
              className="hover:btn-green focus:btn-green mx-auto mt-6 w-full max-w-xs rounded-card border px-4 py-2 text-ch-p3 transition-all"
              href={SIGN_IN_LINK}
            >
              登入
            </Popover.Button>
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

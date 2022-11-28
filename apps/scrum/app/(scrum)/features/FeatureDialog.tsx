'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ConversationArticle from 'app/(home)/ConversationArticle'
import ProductOwnerIcon from '../characters/ProductOwnerIcon'

export default function FeatureDialog() {
  const [open, setOpen] = useState(true)

  const handleClose = () => setOpen(false)

  return (
    <Transition.Root show={open} as={Fragment} appear>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <Dialog.Panel className="relative flex items-center justify-center gap-28 overflow-hidden px-[10%]">
                <div>
                  <ProductOwnerIcon head className="h-auto w-[300px]" />
                  <p className="text-h2 text-center">產品負責人</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <Dialog.Title as="h2" className="sr-only">
                      產品需求介紹
                    </Dialog.Title>
                    <ConversationArticle className="px-9 py-6">
                      <p>
                        我是 TT 資訊，開發 A 組的 PO，小敏。
                        <br />
                        PO 也就是產品負責人（Product Owner）。
                        <br />
                        產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出
                        <b>產品待辦清單（Product Backlog）</b>唷！
                        <br />
                        剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
                        既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
                      </p>
                    </ConversationArticle>
                  </div>
                  <div className="mt-16 flex w-full items-center justify-end">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="bg-secondary-green-light text-neutral-black-dark text-h4 shadow-button active:shadow-button-inset rounded-xl py-4 px-14 outline-none"
                    >
                      沒問題！
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

import {
  MdAdd,
  MdArrowBack,
  MdArrowLeft,
  MdCheck,
  MdClose,
  MdOutlineModeEdit,
  MdOutlinePersonAdd,
} from 'react-icons/md'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useState } from 'react'
import IconButton from '@/components/IconButton'
import Layout from '@/components/Layout'
import Step from '@/components/Step'
import Toggle from '@/components/Toggle'

export default function SignPage() {
  const [open, setOpen] = useState(false)
  const onToggle = () => setOpen((state) => !state)

  //   TODO: add different header
  return (
    <Layout>
      <section className="flex w-full flex-1 flex-col overflow-y-scroll">
        <div className="flex items-center justify-between border-b pb-4">
          <IconButton>
            <MdArrowBack className="text-greyscale-dark-grey h-auto w-6" />
          </IconButton>
          <h2 className="text-h5 font-bold">型號U-ew8951出貨單</h2>
          <IconButton>
            <MdOutlineModeEdit className="text-greyscale-dark-grey h-auto w-4" />
          </IconButton>
        </div>
        <div className="flex items-center gap-2 border-b py-2">
          <Step>
            <MdCheck className="h-auto w-5" />
          </Step>
          <Step aria-selected="true">2</Step>
          <p className="flex-1">加入簽名檔</p>
          <Step variant="outlined">3</Step>
          <Step variant="outlined">4</Step>
        </div>
        <div className="bg-greyscale-light-grey relative flex-1 py-6">
          <span>PDF files</span>
          <button
            type="button"
            className="bg-greyscale-white absolute inset-y-0 right-0 shadow-sm"
            onClick={onToggle}
          >
            <MdArrowLeft className="h-auto w-4" />
          </button>
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
              {/* TODO: fix position */}
              <div className="pointer-events-none fixed top-56 bottom-44 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                        <div className="px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title as="h2" className="text-h3 font-bold">
                              簽名設定
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <IconButton onClick={onToggle}>
                                <span className="sr-only">Close panel</span>
                                <MdClose className="h-6 w-6" aria-hidden="true" />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-h5 font-bold">我的簽名</h3>
                          <button type="button" className="btn-primary my-2 w-full">
                            <MdAdd className="mr-2 h-auto w-6" />
                            創建簽名檔
                          </button>
                        </div>
                        <div className="flex items-start p-6">
                          <div className="flex-1 space-y-2">
                            <h3 className="text-h5 font-bold">邀請簽署人</h3>
                            <Toggle startLabel="無簽署順序" endLabel="排列簽署順序" disabled />
                            <Toggle startLabel="無期限" endLabel="指定簽署期限" disabled />
                          </div>
                          <IconButton className="border-greyscale-grey shrink-0 rounded-sm border p-3">
                            <MdOutlinePersonAdd className="h-auto w-6" />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
        <div className="px-6 pb-6 pt-2">
          <button type="button" disabled className="btn-primary w-full py-3">
            下一步
          </button>
        </div>
      </section>
    </Layout>
  )
}

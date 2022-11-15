import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import useToggle from '@/hooks/useToggle'
import Button from './Button'

export default function ConfirmSignDialog() {
  const [open, onToggle] = useToggle()

  return (
    <>
      <Button className="w-full" onClick={onToggle}>
        下一步
      </Button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onToggle}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-mask/40 fixed inset-0 backdrop-blur-[2px] transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-full overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-h2 text-primary-main font-bold">
                        請確認您的檔案
                      </Dialog.Title>
                      <p className="mt-2">確認後將無法修改</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row">
                    <Button disabled className="w-full" onClick={onToggle}>
                      確認
                    </Button>
                    <Button className="w-full" onClick={onToggle}>
                      返回
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

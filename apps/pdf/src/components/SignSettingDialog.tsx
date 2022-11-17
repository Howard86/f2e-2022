import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import { MdArrowLeft, MdClose, MdDragIndicator, MdOutlinePersonAdd } from 'react-icons/md'
import useToggle from '@/hooks/useToggle'
import IconButton from './IconButton'
import Toggle from './Toggle'
import CreateSignDialog from './CreateSignDialog'
import useFileStore from '@/hooks/useFileStore'

interface SignSettingDialogProps {
  onAddSignature: (image: string) => void
}

export default function SignSettingDialog({ onAddSignature }: SignSettingDialogProps) {
  const signatures = useFileStore((state) => state.signatures)
  const [open, onToggle] = useToggle()

  return (
    <>
      <button
        type="button"
        className="bg-greyscale-white absolute top-2 right-2 p-1 shadow-sm"
        onClick={onToggle}
      >
        <MdArrowLeft className="h-auto w-4" />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onToggle}>
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
                      <CreateSignDialog />

                      {signatures.ids.map((id) => (
                        <button
                          type="button"
                          className="border-greyscale-light-grey my-2 flex h-12 w-full border"
                          onClick={() => {
                            onAddSignature(signatures.entities[id].url)
                            onToggle()
                          }}
                        >
                          <span className="py-4 px-2">
                            <MdDragIndicator className="text-greyscale-grey h-auto w-4" />
                          </span>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            alt={`signature made at ${new Date(id).toLocaleDateString()}`}
                            src={signatures.entities[id].url}
                            className="mx-auto"
                          />
                        </button>
                      ))}
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
    </>
  )
}

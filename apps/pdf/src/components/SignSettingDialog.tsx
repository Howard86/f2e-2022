import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import { MdArrowLeft, MdClose, MdOutlinePersonAdd } from 'react-icons/md'
import useToggle from '@/hooks/useToggle'
import IconButton from './IconButton'
import Toggle from './Toggle'
import SignatureSettingSection from './SignatureSettingSection'

interface SignSettingDialogProps {
  onAddSignature: (image: string) => Promise<void>
}

export default function SignSettingDialog({ onAddSignature }: SignSettingDialogProps) {
  const [open, onToggle] = useToggle()

  return (
    <>
      <button
        type="button"
        className="bg-greyscale-white border-greyscale-grey fixed top-[138px] right-2 rounded-sm border p-1 shadow-sm md:hidden"
        onClick={onToggle}
      >
        <MdArrowLeft className="h-auto w-8" />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onToggle}>
          {/* TODO: fix position */}
          <div className="pointer-events-none fixed top-32 bottom-[82px] right-0 flex max-w-full pl-10">
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
                <div className="divide-greyscale-ui-grey bg-greyscale-white relative flex h-full flex-col divide-y shadow-sm">
                  <div className="absolute right-2 top-2">
                    <IconButton onClick={onToggle}>
                      <span className="sr-only">Close panel</span>
                      <MdClose className="h-6 w-6" aria-hidden="true" />
                    </IconButton>
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll p-6">
                    <SignatureSettingSection onAddSignature={onAddSignature} isModal />
                    {/* TODO: add functionality */}
                    <div className="hidden items-start py-6">
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

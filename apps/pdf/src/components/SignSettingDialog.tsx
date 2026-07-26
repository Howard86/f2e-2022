import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { MdArrowLeft, MdClose, MdOutlinePersonAdd } from 'react-icons/md'
import useToggle from '@/hooks/useToggle'
import IconButton from './IconButton'
import SignatureSettingSection from './SignatureSettingSection'
import Toggle from './Toggle'
import ToggleButton from './ToggleButton'

interface SignSettingDialogProps {
  onAddSignature: (image: string) => Promise<void>
}

export default function SignSettingDialog({ onAddSignature }: SignSettingDialogProps) {
  const [open, onToggle] = useToggle()

  return (
    <>
      <ToggleButton
        className="fixed top-[138px] right-2 md:hidden"
        onClick={onToggle}
        type="button"
      >
        <MdArrowLeft className="h-auto w-8" />
      </ToggleButton>
      <Transition.Root as={Fragment} show={open}>
        <Dialog as="div" className="relative z-10" onClose={onToggle}>
          {/* TODO: fix position */}
          <div className="pointer-events-none fixed top-32 right-0 bottom-[82px] flex max-w-full pl-10">
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
                <div className="relative flex h-full flex-col divide-y divide-greyscale-ui-grey bg-greyscale-white shadow-sm">
                  <div className="absolute top-2 right-2">
                    <IconButton onClick={onToggle}>
                      <span className="sr-only">Close panel</span>
                      <MdClose aria-hidden="true" className="h-6 w-6" />
                    </IconButton>
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll p-6">
                    <SignatureSettingSection isModal onAddSignature={onAddSignature} />
                    {/* TODO: add functionality */}
                    <div className="hidden items-start py-6">
                      <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-h5">邀請簽署人</h3>
                        <Toggle disabled endLabel="排列簽署順序" startLabel="無簽署順序" />
                        <Toggle disabled endLabel="指定簽署期限" startLabel="無期限" />
                      </div>
                      <IconButton className="shrink-0 rounded-sm border border-greyscale-grey p-3">
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

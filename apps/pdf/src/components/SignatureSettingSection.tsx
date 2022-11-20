import { MdDragIndicator } from 'react-icons/md'
import { Dialog } from '@headlessui/react'
import useFileStore from '@/hooks/useFileStore'
import CreateSignDialog from './CreateSignDialog'
import MoveVertIcon from './icons/MoveVertIcon'
import TextField from './Input'

export interface SignatureSettingSectionProps {
  isModal?: boolean
  onAddSignature: (url: string) => void
}

export default function SignatureSettingSection({
  onAddSignature,
  isModal = false,
}: SignatureSettingSectionProps) {
  const signatures = useFileStore((state) => state.signatures)

  return (
    <>
      {isModal ? (
        <Dialog.Title as="h2" className="sr-only">
          簽名設定
        </Dialog.Title>
      ) : (
        <h2 className="sr-only">簽名設定</h2>
      )}
      <div className="hidden flex-col gap-2 md:flex">
        <h3 className="text-h5 font-bold">基本資料</h3>
        <TextField id="name" label="姓名" placeholder="請輸入您的姓名" />
        <TextField id="email" label="Email" placeholder="請輸入您的電子信箱" />
      </div>
      <div>
        <h3 className="text-h5 font-bold">我的簽名</h3>
        <CreateSignDialog />

        {signatures.ids.map((id) => (
          <button
            type="button"
            className="border-greyscale-light-grey inline-flex h-12 w-full items-stretch justify-center border"
            onClick={() => {
              onAddSignature(signatures.entities[id].url)
            }}
          >
            <span className="py-4 px-3">
              <MdDragIndicator className="text-greyscale-grey h-auto w-4" />
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`signature made at ${new Date(id).toLocaleDateString()}`}
              src={signatures.entities[id].url}
              className="flex-1 object-contain object-center"
            />
            <span className="py-4 px-3">
              <MoveVertIcon className="h-auto w-4 text-transparent" />
            </span>
          </button>
        ))}
      </div>
    </>
  )
}

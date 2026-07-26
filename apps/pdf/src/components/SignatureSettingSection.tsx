import { Dialog } from '@headlessui/react'
import { MdDragIndicator } from 'react-icons/md'
import useFileStore from '@/hooks/useFileStore'
import CreateSignDialog from './CreateSignDialog'
import TextField from './Input'
import MoveVertIcon from './icons/MoveVertIcon'

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
        <h3 className="font-bold text-h5">基本資料</h3>
        <TextField id="name" label="姓名" placeholder="請輸入您的姓名" />
        <TextField id="email" label="Email" placeholder="請輸入您的電子信箱" />
      </div>
      <div>
        <h3 className="font-bold text-h5">我的簽名</h3>
        <CreateSignDialog />

        {signatures.ids.map((id) => (
          <button
            className="inline-flex h-12 w-full items-stretch justify-center border border-greyscale-light-grey"
            key={id}
            onClick={() => {
              onAddSignature(signatures.entities[id].url)
            }}
            type="button"
          >
            <span className="px-3 py-4">
              <MdDragIndicator className="h-auto w-4 text-greyscale-grey" />
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`signature made at ${new Date(id).toLocaleDateString()}`}
              className="flex-1 object-contain object-center"
              height={48}
              src={signatures.entities[id].url}
              width={160}
            />
            {/* TODO: add options */}
            <span className="px-3 py-4">
              <MoveVertIcon className="h-auto w-4 text-transparent" />
            </span>
          </button>
        ))}
      </div>
    </>
  )
}

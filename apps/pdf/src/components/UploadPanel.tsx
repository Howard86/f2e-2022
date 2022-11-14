import { Tab } from '@headlessui/react'
import { ExtractProps } from 'react'

export default function UploadPanel(props: ExtractProps<typeof Tab.Panel>) {
  return (
    <Tab.Panel className="space-y-10 px-4 pt-10 pb-8" {...props}>
      <div className="flex items-center justify-end gap-2">
        <button type="button" className="btn-primary">
          更改
        </button>
        <button type="button" className="btn-primary">
          清除
        </button>
      </div>
      {/* TODO: Add board */}
      <div className="border-greyscale-ui-grey border px-2 py-8">
        <button type="button" className="btn-primary">
          上傳檔案
        </button>
        <p className="text-primary-main">
          檔案大小10 MB以內
          <span className="hidden">，</span>
          <span className="block">檔案格式jpg, pmg, bmp</span>
        </p>
      </div>
    </Tab.Panel>
  )
}

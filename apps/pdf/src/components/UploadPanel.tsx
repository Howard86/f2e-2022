import { Tab } from '@headlessui/react'
import { ExtractProps } from 'react'
import Button from './Button'

export default function UploadPanel(props: ExtractProps<typeof Tab.Panel>) {
  return (
    <Tab.Panel className="space-y-10 px-4 pt-10 pb-8" {...props}>
      <div className="flex items-center justify-end gap-2">
        <Button size="sm" variant="text">
          回上一步
        </Button>
        <Button size="sm" variant="text">
          清除
        </Button>
      </div>
      {/* TODO: Add board */}
      <div className="border-greyscale-ui-grey rounded-sm border px-2 py-8">
        <Button variant="outlined" size="md">
          上傳檔案
        </Button>
        <p className="text-primary-main mt-4">
          檔案大小10 MB以內
          <span className="hidden">，</span>
          <span className="block">檔案格式jpg, pmg, bmp</span>
        </p>
      </div>
    </Tab.Panel>
  )
}

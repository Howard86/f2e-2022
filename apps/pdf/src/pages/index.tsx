/* eslint-disable react/no-this-in-sfc */
import { SVGProps } from 'react-html-props'
import { ChangeEvent, FC } from 'react'
import { useRouter } from 'next/router'
import AddFile from '@/components/illustrations/AddFile'
import FileUpload from '@/components/illustrations/FileUpload'
import Signing from '@/components/illustrations/Signing'
import Sending from '@/components/illustrations/Sending'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import useFileStore from '@/hooks/useFileStore'

const STEPS: Step[] = [
  {
    title: '上傳檔案',
    description: '選擇PDF檔或是IMG檔',
    illustration: FileUpload,
  },
  {
    title: '加入簽名檔',
    description: '手寫、輸入或是上傳簽名檔',
    illustration: Signing,
  },
  {
    title: '下載與傳送',
    description: '完成簽署可立即傳送檔案給對方',
    illustration: Sending,
  },
]

type Step = {
  title: string
  description: string
  illustration: FC<SVGProps>
}

export default function Home() {
  const router = useRouter()
  const uploadPdf = useFileStore((state) => state.uploadPdf)

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) return

    switch (file.type) {
      case 'application/pdf': {
        const reader = new FileReader()

        reader.onloadend = function load() {
          if (!this.result || typeof this.result === 'string') return

          uploadPdf(new Uint8Array(this.result))

          // TODO: push to dynamic page
          router.push('/upload/sign')
        }

        reader.readAsArrayBuffer(file)
        break
      }

      default:
        console.error('unknown file type:', file.type)
    }
  }

  return (
    <Layout>
      <h1 className="text-greyscale-dark-grey text-h2 font-bold">快速省時的電子簽署工具</h1>
      <form className="bg-primary-light border-primary-main mt-4 mb-10 flex h-[440px] w-full flex-col items-center justify-center border-2 border-dashed">
        <AddFile />
        <p className="hidden md:block">將檔案拖曳至這裡，或</p>
        <Button as="label" htmlFor="file-upload" className="cursor-pointer">
          <span>選擇檔案</span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            // TODO: add image support
            accept=".pdf"
            onChange={handleUpload}
          />
        </Button>
        <p className="text-primary-main text-h5 font-bold">
          檔案大小10Mb以內，檔案格式為PDF、圖片檔
        </p>
      </form>
      <section className="flex flex-col items-center">
        <h2 className="text-h2 font-bold">輕鬆幾步驟，完成您的簽署</h2>
        {STEPS.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center space-y-2 py-4">
            <span className="border-primary-main text-primary-main flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2">
              <span className="text-h4 font-bold">{index + 1}</span>
            </span>
            <h2 className="text-h4 font-bold">{step.title}</h2>
            <p>{step.description}</p>
            <step.illustration />
          </div>
        ))}
      </section>
    </Layout>
  )
}

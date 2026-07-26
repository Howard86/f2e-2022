/* eslint-disable react/no-this-in-sfc */

import { useRouter } from 'next/router'
import type { ChangeEvent, FC } from 'react'
import type { SVGProps } from 'react-html-props'
import Button from '@/components/Button'
import AddFile from '@/components/illustrations/AddFile'
import FileUpload from '@/components/illustrations/FileUpload'
import Sending from '@/components/illustrations/Sending'
import Signing from '@/components/illustrations/Signing'
import Layout from '@/components/Layout'
import useFileStore from '@/hooks/useFileStore'

const STEPS: Step[] = [
  {
    description: '選擇PDF檔或是IMG檔',
    illustration: FileUpload,
    title: '上傳檔案',
  },
  {
    description: '手寫、輸入或是上傳簽名檔',
    illustration: Signing,
    title: '加入簽名檔',
  },
  {
    description: '完成簽署可立即傳送檔案給對方',
    illustration: Sending,
    title: '下載與傳送',
  },
]

type Step = {
  title: string
  description: string
  illustration: FC<SVGProps>
}

const removeFileExtension = (fileName: string) =>
  fileName.slice(0, fileName.endsWith('.jpeg') ? -5 : -4)

export default function Home() {
  const router = useRouter()
  const resetStep = useFileStore((state) => state.resetStep)
  const upsertSigningFile = useFileStore((state) => state.upsertSigningFile)

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }
    const timestamp = Date.now()
    resetStep()

    switch (file.type) {
      case 'application/pdf': {
        const reader = new FileReader()

        reader.onload = async function load() {
          if (!this.result || typeof this.result === 'string') {
            return
          }

          const binaryData = new Uint8Array(this.result)

          const pdfjs = await import('pdfjs-dist')
          pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

          const pdf = await pdfjs.getDocument({ data: binaryData }).promise
          // TODO: update page number
          const page = await pdf.getPage(1)
          const viewport = page.getViewport({ scale: window.devicePixelRatio })

          const virtualCanvas = document.createElement('canvas')
          virtualCanvas.height = viewport.height
          virtualCanvas.width = viewport.width

          await page.render({ canvas: virtualCanvas, viewport }).promise

          const { FabricImage } = await import('fabric')

          const imageScale = 1 / window.devicePixelRatio

          const pdfImage = new FabricImage(virtualCanvas, {
            scaleX: imageScale,
            scaleY: imageScale,
          })

          pdfImage.hasControls = false
          pdfImage.hasBorders = false

          upsertSigningFile({
            image: pdfImage,
            name: removeFileExtension(file.name),
            size: file.size,
            timestamp,
          })

          router.push(`/upload/${timestamp}`)
        }

        reader.readAsArrayBuffer(file)
        break
      }

      case 'image/png':
      case 'image/jpg':
      case 'image/jpeg': {
        upsertSigningFile({
          image: URL.createObjectURL(file),
          name: removeFileExtension(file.name),
          size: file.size,
          timestamp,
        })
        router.push(`/upload/${timestamp}`)
        break
      }

      default:
        console.error('unknown file type:', file.type)
    }
  }

  return (
    <Layout>
      <h1 className="mb-4 font-bold text-greyscale-dark-grey text-h2 md:hidden">
        快速省時的電子簽署工具
      </h1>
      <form className="flex h-[440px] w-full flex-col items-center justify-center border-2 border-primary-main border-dashed bg-primary-light text-center">
        <AddFile className="mb-5 h-auto w-20 md:w-[108px]" />
        <p className="mt-2.5 mb-2 hidden md:block">將檔案拖曳至這裡，或</p>
        {/* TODO: add upload progress */}
        <Button
          as="label"
          className="w-full max-w-[144px] cursor-pointer md:max-w-[416px]"
          htmlFor="file-upload"
        >
          <span>選擇檔案</span>
          <input
            // TODO: add image support
            accept=".pdf,.jpg,.jpeg,.png"
            className="sr-only"
            id="file-upload"
            name="file-upload"
            onChange={handleUpload}
            type="file"
          />
        </Button>
        <p className="mt-2 font-bold text-h5 text-primary-main">
          檔案大小10Mb以內
          <span className="hidden md:inline">，</span>
          <span className="block md:inline">檔案格式為PDF、JPG或PNG</span>
        </p>
      </form>
      <section className="mt-10 w-full text-center">
        <h2 className="font-bold text-h2">輕鬆幾步驟，完成您的簽署</h2>
        <div className="flex flex-col items-center justify-around md:flex-row">
          {STEPS.map((step, index) => (
            <div className="flex flex-col items-center space-y-2 py-4" key={step.title}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-main text-primary-main">
                <span className="font-bold text-h4">{index + 1}</span>
              </span>
              <h2 className="font-bold text-h4">{step.title}</h2>
              <p>{step.description}</p>
              <step.illustration className="h-auto w-full" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

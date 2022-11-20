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
  const resetStep = useFileStore((state) => state.resetStep)
  const upsertSigningFile = useFileStore((state) => state.upsertSigningFile)

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) return

    switch (file.type) {
      case 'application/pdf': {
        const reader = new FileReader()

        reader.onload = async function load() {
          if (!this.result || typeof this.result === 'string') return

          const binaryData = new Uint8Array(this.result)

          const pdfjs = await import('pdfjs-dist')
          pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

          const pdf = await pdfjs.getDocument({ data: binaryData }).promise
          // TODO: update page number
          const page = await pdf.getPage(1)
          const viewport = page.getViewport({ scale: window.devicePixelRatio })

          const virtualCanvas = document.createElement('canvas')
          virtualCanvas.height = viewport.height
          virtualCanvas.width = viewport.width

          const virtualCanvasContext = virtualCanvas.getContext('2d')

          if (!virtualCanvasContext) return

          await page.render({ canvasContext: virtualCanvasContext, viewport }).promise

          const { fabric } = await import('fabric')

          const imageScale = 1 / window.devicePixelRatio

          const pdfImage = new fabric.Image(virtualCanvas, {
            scaleX: imageScale,
            scaleY: imageScale,
          })

          pdfImage.hasControls = false
          pdfImage.hasBorders = false

          resetStep()
          const timestamp = Date.now()

          upsertSigningFile({
            name: file.name,
            size: file.size,
            timestamp,
            image: pdfImage,
          })

          router.push(`/upload/${timestamp}`)
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
      <h1 className="text-greyscale-dark-grey text-h2 mb-4 font-bold md:hidden">
        快速省時的電子簽署工具
      </h1>
      <form className="bg-primary-light border-primary-main flex h-[440px] w-full flex-col items-center justify-center border-2 border-dashed text-center">
        <AddFile className="mb-5 h-auto w-20 md:w-[108px]" />
        <p className="mt-2.5 mb-2 hidden md:block">將檔案拖曳至這裡，或</p>
        {/* TODO: add upload progress */}
        <Button
          as="label"
          htmlFor="file-upload"
          className="w-full max-w-[144px] cursor-pointer md:max-w-[416px]"
        >
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
        <p className="text-primary-main text-h5 mt-2 font-bold">
          檔案大小10Mb以內
          <span className="hidden md:inline">，</span>
          <span className="block md:inline">檔案格式為PDF、圖片檔</span>
        </p>
      </form>
      <section className="mt-10 w-full text-center">
        <h2 className="text-h2 font-bold">輕鬆幾步驟，完成您的簽署</h2>
        <div className="flex flex-col items-center justify-around md:flex-row">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center space-y-2 py-4">
              <span className="border-primary-main text-primary-main flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2">
                <span className="text-h4 font-bold">{index + 1}</span>
              </span>
              <h2 className="text-h4 font-bold">{step.title}</h2>
              <p>{step.description}</p>
              <step.illustration className="h-auto w-full" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

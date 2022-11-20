import { useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  MdDeleteOutline,
  MdOutlineMouse,
  MdOutlineZoomIn,
  MdTextRotationAngleup,
} from 'react-icons/md'
import Button from './Button'
import SignSettingDialog from './SignSettingDialog'
import ConfirmSignDialog from './ConfirmSignDialog'
import useFileStore from '@/hooks/useFileStore'
import SignatureSettingSection from './SignatureSettingSection'
import SharedGoals from './illustrations/SharedGoals'
import ToggleButton from './ToggleButton'
import useToggle from '@/hooks/useToggle'

interface PDFViewerProps {
  timestamp: number
}

const last = <T,>(items: T[]): T => items[items.length - 1]

export default function PDFViewer({ timestamp }: PDFViewerProps) {
  const activeStep = useFileStore((state) => state.activeStep)
  const signFile = useFileStore((state) => state.signingFiles.entities[timestamp])
  const pdfDataUrl = useRef<string | undefined>()
  const canvasRef = useRef<fabric.Canvas | null>(null)

  const [isZooming, toggleZoom] = useToggle()
  const [isDragging, toggleDrag] = useToggle()

  const onCanvasElementMount = useCallback(
    async (element: HTMLCanvasElement | null) => {
      if (!element) {
        canvasRef.current = null
        return
      }

      if (canvasRef.current || !signFile) return

      const { fabric } = await import('fabric')

      if (typeof signFile.image === 'string') {
        // TODO: add dynamic width & height
        canvasRef.current = new fabric.Canvas(element, {
          width: 1200,
          height: 900,
        })
        canvasRef.current.setBackgroundImage(
          signFile.image,
          canvasRef.current.requestRenderAll.bind(canvasRef.current)
        )
        return
      }

      if (!signFile.image.width || !signFile.image.height) return

      canvasRef.current = new fabric.Canvas(element, {
        width: signFile.image.width,
        height: signFile.image.height,
      })

      canvasRef.current.setZoom(signFile.image.scaleX ? 1 / signFile.image.scaleX : 1)

      canvasRef.current.setBackgroundImage(
        signFile.image,
        canvasRef.current.requestRenderAll.bind(canvasRef.current)
      )
    },
    [signFile]
  )

  const handleAddSignature = async (image: string) => {
    const canvas = canvasRef.current

    if (!canvas) return

    const { fabric } = await import('fabric')

    fabric.Image.fromURL(image, (img) => {
      const center = canvas.getCenter()

      img.set({ top: center.top / 2, left: center.left / 2 })
      canvas.add(img)
      canvas.setActiveObject(img)
    })
  }

  // TODO: handle multiple page export
  const handleExport = async () => {
    if (!pdfDataUrl.current) return

    const { jsPDF } = await import('jspdf')

    // eslint-disable-next-line new-cap
    const doc = new jsPDF()

    // TODO: reset zoom level & center
    doc.addImage(
      pdfDataUrl.current,
      'png',
      0,
      0,
      doc.internal.pageSize.width,
      doc.internal.pageSize.height
    )
    doc.save(`${new Date(timestamp).toLocaleDateString()}-${signFile.name}`)
  }

  const handleConfirmSigning = async () => {
    if (!canvasRef.current) return

    pdfDataUrl.current = canvasRef.current.toDataURL({ format: 'jpeg' })
  }

  const handleDeleteSignature = () => {
    const canvas = canvasRef.current

    if (!canvas) return

    const object = canvas.getActiveObject() ?? last(canvas.getObjects())

    if (!object) return

    canvas.remove(object)
  }

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas || !isZooming) return

    canvas.on('mouse:wheel', (option) => {
      let zoom = canvas.getZoom()
      zoom *= 0.999 ** option.e.deltaY

      if (zoom > 10) zoom = 10
      if (zoom < 0.1) zoom = 0.1

      canvas.zoomToPoint({ x: option.e.x, y: option.e.y }, zoom)
      option.e.preventDefault()
      option.e.stopPropagation()
    })

    // eslint-disable-next-line consistent-return
    return () => {
      canvas.off()
    }
  }, [isZooming])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas || !isDragging) return

    let isHolding = false
    let draggedX = 0
    let draggedY = 0

    canvas.on('mouse:down', (option) => {
      isHolding = true
      draggedX = option.e.clientX
      draggedY = option.e.clientY
      canvas.selection = true
      option.e.preventDefault()
      option.e.stopPropagation()
    })

    canvas.on('mouse:move', (option) => {
      if (
        !isHolding ||
        !canvas.viewportTransform ||
        option.e.clientX === undefined ||
        option.e.clientY === undefined
      )
        return

      // TODO: fix no pointer on mobile
      const x = option.e.clientX
      const y = option.e.clientY

      isHolding = true
      canvas.viewportTransform[4] += x - draggedX
      canvas.viewportTransform[5] += y - draggedY
      canvas.requestRenderAll()
      draggedX = x
      draggedY = y

      option.e.preventDefault()
      option.e.stopPropagation()
    })
    canvas.on('mouse:up', () => {
      isHolding = false
      canvas.selection = false
    })

    // eslint-disable-next-line consistent-return
    return () => {
      canvas.off()
    }
  }, [isDragging])

  if (activeStep === 4) {
    return (
      <main className="m-auto flex flex-col items-center justify-center gap-10 md:flex-row">
        <SharedGoals className="h-auto w-80" />
        <div>
          <h1 className="text-primary-main text-h2 font-bold">恭喜您！檔案已就緒 </h1>
          <p className="mt-2 mb-10">現在您可以下載檔案或註冊會員，以體驗更多功能。</p>
          <div className="flex flex-col items-center gap-4">
            <Button onClick={handleExport} className="w-full">
              下載檔案
            </Button>
            <Button variant="text" as={Link} href="/" className="w-full">
              回到首頁
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-1 overflow-y-scroll">
      <main className="bg-greyscale-light-grey relative flex flex-1 shrink flex-col overflow-x-scroll">
        <div className="flex-1 overflow-y-auto p-6">
          <canvas ref={onCanvasElementMount} />
          <SignSettingDialog onAddSignature={handleAddSignature} />
        </div>
        <div className="absolute left-4 bottom-28 z-10 flex items-center gap-4 md:bottom-8">
          <ToggleButton onClick={handleDeleteSignature}>
            <MdDeleteOutline className="h-auto w-6" />
          </ToggleButton>
          <ToggleButton aria-pressed={isZooming} onClick={toggleZoom}>
            {isZooming ? (
              <MdOutlineMouse className="h-auto w-6" />
            ) : (
              <MdOutlineZoomIn className="h-auto w-6" />
            )}
          </ToggleButton>
          <ToggleButton aria-pressed={isDragging} onClick={toggleDrag}>
            {isDragging ? (
              <MdOutlineMouse className="h-auto w-6" />
            ) : (
              <MdTextRotationAngleup className="h-auto w-6" />
            )}
          </ToggleButton>
        </div>
        <div className="px-6 pb-6 pt-2 md:hidden">
          <ConfirmSignDialog onConfirm={handleConfirmSigning} />
        </div>
      </main>
      <aside className="hidden w-[304px] shrink-0 grow-0 flex-col gap-6 p-6 md:flex">
        <SignatureSettingSection onAddSignature={handleAddSignature} />
        <div className="flex-1" />
        <div>
          <ConfirmSignDialog onConfirm={handleConfirmSigning} />
        </div>
      </aside>
    </div>
  )
}

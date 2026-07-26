import type { Canvas as FabricCanvas, FabricImage as FabricImageType } from 'fabric'
import Link from 'next/link'
import { useCallback, useEffect, useRef } from 'react'
import {
  MdDeleteOutline,
  MdOutlineMouse,
  MdOutlineZoomIn,
  MdTextRotationAngleup,
} from 'react-icons/md'
import useFileStore from '@/hooks/useFileStore'
import useToggle from '@/hooks/useToggle'
import Button from './Button'
import ConfirmSignDialog from './ConfirmSignDialog'
import SharedGoals from './illustrations/SharedGoals'
import SignatureSettingSection from './SignatureSettingSection'
import SignSettingDialog from './SignSettingDialog'
import ToggleButton from './ToggleButton'

interface PDFViewerProps {
  timestamp: number
}

const last = <T,>(items: T[]): T | undefined => items.at(-1)

async function createPdfCanvas(
  element: HTMLCanvasElement,
  source: FabricImageType | string
): Promise<FabricCanvas | null> {
  const { Canvas, FabricImage } = await import('fabric')

  if (!element.isConnected) {
    return null
  }

  const isUrl = typeof source === 'string'
  const image = isUrl ? await FabricImage.fromURL(source) : source

  if (!(element.isConnected && image.width && image.height)) {
    return null
  }

  const canvas = new Canvas(element, {
    height: isUrl ? 900 : image.height,
    width: isUrl ? 1200 : image.width,
  })

  image.canvas = canvas
  canvas.backgroundImage = image

  if (!isUrl) {
    canvas.setZoom(image.scaleX ? 1 / image.scaleX : 1)
  }
  canvas.requestRenderAll()

  return canvas
}

export default function PDFViewer({ timestamp }: PDFViewerProps) {
  const activeStep = useFileStore((state) => state.activeStep)
  const signFile = useFileStore((state) => state.signingFiles.entities[timestamp])
  const pdfDataUrl = useRef<string | undefined>(undefined)
  const canvasRef = useRef<FabricCanvas | null>(null)

  const [isZooming, toggleZoom] = useToggle()
  const [isDragging, toggleDrag] = useToggle()

  const onCanvasElementMount = useCallback(
    (element: HTMLCanvasElement | null) => {
      if (!element) {
        const canvas = canvasRef.current
        canvasRef.current = null
        void canvas?.dispose()
        return
      }

      if (canvasRef.current || !signFile) {
        return
      }

      void createPdfCanvas(element, signFile.image).then((canvas) => {
        if (!canvas) {
          return
        }

        if (!element.isConnected || canvasRef.current) {
          void canvas.dispose()
          return
        }

        canvasRef.current = canvas
      })
    },
    [signFile]
  )

  const handleAddSignature = async (image: string) => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const { FabricImage } = await import('fabric')
    const img = await FabricImage.fromURL(image)
    const center = canvas.getCenterPoint()

    img.set({ left: center.x / 2, top: center.y / 2 })
    canvas.add(img)
    canvas.setActiveObject(img)
  }

  // TODO: handle multiple page export
  const handleExport = async () => {
    if (!pdfDataUrl.current) {
      return
    }

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

  const handleConfirmSigning = () => {
    if (!canvasRef.current) {
      return
    }

    pdfDataUrl.current = canvasRef.current.toDataURL({ format: 'jpeg', multiplier: 1 })
  }

  const handleDeleteSignature = () => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const object = canvas.getActiveObject() ?? last(canvas.getObjects())

    if (!object) {
      return
    }

    canvas.remove(object)
  }

  useEffect(() => {
    const canvas = canvasRef.current

    if (!(canvas && isZooming)) {
      return
    }

    canvas.on('mouse:wheel', (option) => {
      let zoom = canvas.getZoom()
      zoom *= 0.999 ** option.e.deltaY

      if (zoom > 10) {
        zoom = 10
      }
      if (zoom < 0.1) {
        zoom = 0.1
      }

      canvas.zoomToPoint(canvas.getViewportPoint(option.e), zoom)
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

    if (!(canvas && isDragging)) {
      return
    }

    let isHolding = false
    let draggedX = 0
    let draggedY = 0

    canvas.on('mouse:down', (option) => {
      const point = canvas.getViewportPoint(option.e)

      isHolding = true
      draggedX = point.x
      draggedY = point.y
      canvas.selection = true
      option.e.preventDefault()
      option.e.stopPropagation()
    })

    canvas.on('mouse:move', (option) => {
      if (!(isHolding && canvas.viewportTransform)) {
        return
      }

      // TODO: fix no pointer on mobile
      const { x, y } = canvas.getViewportPoint(option.e)

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
          <h1 className="font-bold text-h2 text-primary-main">恭喜您！檔案已就緒 </h1>
          <p className="mt-2 mb-10">現在您可以下載檔案或註冊會員，以體驗更多功能。</p>
          <div className="flex flex-col items-center gap-4">
            <Button className="w-full" onClick={handleExport}>
              下載檔案
            </Button>
            <Button as={Link} className="w-full" href="/" variant="text">
              回到首頁
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-1 overflow-y-scroll">
      <main className="relative flex flex-1 shrink flex-col overflow-x-scroll bg-greyscale-light-grey">
        <div className="flex-1 overflow-y-auto p-6">
          <canvas ref={onCanvasElementMount} />
          <SignSettingDialog onAddSignature={handleAddSignature} />
        </div>
        <div className="absolute bottom-28 left-4 z-10 flex items-center gap-4 md:bottom-8">
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
        <div className="px-6 pt-2 pb-6 md:hidden">
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

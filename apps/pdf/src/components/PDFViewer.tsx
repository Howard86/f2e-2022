import { useCallback, useEffect, useRef } from 'react'
import Button from './Button'
import SignSettingDialog from './SignSettingDialog'
import ConfirmSignDialog from './ConfirmSignDialog'
import useFileStore from '@/hooks/useFileStore'
import SignatureSettingSection from './SignatureSettingSection'

interface PDFViewerProps {
  timestamp: number
}

export default function PDFViewer({ timestamp }: PDFViewerProps) {
  const signFile = useFileStore((state) => state.signingFiles.entities[timestamp])

  const canvasRef = useRef<fabric.Canvas | null>(null)

  const onCanvasElementMount = useCallback(
    async (element: HTMLCanvasElement | null) => {
      if (!element) {
        canvasRef.current = null
        return
      }

      if (canvasRef.current || !signFile || !signFile.image.width || !signFile.image.height) return

      const { fabric } = await import('fabric')

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
    const canvas = canvasRef.current

    if (!canvas) return

    const { jsPDF } = await import('jspdf')

    // eslint-disable-next-line new-cap
    const doc = new jsPDF()

    // TODO: reset zoom level & center
    doc.addImage(
      canvas.toDataURL({ format: 'image/png' }),
      'png',
      0,
      0,
      doc.internal.pageSize.width,
      doc.internal.pageSize.height
    )
    doc.save(`${new Date(timestamp).toLocaleString()}-${signFile.name}`)
  }

  // TODO: fix scroll event handler
  useEffect(() => {
    const docCanvas = canvasRef.current

    if (!docCanvas) return

    let isDragging = false
    let draggedX = 0
    let draggedY = 0

    docCanvas.on('mouse:wheel', (option) => {
      let zoom = docCanvas.getZoom()
      zoom *= 0.999 ** option.e.deltaY

      if (zoom > 10) zoom = 10
      if (zoom < 0.1) zoom = 0.1

      docCanvas.zoomToPoint({ x: option.e.x, y: option.e.y }, zoom)
      option.e.preventDefault()
      option.e.stopPropagation()
    })

    docCanvas.on('mouse:down', (option) => {
      if (!option.e.altKey) return

      isDragging = true
      draggedX = option.e.clientX
      draggedY = option.e.clientY
      docCanvas.selection = true
      option.e.preventDefault()
      option.e.stopPropagation()
    })

    docCanvas.on('mouse:move', (option) => {
      if (
        !isDragging ||
        !docCanvas.viewportTransform ||
        option.e.clientX === undefined ||
        option.e.clientY === undefined
      )
        return

      // TODO: fix no pointer on mobile
      const x = option.e.clientX
      const y = option.e.clientY

      isDragging = true
      docCanvas.viewportTransform[4] += x - draggedX
      docCanvas.viewportTransform[5] += y - draggedY
      docCanvas.requestRenderAll()
      draggedX = x
      draggedY = y

      option.e.preventDefault()
      option.e.stopPropagation()
    })
    docCanvas.on('mouse:up', () => {
      isDragging = false
      docCanvas.selection = false
    })

    // eslint-disable-next-line consistent-return
    return () => {
      docCanvas.off()
    }
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-1 overflow-y-scroll">
      <main className="bg-greyscale-light-grey flex flex-1 shrink flex-col overflow-x-scroll">
        <div className="relative flex-1 overflow-y-auto py-6">
          <canvas ref={onCanvasElementMount} />
          <div className="absolute">
            <Button
              onClick={() => {
                const canvas = canvasRef.current

                if (!canvas) return

                const object = canvas.getActiveObject()

                if (!object) {
                  alert('please select a signature first')
                  return
                }

                canvas.remove(object)
              }}
            >
              Delete
            </Button>
          </div>
          <SignSettingDialog onAddSignature={handleAddSignature} />
        </div>
        <div className="px-6 pb-6 pt-2 md:hidden">
          <ConfirmSignDialog onConfirm={handleExport} />
        </div>
      </main>
      <aside className="hidden w-[304px] shrink-0 grow-0 flex-col gap-6 p-6 md:flex">
        <SignatureSettingSection onAddSignature={handleAddSignature} />
        <div className="flex-1" />
        <div>
          <ConfirmSignDialog onConfirm={handleExport} />
        </div>
      </aside>
    </div>
  )
}

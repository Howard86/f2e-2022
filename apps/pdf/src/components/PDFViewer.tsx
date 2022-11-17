import { useEffect, useRef, useState } from 'react'
import type { PDFDocumentProxy } from 'pdfjs-dist'
import { fabric } from 'fabric'
import Button from './Button'
import SignSettingDialog from './SignSettingDialog'
import ConfirmSignDialog from './ConfirmSignDialog'

const FILE_PATH = '/assets/sample-invoice-3.pdf'

export default function PDFViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const fabricRef = useRef<fabric.Canvas | null>(null)
  const renderingRef = useRef(false)
  const pdfFileRef = useRef<PDFDocumentProxy | null>(null)

  const [numPages, setNumPages] = useState(0)
  const [pageNum, setPageNum] = useState(1)
  const [loaded, setLoaded] = useState(false)

  const handleAddSignature = (image: string) => {
    const canvas = fabricRef.current

    if (!canvas) return

    fabric.Image.fromURL(image, (img) => {
      const center = canvas.getCenter()

      img.set({ top: center.top, left: center.left })
      canvas.add(img)
      canvas.setActiveObject(img)
    })
  }

  // TODO: handle multiple page export
  const handleExport = async () => {
    const canvas = fabricRef.current

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
    // TODO: add file name
    doc.save('signed.pdf')
  }

  // TODO: clean up these useEffects
  useEffect(() => {
    const loadPdf = async () => {
      const rawCanvas = canvasRef.current

      if (!rawCanvas || renderingRef.current || !containerRef.current || !canvasRef.current) return

      const context = rawCanvas.getContext('2d')

      if (!context) return

      if (!pdfFileRef.current) {
        const pdfjs = await import('pdfjs-dist')
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

        pdfFileRef.current = await pdfjs.getDocument(FILE_PATH).promise
      }

      if (numPages === 0) {
        setNumPages(pdfFileRef.current.numPages)
        setPageNum(pdfFileRef.current.numPages)
        return
      }

      const page = await pdfFileRef.current.getPage(pageNum)
      const viewport = page.getViewport({ scale: window.devicePixelRatio })

      if (!fabricRef.current) {
        fabricRef.current = new fabric.Canvas(rawCanvas, {
          height: viewport.height,
          width: viewport.width,
        })
      }

      const canvas = fabricRef.current

      const newCanvas = document.createElement('canvas')
      const newContext = newCanvas.getContext('2d')

      if (!newContext) return

      newCanvas.height = viewport.height
      newCanvas.width = viewport.width

      renderingRef.current = true
      await page.render({ canvasContext: newContext, viewport }).promise.finally(() => {
        renderingRef.current = false
      })

      canvas.zoomToPoint(
        { x: viewport.width / 2, y: 0 },
        -0.05 + canvasRef.current.clientWidth / viewport.width
      )
      canvas.requestRenderAll()

      const imageScale = 1 / window.devicePixelRatio

      const pdfImage = new fabric.Image(newCanvas, {
        scaleX: imageScale,
        scaleY: imageScale,
      })

      pdfImage.hasControls = false
      pdfImage.hasBorders = false

      const backgroundScale =
        canvas.width && pdfImage.width ? canvas.width / pdfImage.width : undefined

      canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas), {
        scaleX: backgroundScale,
        scaleY: backgroundScale,
      })

      setLoaded(true)
    }

    loadPdf().catch(console.error)
  }, [numPages, pageNum])

  useEffect(() => {
    const canvas = fabricRef.current

    if (!canvas || !loaded) return

    let isDragging = false
    let draggedX = 0
    let draggedY = 0

    canvas.on('mouse:wheel', (option) => {
      let zoom = canvas.getZoom()
      zoom *= 0.999 ** option.e.deltaY

      if (zoom > 10) zoom = 10
      if (zoom < 0.1) zoom = 0.1

      canvas.zoomToPoint({ x: option.e.x, y: option.e.y }, zoom)
      option.e.preventDefault()
      option.e.stopPropagation()
    })

    canvas.on('mouse:down', (option) => {
      if (!option.e.altKey) return

      isDragging = true
      draggedX = option.e.clientX
      draggedY = option.e.clientY
      canvas.selection = true
      option.e.preventDefault()
      option.e.stopPropagation()
    })

    canvas.on('mouse:move', (option) => {
      if (
        !isDragging ||
        !canvas.viewportTransform ||
        option.e.clientX === undefined ||
        option.e.clientY === undefined
      )
        return

      // TODO: fix no pointer on mobile
      const x = option.e.clientX
      const y = option.e.clientY

      isDragging = true
      canvas.viewportTransform[4] += x - draggedX
      canvas.viewportTransform[5] += y - draggedY
      canvas.requestRenderAll()
      draggedX = x
      draggedY = y

      option.e.preventDefault()
      option.e.stopPropagation()
    })
    canvas.on('mouse:up', () => {
      isDragging = false
      canvas.selection = false
    })

    // eslint-disable-next-line consistent-return
    return () => {
      canvas.off()
    }
  }, [loaded])

  return (
    // TODO: fix vertical scroll
    <>
      <div className="bg-greyscale-light-grey relative flex-1 py-6">
        <div ref={containerRef} className="flex flex-col items-center justify-center">
          {numPages > 1 && (
            <div className="flex items-center gap-2 pb-4">
              <Button disabled={pageNum === 1} onClick={() => setPageNum((state) => state - 1)}>
                Prev
              </Button>
              <p className="p-2">
                {pageNum} /{numPages}
              </p>
              <Button
                disabled={pageNum === numPages}
                onClick={() => setPageNum((state) => state + 1)}
              >
                Next
              </Button>
            </div>
          )}
          <canvas ref={canvasRef} />
        </div>
        <div className="absolute">
          <Button
            onClick={() => {
              const canvas = fabricRef.current

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
      <div className="px-6 pb-6 pt-2">
        <ConfirmSignDialog onConfirm={handleExport} />
      </div>
    </>
  )
}

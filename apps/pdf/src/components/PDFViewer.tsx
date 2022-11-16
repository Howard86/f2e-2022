import { useEffect, useRef, useState } from 'react'
import type { PDFDocumentProxy } from 'pdfjs-dist'
import { fabric } from 'fabric'
import Button from './Button'

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

  useEffect(() => {
    const loadPdf = async () => {
      const rawCanvas = canvasRef.current

      if (!rawCanvas || renderingRef.current || !containerRef.current) return

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
          height: (viewport.height * containerRef.current.clientWidth) / viewport.width,
          width: containerRef.current.clientWidth,
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
    <div ref={containerRef} className="flex flex-col items-center justify-center">
      {numPages > 1 && (
        <div className="flex items-center gap-2 pb-4">
          <Button disabled={pageNum === 1} onClick={() => setPageNum((state) => state - 1)}>
            Prev
          </Button>
          <p className="p-2">
            {pageNum} /{numPages}
          </p>
          <Button disabled={pageNum === numPages} onClick={() => setPageNum((state) => state + 1)}>
            Next
          </Button>
        </div>
      )}
      <canvas ref={canvasRef} />
    </div>
  )
}

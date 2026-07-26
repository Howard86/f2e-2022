import { Dialog, Tab, Transition } from '@headlessui/react'
import type { Canvas as FabricCanvas } from 'fabric'
import { type ChangeEvent, Fragment, useRef, useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'
import useFileStore from '@/hooks/useFileStore'
import useToggle from '@/hooks/useToggle'
import Button from './Button'
import CreateSignTab from './CreateSignTab'

const DRAWING_BOARD_HEIGHT = 160
const DRAWING_THICKNESS = 4

export default function CreateSignDialog() {
  const upsertSignature = useFileStore((state) => state.upsertSignature)

  const uploadInputRef = useRef<HTMLInputElement>(null)
  const fabricRef = useRef<FabricCanvas | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [previewUrl, setPreviewUrl] = useState<string | undefined>()
  const [dialogOpen, onToggleDialogOpen] = useToggle()
  const [drawingStarted, onToggleDrawingStarted, setDrawingStarted] = useToggle()

  const handleCanvasMount = (ref: HTMLCanvasElement | null) => {
    if (!ref) {
      const canvas = fabricRef.current
      fabricRef.current = null
      void canvas?.dispose()
      return
    }

    if (!containerRef.current || fabricRef.current) {
      return
    }

    void import('fabric').then(({ Canvas, PencilBrush }) => {
      if (!ref.isConnected || fabricRef.current || !containerRef.current) {
        return
      }

      const canvas = new Canvas(ref, {
        containerClass: 'mx-auto',
        height: DRAWING_BOARD_HEIGHT,
        width: containerRef.current.clientWidth,
      })

      canvas.isDrawingMode = true
      canvas.freeDrawingBrush = new PencilBrush(canvas)
      canvas.freeDrawingBrush.width = DRAWING_THICKNESS
      fabricRef.current = canvas
    })
  }

  const handleClear = () => {
    if (!fabricRef.current) {
      return
    }

    fabricRef.current.clear()
    setDrawingStarted(false)
  }

  const handleMovePreviousStep = () => {
    if (!fabricRef.current) {
      return
    }

    const objects = fabricRef.current.getObjects()

    if (objects.length === 0) {
      return
    }

    const count = objects.length

    if (count === 1) {
      setDrawingStarted(false)
    }

    const previousObject = objects.at(-1)

    if (previousObject) {
      fabricRef.current.remove(previousObject)
    }
  }

  const handleClose = () => {
    onToggleDialogOpen()
    setDrawingStarted(false)
  }

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const fileReader = new FileReader()

    fileReader.onloadend = function load() {
      // eslint-disable-next-line react/no-this-in-sfc
      const url = this.result

      if (typeof url !== 'string') {
        return
      }

      setPreviewUrl(url)
    }

    fileReader.readAsDataURL(file)
  }

  const handleClearUpload = () => {
    if (!uploadInputRef.current) {
      return
    }

    uploadInputRef.current.files = null
    setPreviewUrl(undefined)
  }

  const handleEditUpload = () => {
    if (!uploadInputRef.current) {
      return
    }

    uploadInputRef.current.click()
  }

  // TODO: split this function
  const handleSave = () => {
    if (previewUrl) {
      upsertSignature({ timestamp: Date.now(), url: previewUrl })
      onToggleDialogOpen()
      handleClearUpload()
      return
    }

    if (!fabricRef.current) {
      return
    }

    upsertSignature({ timestamp: Date.now(), url: fabricRef.current.toDataURL() })

    onToggleDialogOpen()
    setDrawingStarted(false)
  }

  return (
    <>
      <Button className="my-2 w-full" onClick={handleClose} variant="outlined">
        <MdAdd className="mr-2 h-auto w-6" />
        創建簽名檔
      </Button>
      <Transition.Root as={Fragment} show={dialogOpen}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-mask/40 backdrop-blur-[2px] transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-full overflow-hidden rounded-lg bg-greyscale-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:p-6">
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2"
                      onClick={onToggleDialogOpen}
                      type="button"
                    >
                      <span className="sr-only">Close</span>
                      <MdClose aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="font-medium text-gray-900 text-lg leading-6">
                        創建簽名
                      </Dialog.Title>
                      <Tab.Group as="div" className="mt-2">
                        <div className="border-gray-200 border-b">
                          <Tab.List className="-mb-px flex space-x-8">
                            <CreateSignTab>手寫</CreateSignTab>
                            <CreateSignTab>上傳</CreateSignTab>
                          </Tab.List>
                        </div>
                        <Tab.Panels as={Fragment}>
                          <Tab.Panel className="flex flex-col items-center gap-10 py-4">
                            <div className="flex items-center justify-end gap-2 self-end">
                              <Button
                                disabled={!drawingStarted}
                                onClick={handleMovePreviousStep}
                                size="sm"
                                variant="text"
                              >
                                回上一步
                              </Button>
                              <Button
                                disabled={!drawingStarted}
                                onClick={handleClear}
                                size="sm"
                                variant="text"
                              >
                                清除
                              </Button>
                            </div>
                            <div
                              className="relative h-40 w-full rounded-sm border border-greyscale-ui-grey"
                              ref={containerRef}
                            >
                              {drawingStarted ? (
                                <div>
                                  <canvas ref={handleCanvasMount} />
                                </div>
                              ) : (
                                <button
                                  className="inline-flex h-full w-full items-center justify-center text-greyscale-grey"
                                  onClick={onToggleDrawingStarted}
                                  type="button"
                                >
                                  請在這裡寫下您的簽名
                                </button>
                              )}
                              <div className="absolute right-2 bottom-2 z-10 flex gap-2">
                                <span className="h-2 w-2 rounded-full bg-greyscale-dark" />
                                <span className="h-2 w-2 rounded-full bg-info" />
                                <span className="h-2 w-2 rounded-full bg-error" />
                                <span />
                              </div>
                            </div>
                          </Tab.Panel>
                          <Tab.Panel className="space-y-10 pt-10 pb-8">
                            <div className="flex items-center justify-end gap-2">
                              <Button onClick={handleEditUpload} size="sm" variant="text">
                                更改
                              </Button>
                              <Button onClick={handleClearUpload} size="sm" variant="text">
                                清除
                              </Button>
                            </div>
                            <div className="rounded-sm border border-greyscale-ui-grey px-2 py-8">
                              {previewUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  alt="uploaded signature"
                                  className="mx-auto h-full w-auto"
                                  height={160}
                                  src={previewUrl}
                                  width={320}
                                />
                              ) : null}
                              <form
                                className={previewUrl ? 'hidden' : 'flex flex-col items-center'}
                              >
                                <Button as="label" className="cursor-pointer" htmlFor="file-upload">
                                  <span>選擇檔案</span>
                                  <input
                                    accept=".jpg,.png,.bmp"
                                    className="sr-only"
                                    id="file-upload"
                                    name="file-upload"
                                    onChange={handleUpload}
                                    ref={uploadInputRef}
                                    type="file"
                                  />
                                </Button>
                                <p>或將檔案拖曳至這裡</p>
                                <p className="mt-4 text-primary-main">
                                  檔案大小10 MB以內
                                  <span className="hidden">，</span>
                                  <span className="block">檔案格式jpg, png, bmp</span>
                                </p>
                              </form>
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col items-center gap-2">
                    <p className="text-greyscale-dark-grey text-h6">
                      我了解這是一個具法律效力的本人簽名
                    </p>
                    <Button className="px-9" onClick={handleSave} size="md">
                      儲存
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

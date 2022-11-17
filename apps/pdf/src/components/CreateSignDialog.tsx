import { Transition, Dialog, Tab } from '@headlessui/react'
import { ChangeEvent, Fragment, useRef, useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'
import useToggle from '@/hooks/useToggle'
import Button from './Button'
import CreateSignTab from './CreateSignTab'
import useFileStore from '@/hooks/useFileStore'

const DRAWING_BOARD_HEIGHT = 160
const DRAWING_THICKNESS = 4

export default function CreateSignDialog() {
  const upsertSignature = useFileStore((state) => state.upsertSignature)

  const uploadInputRef = useRef<HTMLInputElement>(null)
  const fabricRef = useRef<fabric.Canvas | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [previewUrl, setPreviewUrl] = useState<string | undefined>()
  const [dialogOpen, onToggleDialogOpen] = useToggle()
  const [drawingStarted, onToggleDrawingStarted, setDrawingStarted] = useToggle()

  const handleCanvasMount = async (ref: HTMLCanvasElement | null) => {
    if (!ref || !containerRef.current) return

    const { fabric } = await import('fabric')

    fabricRef.current = new fabric.Canvas(ref, {
      height: DRAWING_BOARD_HEIGHT,
      width: containerRef.current.clientWidth,
      containerClass: 'mx-auto',
    })
    fabricRef.current.isDrawingMode = true
    fabricRef.current.freeDrawingBrush.width = DRAWING_THICKNESS
  }

  const handleClear = () => {
    if (!fabricRef.current) return

    fabricRef.current.clear()
    setDrawingStarted(false)
  }

  const handleMovePreviousStep = () => {
    if (!fabricRef.current) return

    const objects = fabricRef.current.getObjects()

    if (objects.length === 0) return

    const count = objects.length

    if (count === 1) setDrawingStarted(false)
    fabricRef.current.remove(objects[objects.length - 1])
  }

  const handleClose = () => {
    onToggleDialogOpen()
    setDrawingStarted(false)
  }

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) return

    const fileReader = new FileReader()

    fileReader.onloadend = function load() {
      // eslint-disable-next-line react/no-this-in-sfc
      const url = this.result

      if (typeof url !== 'string') return

      setPreviewUrl(url)
    }

    fileReader.readAsDataURL(file)
  }

  const handleClearUpload = () => {
    if (!uploadInputRef.current) return

    uploadInputRef.current.files = null
    setPreviewUrl(undefined)
  }

  const handleEditUpload = () => {
    if (!uploadInputRef.current) return

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

    if (!fabricRef.current) return

    upsertSignature({ timestamp: Date.now(), url: fabricRef.current.toDataURL() })

    onToggleDialogOpen()
    setDrawingStarted(false)
  }

  return (
    <>
      <Button variant="outlined" className="my-2 w-full" onClick={handleClose}>
        <MdAdd className="mr-2 h-auto w-6" />
        創建簽名檔
      </Button>
      <Transition.Root show={dialogOpen} as={Fragment}>
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
            <div className="bg-mask/40 fixed inset-0 backdrop-blur-[2px] transition-opacity" />
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
                <Dialog.Panel className="bg-greyscale-white relative w-full overflow-hidden rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:p-6">
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="focus:ring-primary-main rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={onToggleDialogOpen}
                    >
                      <span className="sr-only">Close</span>
                      <MdClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        創建簽名
                      </Dialog.Title>
                      <Tab.Group as="div" className="mt-2">
                        <div className="border-b border-gray-200">
                          <Tab.List className="-mb-px flex space-x-8">
                            <CreateSignTab>手寫</CreateSignTab>
                            <CreateSignTab>上傳</CreateSignTab>
                          </Tab.List>
                        </div>
                        <Tab.Panels as={Fragment}>
                          <Tab.Panel className="flex flex-col items-center gap-10 py-4">
                            <div className="flex items-center justify-end gap-2 self-end">
                              <Button
                                size="sm"
                                variant="text"
                                disabled={!drawingStarted}
                                onClick={handleMovePreviousStep}
                              >
                                回上一步
                              </Button>
                              <Button
                                size="sm"
                                variant="text"
                                disabled={!drawingStarted}
                                onClick={handleClear}
                              >
                                清除
                              </Button>
                            </div>
                            <div
                              ref={containerRef}
                              className="border-greyscale-ui-grey relative h-40 w-full rounded-sm border"
                            >
                              {drawingStarted ? (
                                <div>
                                  <canvas ref={handleCanvasMount} />
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={onToggleDrawingStarted}
                                  className="text-greyscale-grey inline-flex h-full w-full items-center justify-center"
                                >
                                  請在這裡寫下您的簽名
                                </button>
                              )}
                              <div className="absolute right-2 bottom-2 z-10 flex gap-2">
                                <span className="bg-greyscale-dark h-2 w-2 rounded-full" />
                                <span className="bg-info h-2 w-2 rounded-full " />
                                <span className="bg-error h-2 w-2 rounded-full " />
                                <span />
                              </div>
                            </div>
                          </Tab.Panel>
                          <Tab.Panel className="space-y-10 pt-10 pb-8">
                            <div className="flex items-center justify-end gap-2">
                              <Button size="sm" variant="text" onClick={handleEditUpload}>
                                更改
                              </Button>
                              <Button size="sm" variant="text" onClick={handleClearUpload}>
                                清除
                              </Button>
                            </div>
                            <div className="border-greyscale-ui-grey rounded-sm border px-2 py-8">
                              {previewUrl && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  alt="uploaded signature"
                                  src={previewUrl}
                                  className="mx-auto h-full w-auto"
                                />
                              )}
                              <form
                                className={previewUrl ? 'hidden' : 'flex flex-col items-center'}
                              >
                                <Button as="label" htmlFor="file-upload" className="cursor-pointer">
                                  <span>選擇檔案</span>
                                  <input
                                    ref={uploadInputRef}
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    accept=".jpg,.png,.bmp"
                                    onChange={handleUpload}
                                  />
                                </Button>
                                <p>或將檔案拖曳至這裡</p>
                                <p className="text-primary-main mt-4">
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
                    <p className="text-h6 text-greyscale-dark-grey">
                      我了解這是一個具法律效力的本人簽名
                    </p>
                    <Button size="md" className="px-9" onClick={handleSave}>
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

import { Transition, Dialog, Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'
import useToggle from '@/hooks/useToggle'
import HandWritingPanel from './HandWritingPanel'
import UploadPanel from './UploadPanel'

const navigation = {
  categories: [
    {
      id: 'handwriting',
      name: '手寫',
      panel: HandWritingPanel,
    },
    {
      id: 'upload',
      name: '上傳',
      panel: UploadPanel,
    },
  ],
} as const

export default function CreateSignDialog() {
  const [open, onToggle] = useToggle()

  return (
    <>
      <button type="button" className="btn-primary my-2 w-full" onClick={onToggle}>
        <MdAdd className="mr-2 h-auto w-6" />
        創建簽名檔
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onToggle}>
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
                      onClick={onToggle}
                    >
                      <span className="sr-only">Close</span>
                      <MdClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        創建簽名
                      </Dialog.Title>
                      <Tab.Group as="div" className="mt-2">
                        <div className="border-b border-gray-200">
                          <Tab.List className="-mb-px flex space-x-8 px-4">
                            {navigation.categories.map((category) => (
                              <Tab
                                key={category.name}
                                className="ui-selected:border-primary-main ui-selected:text-primary-main flex-1 whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-base"
                              >
                                {category.name}
                              </Tab>
                            ))}
                          </Tab.List>
                        </div>
                        <Tab.Panels as={Fragment}>
                          {navigation.categories.map((category) => (
                            <category.panel key={category.id} />
                          ))}
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col items-center gap-2 sm:mt-4 sm:flex-row-reverse">
                    <p className="text-h6 text-greyscale-dark-grey">
                      我了解這是一個具法律效力的本人簽名
                    </p>
                    <button type="button" className="btn-primary" onClick={onToggle}>
                      儲存
                    </button>
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

import Link from 'next/link'
import { Fragment, ReactNode } from 'react'
import { MdArrowBack, MdCheck, MdOutlineModeEdit } from 'react-icons/md'
import useFileStore from '@/hooks/useFileStore'
import Button from './Button'
import IconButton from './IconButton'
import Step from './Step'

const STEPS = ['成功上傳檔案', '加入簽名檔', '確認檔案', '下載檔案']

interface UploadLayoutProps {
  children: ReactNode
  timestamp: number
}

export default function UploadLayout({ children, timestamp }: UploadLayoutProps) {
  const activeStep = useFileStore((state) => state.activeStep)
  const signFile = useFileStore((state) => state.signingFiles.entities[timestamp])

  return (
    <>
      <header className="py-4 px-6">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="inline-flex items-center p-1">
              <MdArrowBack className="text-greyscale-dark-grey h-auto w-6" />
            </Link>
            {/* TODO: add editable function */}
            <h2 className="text-h5 ml-4 mr-2 font-bold">{signFile.name}</h2>
            <IconButton>
              <MdOutlineModeEdit className="text-greyscale-dark-grey h-auto w-4" />
            </IconButton>
          </div>
          <nav>
            <Button disabled size="md">
              註冊
            </Button>
          </nav>
        </div>
      </header>
      <div className="border-greyscale-grey border-y">
        <div className="mx-auto flex max-w-sm items-center justify-center gap-2 py-2 md:w-full md:max-w-screen-xl md:gap-4 md:py-5">
          {STEPS.map((name, index) => (
            <Fragment key={name}>
              {index !== 0 && (
                <div
                  className="bg-greyscale-grey hidden h-0.5 w-12 md:block lg:w-20"
                  aria-hidden="true"
                />
              )}
              <Step
                aria-selected={index + 1 === activeStep ? 'true' : 'false'}
                variant={index + 1 > activeStep ? 'outlined' : 'filled'}
                name={name}
              >
                {index + 1 >= activeStep ? index + 1 : <MdCheck className="h-auto w-5 shrink-0" />}
              </Step>
            </Fragment>
          ))}
        </div>
      </div>
      {children}
    </>
  )
}

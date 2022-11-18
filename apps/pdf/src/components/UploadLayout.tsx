import Link from 'next/link'
import { DivProps } from 'react-html-props'
import { MdArrowBack, MdCheck, MdOutlineModeEdit } from 'react-icons/md'
import Button from './Button'
import CreateSignDialog from './CreateSignDialog'
import IconButton from './IconButton'
import TextField from './Input'
import Step from './Step'
import StepDivider from './StepDivider'

export default function UploadLayout({ children }: Pick<DivProps, 'children'>) {
  return (
    <>
      <header className="py-4 px-6">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="inline-flex items-center p-1">
              <MdArrowBack className="text-greyscale-dark-grey h-auto w-6" />
            </Link>
            {/* TODO: add editable function */}
            <h2 className="text-h5 ml-4 mr-2 font-bold">型號U-ew8951出貨單</h2>
            <IconButton>
              <MdOutlineModeEdit className="text-greyscale-dark-grey h-auto w-4" />
            </IconButton>
          </div>
          <nav>
            <Button as={Link} href="/signup" size="md">
              註冊
            </Button>
          </nav>
        </div>
      </header>
      <div className="border-greyscale-grey border-y">
        <div className="mx-auto flex max-w-sm items-center justify-center gap-2 py-2 md:w-full md:max-w-screen-xl md:gap-4 md:py-5">
          <Step name="成功上傳檔案">
            <MdCheck className="h-auto w-5 shrink-0" />
          </Step>
          <StepDivider />
          <Step name="加入簽名檔" aria-selected="true">
            2
          </Step>
          <StepDivider />
          <Step name="確認檔案" variant="outlined">
            3
          </Step>
          <StepDivider />
          <Step name="下載檔案" variant="outlined">
            4
          </Step>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-screen-xl flex-1">
        <main className="flex flex-1 flex-col overflow-scroll">{children}</main>
        <aside className="hidden w-[304px] shrink-0 grow-0 p-6 md:flex md:flex-col">
          <h2 className="sr-only">簽名設定</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-h5 font-bold">基本資料</h3>
            <TextField id="name" label="姓名" placeholder="請輸入您的姓名" />
            <TextField id="email" label="Email" placeholder="請輸入您的電子信箱" />
          </div>
          <div className="my-10">
            <h3 className="text-h5 font-bold">我的簽名</h3>
            <CreateSignDialog />
          </div>
          <div className="flex-1" />
          <div>
            <Button className="w-full">下一步</Button>
          </div>
        </aside>
      </div>
    </>
  )
}

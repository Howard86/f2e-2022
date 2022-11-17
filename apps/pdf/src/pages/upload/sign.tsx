import { MdArrowBack, MdCheck, MdOutlineModeEdit } from 'react-icons/md'
import IconButton from '@/components/IconButton'
import Layout from '@/components/Layout'
import Step from '@/components/Step'
import SignSettingDialog from '@/components/SignSettingDialog'
import ConfirmSignDialog from '@/components/ConfirmSignDialog'

export default function SignPage() {
  //   TODO: add different header
  return (
    <Layout>
      <section className="flex w-full flex-1 flex-col overflow-y-scroll">
        <div className="flex items-center justify-between border-b pb-4">
          <IconButton>
            <MdArrowBack className="text-greyscale-dark-grey h-auto w-6" />
          </IconButton>
          <h2 className="text-h5 font-bold">型號U-ew8951出貨單</h2>
          <IconButton>
            <MdOutlineModeEdit className="text-greyscale-dark-grey h-auto w-4" />
          </IconButton>
        </div>
        <div className="flex items-center gap-2 border-b py-2">
          <Step>
            <MdCheck className="h-auto w-5" />
          </Step>
          <Step aria-selected="true">2</Step>
          <p className="flex-1">加入簽名檔</p>
          <Step variant="outlined">3</Step>
          <Step variant="outlined">4</Step>
        </div>
        <div className="bg-greyscale-light-grey relative flex-1 py-6">
          <span>PDF files</span>
          <SignSettingDialog />
        </div>
        <div className="px-6 pb-6 pt-2">
          <ConfirmSignDialog />
        </div>
      </section>
    </Layout>
  )
}

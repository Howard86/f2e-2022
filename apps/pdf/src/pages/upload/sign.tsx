import { MdArrowBack, MdCheck, MdOutlineModeEdit } from 'react-icons/md'
import IconButton from '@/components/IconButton'
import Layout from '@/components/Layout'
import Step from '@/components/Step'
import PDFViewer from '@/components/PDFViewer'

export default function SignPage() {
  //   TODO: add different header
  return (
    <Layout>
      <section className="flex max-h-screen w-full flex-1 flex-col">
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
        <PDFViewer />
      </section>
    </Layout>
  )
}

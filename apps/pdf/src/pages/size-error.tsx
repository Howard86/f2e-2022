import Link from 'next/link'
import Button from '@/components/Button'
import Wrong from '@/components/illustrations/Wrong'
import Layout from '@/components/Layout'

const EMAIL = 'pdf-support@howardism.dev'

export default function SizeErrorPage() {
  return (
    <Layout>
      <Wrong />
      <section>
        <h1 className="font-bold text-h2 text-primary-main">您的檔案無法上傳</h1>
        <p className="mt-2 mb-10">
          請重新上傳檔案。確認檔案大小在10Mb以內，檔案格式為PDF、IMG。
          <br />
          若還是無法上傳檔案，請聯繫{' '}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <Button as={Link} className="w-full" href="/">
          回首頁
        </Button>
      </section>
    </Layout>
  )
}

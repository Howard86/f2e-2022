import Link from 'next/link'
import SharedGoals from '@/components/illustrations/SharedGoals'
import Layout from '@/components/Layout'
import Button from '@/components/Button'

export default function UploadSuccessPage() {
  return (
    <Layout>
      <SharedGoals />
      <section>
        <h1 className="text-primary-main text-h2 font-bold">恭喜您！檔案已就緒 </h1>
        <p className="mt-2 mb-10">現在您可以下載檔案或新增簽署檔案。</p>
        <div className="flex flex-col items-center gap-4">
          <Button as={Link} href="/" className="w-full">
            回首頁
          </Button>
          <Button variant="outlined" as={Link} href="/signup" className="w-full">
            註冊
          </Button>
        </div>
      </section>
    </Layout>
  )
}

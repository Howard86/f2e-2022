import { useRouter } from 'next/router'
import useFileStore from '@/hooks/useFileStore'
import UploadLayout from '@/components/UploadLayout'
import PDFViewer from '@/components/PDFViewer'

const EMPTY_TIMESTAMP = -1

export default function SignFilePage() {
  const router = useRouter()
  const timestamp =
    typeof router.query.timestamp === 'string'
      ? Number.parseInt(router.query.timestamp, 10)
      : EMPTY_TIMESTAMP

  const signFile = useFileStore((state) => state.signingFiles.entities[timestamp])

  if (!router.isReady || !signFile) return null

  return (
    <UploadLayout>
      <PDFViewer timestamp={timestamp} />
    </UploadLayout>
  )
}

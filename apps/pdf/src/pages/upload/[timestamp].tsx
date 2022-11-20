import { useRouter } from 'next/router'
import { useEffect } from 'react'
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

  // TODO: add persistence layer, either Indexeddb or external database (e.g. Firebase)
  useEffect(() => {
    if (router.isReady && !signFile) {
      router.push('/')
    }
  }, [router, signFile])

  if (!router.isReady || !signFile) return null

  return (
    <UploadLayout timestamp={timestamp}>
      <PDFViewer timestamp={timestamp} />
    </UploadLayout>
  )
}

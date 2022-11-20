import create from 'zustand'

type Normalised<T extends object, K extends keyof T> = T[K] extends string | number
  ? {
      ids: T[K][]
      entities: Record<T[K], Omit<T, K>>
    }
  : never

type Signature = {
  timestamp: number
  url: string
}

interface FileState {
  signatures: Normalised<Signature, 'timestamp'>
  pdfFile?: Uint8Array
  uploadPdf: (file: Uint8Array) => void
  upsertSignature: (signature: Signature) => void
}

const useFileStore = create<FileState>()((set) => ({
  uploadPdf: (pdfFile) => set(() => ({ pdfFile })),
  signatures: { ids: [], entities: {} },
  upsertSignature: ({ timestamp, ...rest }) =>
    set((state) => ({
      signatures: {
        ids: state.signatures.entities[timestamp]
          ? state.signatures.ids
          : [...state.signatures.ids, timestamp],
        entities: { ...state.signatures.entities, [timestamp]: rest },
      },
    })),
}))

export default useFileStore

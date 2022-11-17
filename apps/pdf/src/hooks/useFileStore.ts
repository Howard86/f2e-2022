import create from 'zustand'
import { devtools } from 'zustand/middleware'

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
  addSignature: (signature: Signature) => void
}

const useFileStore = create<FileState>()(
  devtools((set) => ({
    signatures: { ids: [], entities: {} },
    addSignature: ({ timestamp, ...rest }) =>
      set((state) => ({
        signatures: {
          ids: [...state.signatures.ids, timestamp],
          entities: { ...state.signatures.entities, [timestamp]: rest },
        },
      })),
  }))
)

export default useFileStore

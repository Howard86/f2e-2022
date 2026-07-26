import type { FabricImage } from 'fabric'
import { create } from 'zustand'

type Normalised<T extends object, K extends keyof T> = T[K] extends string | number
  ? {
      ids: T[K][]
      entities: Record<T[K], Omit<T, K>>
    }
  : never

const EMPTY_ENTITY_STATE = { entities: {}, ids: [] }
const DEFAULT_ACTIVE_STEP = 2

type Signature = {
  timestamp: number
  url: string
}

type SigningFile = {
  timestamp: number
  name: string
  size: number
  image: FabricImage | string
}

interface FileState {
  activeStep: number
  moveNextStep: VoidFunction
  movePreviousStep: VoidFunction
  resetStep: VoidFunction
  signatures: Normalised<Signature, 'timestamp'>
  signingFiles: Normalised<SigningFile, 'timestamp'>
  upsertSignature: (signature: Signature) => void
  upsertSigningFile: (file: SigningFile) => void
}

const useFileStore = create<FileState>()((set) => ({
  activeStep: DEFAULT_ACTIVE_STEP,
  moveNextStep: () => set((state) => ({ activeStep: state.activeStep + 1 })),
  movePreviousStep: () => set((state) => ({ activeStep: state.activeStep - 1 })),
  resetStep: () => set(() => ({ activeStep: DEFAULT_ACTIVE_STEP })),
  signatures: EMPTY_ENTITY_STATE,
  signingFiles: EMPTY_ENTITY_STATE,
  upsertSignature: ({ timestamp, ...rest }) =>
    set((state) => ({
      signatures: {
        entities: { ...state.signatures.entities, [timestamp]: rest },
        ids: state.signatures.entities[timestamp]
          ? state.signatures.ids
          : [...state.signatures.ids, timestamp],
      },
    })),
  upsertSigningFile: ({ timestamp, ...rest }) =>
    set((state) => ({
      signingFiles: {
        entities: { ...state.signingFiles.entities, [timestamp]: rest },
        ids: state.signingFiles.entities[timestamp]
          ? state.signingFiles.ids
          : [...state.signingFiles.ids, timestamp],
      },
    })),
}))

export default useFileStore

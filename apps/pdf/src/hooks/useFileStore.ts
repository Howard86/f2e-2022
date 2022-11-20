import create from 'zustand'

type Normalised<T extends object, K extends keyof T> = T[K] extends string | number
  ? {
      ids: T[K][]
      entities: Record<T[K], Omit<T, K>>
    }
  : never

const EMPTY_ENTITY_STATE = { ids: [], entities: {} }
const DEFAULT_ACTIVE_STEP = 2

type Signature = {
  timestamp: number
  url: string
}

type SigningFile = {
  timestamp: number
  name: string
  size: number
  image: fabric.Image
}

interface FileState {
  activeStep: number
  moveNextStep: VoidFunction
  movePreviousStep: VoidFunction
  resetStep: VoidFunction
  signingFiles: Normalised<SigningFile, 'timestamp'>
  signatures: Normalised<Signature, 'timestamp'>
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
        ids: state.signatures.entities[timestamp]
          ? state.signatures.ids
          : [...state.signatures.ids, timestamp],
        entities: { ...state.signatures.entities, [timestamp]: rest },
      },
    })),
  upsertSigningFile: ({ timestamp, ...rest }) =>
    set((state) => ({
      signingFiles: {
        ids: state.signingFiles.entities[timestamp]
          ? state.signingFiles.ids
          : [...state.signingFiles.ids, timestamp],
        entities: { ...state.signingFiles.entities, [timestamp]: rest },
      },
    })),
}))

export default useFileStore

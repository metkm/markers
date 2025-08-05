import { create } from "zustand"

export interface MarkerStore {
  show: boolean
  toggleShow: () => void
}

export const useMarkerStore = create<MarkerStore>((set) => ({
  show: true,
  toggleShow: () => set((state) => ({ show: !state.show }))
}))

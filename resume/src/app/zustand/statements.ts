import { create } from "zustand";

export interface isClickedtype {
  isClicked: number;
  setIsClicked: (value: number) => void;
}

const useStateStore = create<isClickedtype>((set) => ({
  isClicked: 0,
  setIsClicked: (value: number) => set({ isClicked: value }),
}));

export default useStateStore;

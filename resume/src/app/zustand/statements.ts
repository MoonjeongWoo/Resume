import { create } from "zustand";

export interface isClickedtype {
  isClicked: number;
  setIsClicked: (value: number | ((prevIsClicked: number) => number)) => void;
}

const useStateStore = create<isClickedtype>((set) => ({
  isClicked: 0,
  setIsClicked: (value) =>
    set((state) => ({
      isClicked: typeof value === "function" ? value(state.isClicked) : value,
    })),
}));

export default useStateStore;

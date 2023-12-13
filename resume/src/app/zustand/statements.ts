import { create } from "zustand";

export interface isClickedtype {
  isClicked: number;
  isupted: boolean;
  setIsClicked: (value: number | ((prevIsClicked: number) => number)) => void;
  setIsUpted: (value: boolean) => void;
}

const useStateStore = create<isClickedtype>((set) => ({
  isClicked: 0,
  isupted: true,
  setIsClicked: (value) =>
    set((state) => ({
      isClicked: typeof value === "function" ? value(state.isClicked) : value,
    })),

  setIsUpted: (isupted) =>
    set((isupted) => ({
      isupted: !isupted,
    })),
}));

export default useStateStore;

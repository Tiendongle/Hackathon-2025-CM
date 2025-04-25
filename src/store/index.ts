import { create } from "zustand";

interface FirstState {
  item: string;
  setItem: (item: string) => void;
}

interface SecondState {
  item2: string;
}

// First State
export const useFirstAppStore = create<FirstState>((set) => ({
  item: "first item",
  setItem: (itemName) => set({ item: itemName }),
}));

// Second State
export const useSecondAppStore = create<SecondState>((set) => ({
  item2: "second item",
}));

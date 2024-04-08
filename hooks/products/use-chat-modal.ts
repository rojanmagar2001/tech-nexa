import { create } from "zustand";

export type ChatModalStore = {
  small: boolean;
  isOpen: boolean;
  toggleSmall: (small: boolean) => void;
  toggleModal: (isOpen: boolean) => void;
};

const useChatModal = create<ChatModalStore>((set) => ({
  isOpen: false,
  small: false,
  toggleSmall: (small: boolean) => set({ small }),
  toggleModal: (isOpen: boolean) => set({ isOpen: !isOpen }),
}));

export default useChatModal;

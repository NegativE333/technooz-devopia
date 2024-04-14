import { create } from "zustand"

type SetInvestmentModalStore = {
    id?:string;
    isOpen: boolean;
    open: (id:string) => void;
    close: () => void;
}

export const useDeleteInvestmentModal = create<SetInvestmentModalStore>((set) => ({
    id:undefined,
    isOpen: false,
    open: (id:string) => set({isOpen: true,id}),
    close: () => set({isOpen: false}),
}));
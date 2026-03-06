import { create } from 'zustand';

type ToastType = 'processing' | 'success' | 'error' | 'idle';

interface ToastState {
    message: string;
    type: ToastType;
    show: (message: string, type: ToastType) => void;
    hide: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
    message: '',
    type: 'idle',
    show: (message, type) => set({ message, type }),
    hide: () => set({ type: 'idle', message: '' }),
}));
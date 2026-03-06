'use client';
import { useToastStore } from '@/store/useToastStore';
import { useEffect } from 'react';

export default function Toast() {
    const { message, type, hide } = useToastStore();

    useEffect(() => {
        if (type === 'error' || type === 'success') {
            const timer = setTimeout(hide, 4000);
            return () => clearTimeout(timer);
        }
    }, [type, hide]);

    if (type === 'idle') return null;

    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="apple-card px-6 py-3 rounded-2xl flex items-center gap-3 min-w-[280px] border border-white/40 shadow-2xl">
                {type === 'processing' && (
                    <div className="w-4 h-4 border-2 border-apple-blue border-t-transparent rounded-full animate-spin" />
                )}
                {type === 'success' && <span className="text-green-500">✓</span>}
                {type === 'error' && <span className="text-red-500">✕</span>}

                <span className="text-sm font-medium text-[#1d1d1f]">{message}</span>
            </div>
        </div>
    );
}
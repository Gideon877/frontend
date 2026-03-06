'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useData } from '@/context/DataContext';
import { useToastStore } from '@/store/useToastStore';

export default function UploadForm() {
    const { setResult } = useData();
    const { show, type } = useToastStore();
    const router = useRouter();

    // Check if the global toast is currently in 'processing' state
    const isProcessing = type === 'processing';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // 1. Trigger the global notification via Zustand
        show('Analyzing document...', 'processing');

        const formData = new FormData(e.currentTarget);

        try {
            // 2. Fetch data from our Node.js backend
            const response = await fetch('http://localhost:5000/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to process document');
            }

            const data = await response.json();
            
            // 3. Store result in Context and update UI feedback
            setResult(data);
            show('Document processed successfully!', 'success');
            
            // 4. Smooth transition to the results view
            setTimeout(() => router.push('/results'), 1200);
            
        } catch (err: any) {
            // 5. Handle errors globally via the Toast
            show(err.message || 'Connection error. Is the server running?', 'error');
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className={`apple-card max-w-lg mx-auto p-10 rounded-[2.5rem] space-y-8 transition-all duration-500 
                ${isProcessing ? 'opacity-40 scale-[0.98] pointer-events-none' : 'opacity-100 scale-100'}`}
        >
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Identity Scan</h2>
                <p className="text-sm text-[#86868b]">Upload a PDF or Image to extract details.</p>
            </div>

            <div className="space-y-5">
                {/* Input Fields Group */}
                {[
                    { label: "First Name", name: "firstName", type: "text", placeholder: "John" },
                    { label: "Last Name", name: "lastName", type: "text", placeholder: "Doe" },
                    { label: "Date of Birth", name: "dob", type: "date", placeholder: "" }
                ].map((field) => (
                    <div key={field.name} className="space-y-1">
                        <label className="block text-[11px] font-bold text-[#86868b] uppercase tracking-wider ml-1">
                            {field.label}
                        </label>
                        <input
                            name={field.name}
                            type={field.type}
                            required
                            placeholder={field.placeholder}
                            className="w-full bg-[#f5f5f7] border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-apple-blue transition-all outline-none placeholder:text-slate-400"
                        />
                    </div>
                ))}

                {/* File Upload Section */}
                <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-[#86868b] uppercase tracking-wider ml-1">
                        ID Document
                    </label>
                    <div className="relative group">
                        <input
                            name="file"
                            type="file"
                            accept="image/*,application/pdf"
                            required
                            className="block w-full text-sm text-slate-500 
                                file:mr-4 file:py-2.5 file:px-6 
                                file:rounded-full file:border-0 
                                file:text-xs file:font-bold 
                                file:bg-[#1d1d1f] file:text-white 
                                hover:file:bg-slate-700 cursor-pointer transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 text-white font-semibold rounded-full transition-all duration-300 shadow-lg 
                    ${isProcessing 
                        ? 'bg-slate-300 shadow-none' 
                        : 'bg-apple-blue shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-[0.98]'}`}
            >
                {isProcessing ? 'Processing...' : 'Continue'}
            </button>
        </form>
    );
}
'use client';

import UploadForm from '@/components/UploadForm';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="text-center mb-10 space-y-2">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    Document Data Extraction
                </h1>
                <p className="text-slate-500 max-w-lg mx-auto">
                    Upload an ID document (Image or PDF) to automatically extract text
                    and calculate age data using OCR technology.
                </p>
            </div>

            <section className="w-full">
                <UploadForm />
            </section>

            <footer className="mt-20 text-slate-400 text-xs uppercase tracking-widest">
                Powered by Tesseract.js & PDFParse v2
            </footer>
        </div>
    );
}
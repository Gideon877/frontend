'use client';
import { useData } from '@/context/DataContext';
import Link from 'next/link';

export default function ResultDisplay() {
    const { result } = useData();

    if (!result) {
        return (
            <div className="text-center py-20">
                <h2 className="text-xl font-semibold text-slate-700">No data found</h2>
                <p className="text-slate-500 mb-6">Please upload a document first to see the results.</p>
                <Link
                    href="/"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                    Go to Upload
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8 pb-20">
            {/* Summary Section */}
            <div className="apple-card rounded-[2rem] p-8">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-semibold">User Summary</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Processed</span>
                </div>

                <div className="divide-y divide-gray-100">
                    <div className="py-4 flex justify-between items-center">
                        <span className="text-[#86868b]">Name</span>
                        <span className="font-medium">{result.fullName}</span>
                    </div>
                    <div className="py-4 flex justify-between items-center">
                        <span className="text-[#86868b]">Age</span>
                        <div className="text-right">
                            <span className="block font-medium">{result.age} Years</span>
                            <span className="text-xs text-blue-500">{result.detailedAge}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* OCR Section */}
            <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[#86868b] ml-4 uppercase tracking-widest">Extracted Data</h3>
                <div className="apple-card rounded-[2rem] p-6 bg-black/[0.02]">
                    <pre className="text-sm leading-relaxed text-[#424245] font-mono whitespace-pre-wrap">
                        {result.extractedText}
                    </pre>
                </div>
            </div>
        </div>
    );
}
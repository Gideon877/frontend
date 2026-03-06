'use client';

import ResultDisplay from '@/components/ResultDisplay';

export default function ResultsPage() {
    return (
        <div className="py-10">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-slate-900">Extraction Results</h1>
            </div>

            <ResultDisplay />
        </div>
    );
}
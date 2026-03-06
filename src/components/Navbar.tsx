'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 mb-8">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-blue-600 tracking-tight">
                    OMS<span className="text-slate-800">Assessment</span>
                </Link>
                <div className="flex gap-6 text-sm font-medium text-slate-600">
                    <Link href="/" className="hover:text-blue-600 transition-colors">
                        Upload
                    </Link>
                    <Link href="/results" className="hover:text-blue-600 transition-colors">
                        Results
                    </Link>
                </div>
            </div>
        </nav>
    );
}
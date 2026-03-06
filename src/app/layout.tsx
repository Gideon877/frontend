import './globals.css';
import { DataProvider } from '@/context/DataContext';
import Navbar from '@/components/Navbar';
import Toast from '@/components/Toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased bg-slate-50">
                <DataProvider>
                    <Toast />
                    <Navbar />
                    <main className="container mx-auto px-4 pb-20">
                        {children}
                    </main>
                </DataProvider>
            </body>
        </html>
    );
}
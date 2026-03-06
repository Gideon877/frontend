'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ExtractionResult {
    fullName: string;
    age: number;
    detailedAge: string;
    extractedText: string;
}

interface DataContextType {
    result: ExtractionResult | null;
    setResult: (data: ExtractionResult) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [result, setResult] = useState<ExtractionResult | null>(null);

    return (
        <DataContext.Provider value={{ result, setResult }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useData must be used within a DataProvider');
    return context;
};
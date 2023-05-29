"use client"

import { IEditorDataChunk, TextEditorContextType } from '@/@types/TextEditorContextType';
import React, { createContext, useState, FC, ReactNode } from 'react';


export const TextEditorContext = createContext<TextEditorContextType | null>(null);


const TextEditorProvider: FC<ReactNode> = ({ children }) => {
    const initialDocDataChunk = {
        firstPart: '',
        midPart: '',
        endPart: ''
    }
    const [docDataChunk, setDocDataChunk] = useState<IEditorDataChunk>(initialDocDataChunk);
    const [docContent, setDocContent] = useState('');

    const resetDocDataChunk = () =>{
        setDocDataChunk(initialDocDataChunk)
    }


    return (
        <TextEditorContext.Provider value = {{docDataChunk, setDocDataChunk, docContent, setDocContent, resetDocDataChunk}}>
            {children}
        </TextEditorContext.Provider>
    )
};

export default TextEditorProvider;
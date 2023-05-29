import React, { createContext } from "react";

export interface IEditorDataChunk {
    firstPart: string | '',
    midPart: string | '',
    endPart: string | ''
}

export type TextEditorContextType = {
    docDataChunk: IEditorDataChunk;
    setDocDataChunk: (dataChunk: IEditorDataChunk) => void;
    docContent: string | '';
    setDocContent: (content: string) => void;
    resetDocDataChunk: ()=> void;
}

// chunks: {
//     firstPart: '',
//     midPart: '',
//     endPart: ''
// },
// content: ''
// }
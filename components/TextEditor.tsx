"use client";

import { TextEditorContextType } from "@/@types/TextEditorContextType";
import { TextEditorContext } from "@/context/textEditorContext";
import { FC, use, useContext, useRef, useState } from "react";

interface ITextEditorProps {
    content?: string | ''

}
export const TextEditor: FC<ITextEditorProps> = ({ content }) => {
    const editorRef = useRef(null);
    const { docDataChunk, setDocDataChunk, docContent, setDocContent } = useContext(TextEditorContext) as TextEditorContextType;


    // useEffect(()=>{
    //     editorRef.current?.addEventListener('change', onChange);

    //     return ()=>{
    //         editorRef.current?.removeEventListener('change', onChange);
    //     }
    // })

    // const onChange = (e) =>{
    //     console.log("eve", e)
    // }

    const onBlur = (e) => {
        console.log("onblur", e)
        // const selected = window.getSelection().toString();
        // const range = window.getSelection().getRangeAt(0);
        // console.log(e, "selected", selected, "range", range, "range conta", range.startContainer.)
        // const firstPart = range.startContainer.textContent.substring(0, range.startOffset);
        // const endPart = range.endContainer.textContent.substring(range.endOffset);

        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const firstPart = editorRef.current.innerHTML.substring(0, range.startOffset);
        const selected = range.cloneContents().textContent;
        const endPart = editorRef.current.innerHTML.substring(range.endOffset);
        console.log("ee", { firstPart, selected, endPart })

        console.log("##", {
            "html": editorRef.current.innerHTML,
            "range": {"start": range.startOffset, "End": range.endOffset}
        })

        setDocDataChunk(
            {
                firstPart: firstPart,
                midPart: selected,
                endPart: endPart
            }
        )
        setDocContent(e.target.innerHTML)
    }

    console.log("context", { docContent, docDataChunk },)

    return (
        <div
            className="container mx-auto rounded-md 
            mt-10
            outline outline-2 outline-gray-500/20 focus:outline-gray-800/50
            h-screen
            p-10
            "
            contentEditable="true"
            ref={editorRef}
            onInput={(e) => {
                // console.log("e", e.target.textContent)
            }}
            onBlur={onBlur}
            dangerouslySetInnerHTML={{ __html: docContent }}
        >
            {/* {docContent} */}
        </div>
    )
}
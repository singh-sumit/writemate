"use client";

import { useContext } from "react";
import ActionButton from "./ActionButton";
import { VerticalDivider } from "./VerticalDivider";
import { TextEditorContextType } from "@/@types/TextEditorContextType";
import { TextEditorContext } from "@/context/textEditorContext";
import ColorPicker from "./ColorPicker";


const Actions = () => {
    const { docDataChunk, docContent, setDocContent, setDocDataChunk, resetDocDataChunk } = useContext(TextEditorContext) as TextEditorContextType;

    const onBold = (text: string) => {
        const content = docDataChunk.firstPart +
            `<span style="font-weight: bolder">${docDataChunk.midPart}</span>` +
            docDataChunk.endPart
        setDocContent(content);
        resetDocDataChunk();
    }

    const onItalic = (text: string) => {
        const content = docDataChunk.firstPart +
            `<span style="font-style: italic">${docDataChunk.midPart}</span>` +
            docDataChunk.endPart
        setDocContent(content);
        resetDocDataChunk();
    }

    const onUnderline = (text: string) => {
        const content = docDataChunk.firstPart +
            `<span style="text-decoration: underline">${docDataChunk.midPart}</span>` +
            docDataChunk.endPart
        setDocContent(content);
        resetDocDataChunk();
    }

    const toUpperCase = (text: string) => {
        const content = docDataChunk.firstPart +
            `${docDataChunk.midPart.toUpperCase()}` +
            docDataChunk.endPart
        setDocContent(content);
        resetDocDataChunk();
    }

    const toLowerCase = (text: string) => {
        const content = docDataChunk.firstPart +
            `${docDataChunk.midPart.toLowerCase()}` +
            docDataChunk.endPart
        setDocContent(content);
        resetDocDataChunk();
    }

    const onColorApply = (color: string) =>{
        console.log("ccc", color)
        const content = docDataChunk.firstPart +
        `<span style="color: ${color}">${docDataChunk.midPart}</span>` +
            docDataChunk.endPart
        setDocContent(content);
        resetDocDataChunk();
    }

    // console.log("context", {docDataChunk, docContent})

    return (
        <div className="container mx-auto rounded-md my-5
        shadow hover:shadow-lg sticky top-0
        ">
            <ActionButton
                btnChar="B"
                btnCss="font-semibold"
                onClick={onBold}
            />
            <ActionButton
                btnChar="I"
                btnCss="font-semibold italic"
                onClick={onItalic}
            />
            <ActionButton
                btnChar="U"
                btnCss="font-semibold"
                onClick={onUnderline}
            />
            <VerticalDivider />
            <ActionButton
                btnChar="AA"
                btnCss="font-semibold"
                onClick={toUpperCase}
            />
            <ActionButton
                btnChar="aa"
                btnCss="font-semibold"
                onClick={toLowerCase}
            />
            <VerticalDivider />

            <ColorPicker 
                onColorApply={onColorApply}
            />

        </div>
    )
}

export default Actions;
import { FC } from "react";

interface IActionButtonProps {
    btnChar: string,
    btnCss?: string | '',
    onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
}

const ActionButton: FC<IActionButtonProps> = ({ btnChar, btnCss, onClick }) => {

    return (
        <button
            className={`px-4 py-1
            rounded-md
            border-slate-300 hover:shadow-lg hover:shadow-blue-500/50 
            ${btnCss}`}
            onClick={onClick}
        >
            {btnChar}
        </button>
    )
}

export default ActionButton;
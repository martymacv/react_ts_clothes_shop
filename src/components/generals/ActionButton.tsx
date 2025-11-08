import React from "react";
import type { ButtonHTMLAttributes } from "react"

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'disabled';
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
    children, variant = 'primary', ...props 
}) => {
    const baseStyles = "transition-transform duration-200 w-fit h-fit py-4 px-8 font-roboto text-[20px] font-normal"
    const borderStyle = 'border-2 border-[#000000ff]'

    const variants = {
        primary: "bg-[#000000ff] text-[#ffffffff] cursor-pointer hover:scale-105 active:duration-50 active:scale-95 w-[200px]",
        disabled: "bg-[#ffffff37] text-[#ffffffff] cursor-not-allowed"
    }

    return (
        <button 
            className={`${baseStyles} ${borderStyle} ${variants[variant]}`}
            type="submit"
            { ...props }>
                {children}
        </button>
    )
}

export default ActionButton
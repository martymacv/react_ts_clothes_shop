import React from "react";
import type { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge";

interface ActionButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'disabled';
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
    children, variant = 'primary', ...props 
}) => {
    const baseStyles = {
        textStyles: "font-roboto text-[20px] font-normal",
        animationStyles: "transition-transform duration-200",
        placementStyles: "w-fit h-fit py-4 px-8 ",
        borderStyles: "border-2 border-[#000000ff]"
    }

    const variants = {
        primary: {
            textStyles: "text-[#ffffffff]",
            animationStyles: "hover:scale-105 active:duration-50 active:scale-95",
            placementStyles: "w-[200px]",
            backgroundStyles: "bg-[#000000ff]",
            otherStyles: "cursor-pointer",
        },
        disabled: {
            textStyles: "text-[#ffffffff]",
            backgroundStyles: "bg-[#ffffff37]",
            otherStyles: "cursor-not-allowed",
        },
    }

    const styles = twMerge(
        ...Object.values(baseStyles),
        ...Object.values(variants[variant]),
        props.className,
    )
    return (
        <button type="submit" { ...props } className={styles}>
            {children}
        </button>
    )
}

export default ActionButton
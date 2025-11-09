import React from "react";
import { twMerge } from "tailwind-merge";
import type { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
}


const Text: React.FC<TextProps> = ({
        children,
        variant = "primary",
        ...props
}) => {
    const baseStyles = {
        textStyles: "font-khula text-black text-center",
    }
    const variants = {
        primary: "text-[13px] font-[400] leading-[100%] my-3",
        secondary: "",
        tertiary: "",
    }

    const styles = twMerge(
        ...Object.values(baseStyles), variants[variant], props.className
    )
    return (
        <p { ...props } className={styles} >
            {children}
        </p>
    )
}

export default Text

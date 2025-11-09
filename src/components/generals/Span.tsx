import React from "react";
import { twMerge } from "tailwind-merge";
import type { HTMLAttributes } from "react";

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const Span: React.FC<SpanProps> = ({
        children, variant = "primary", ...props
}) => {
    const baseStyles = {
        textStyles: "font-roboto text-[#828282ff]",
    }
    const variants = {
        primary: "text-[8px] font-[300] leading-[100%] my-3 text-center",
        secondary: "",
        tertiary: "",
    }

    const styles = twMerge(
        ...Object.values(baseStyles), variants[variant], props.className
    )
    return (
        <span { ...props } className={styles}>
            {children}
        </span>
    )
}

export default Span

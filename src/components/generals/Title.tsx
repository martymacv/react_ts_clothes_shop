import React from "react";
import { twMerge } from "tailwind-merge";
import type { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title: React.FC<TitleProps> = ({
        children,
        variant = "primary",
        as: Tag = 'h1',
        ...props
}) => {
    const baseStyles = {
        textStyles: "font-roboto text-black text-center"
    }

    const variants = {
        primary: "text-[32px] font-[300] leading-[100%] my-7",
        secondary: "",
        tertiary: "",
    }

    const styles = twMerge(
        ...Object.values(baseStyles), variants[variant], props.className
    )
    return (
        <Tag { ...props } className={styles}>
            {children}
        </Tag>
    )
}

export default Title

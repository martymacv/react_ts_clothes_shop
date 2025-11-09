import Subscribtion from "../components/Subscribtion"
import React from "react";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface DivProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const Home: React.FC<DivProps> = ({
        variant = "primary"
}) => {
    const baseStyles = {
        placementStyles: ""
    }
    const variants = {
        primary: {
            empty: ""
        },
        secondary: {
            empty: ""
        },
        tertiary: {
            empty: ""
        },
    }
    
    const styles = twMerge(
        ...Object.values(baseStyles), ...Object.values(variants[variant])
    )
    return (
        <div className={styles}>
            <img src="src/assets/images/Главное фото.png" alt="" />
            <Subscribtion/>
        </div>
    )
}

export default Home

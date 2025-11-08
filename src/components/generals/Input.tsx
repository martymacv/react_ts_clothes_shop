import React from "react";
import type { InputHTMLAttributes } from "react";
import type { ValidationState, InputValidateRequirement } from "../global";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary' | 'valid' | 'invalid';
    requirements?: Array<InputValidateRequirement>;
    fieldValue?: string;
    state?: ValidationState;
}

const Input: React.FC<InputProps> = ({
        variant = "primary", 
        requirements = [], 
        fieldValue = '',
        state = {},
        ...props
}) => {
    const baseStyles = 'focus:outline-none px-2 py-4'
    const textStyles = 'font-roboto text-[#000000ff] text-[20px] font-normal'
    const borderStyle = 'border-2'
    const placeholderStyle = 'placeholder:text-[#000000AA] text-[20px]'

    const variants = {
        primary: 'border-[#00000055] focus:border-[#107effff] w-[200px] placeholder:text-center',
        valid: 'border-[#00cf00cc]',
        invalid: 'border-[#ff2000cc]',
    }

    return (
        <>
            <input { ...props }
                className={`${baseStyles} ${textStyles} ${borderStyle} ${placeholderStyle} ${variants[variant]}`}/>
            <ul>
                {requirements.map(( req: InputValidateRequirement ) => (
                    <li className={fieldValue ? `font-roboto text-[12px] font-medium ${state[req.type] ? "text-[#00cf00ff]" : "text-[#ff2000ff]"}` : 'font-roboto text-[#ffffff37] text-[12px] font-normal'}
                        key={req.type}
                    >
                    {state[req.type] ? '✓' : '✗'} {req.short_msg}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Input
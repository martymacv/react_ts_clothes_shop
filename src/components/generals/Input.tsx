import React from "react";
import { twMerge } from 'tailwind-merge';
import type { InputHTMLAttributes } from "react";

type ValidationState = {
    minLength?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
    digits?: boolean;
    specialChars?: boolean;
    emailFormat?: boolean;
    isPwdMatched?: boolean;
};

interface InputValidateRequirement {
    /**
     * Тип требования к элементу <input/>
     */
    type: keyof ValidationState;

    /**
     * Краткое сообщение для отображения
     */
    short_msg: string;

    /**
     * Полное сообщение об ошибке
     */
    message: string;

    /**
     * @param value - значение для проверки
     * @returns true, если значение валидно 
     */
    validate (value: string): boolean;

    /**
     * Является ли требование обязательным
     * @default false
     */
    required?: boolean;

    /**
     * Дополнительные параметры валидации
     */
    optionalParams?: Record<string, unknown>;
}

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
    const baseStyles = {
        placementStyles: 'px-2 py-4',
        textStyles: 'font-roboto text-[#000000ff] text-[20px] font-normal',
        borderStyle: 'border-2 focus:outline-none',
        placeholderStyle: 'placeholder:text-[#000000AA] text-[20px]',
    }
    
    const variants = {
        primary: 'border-[#00000055] focus:border-[#107effff] w-[200px] placeholder:text-center',
        valid: 'border-[#00cf00cc]',
        invalid: 'border-[#ff2000cc]',
    }

    const styles = twMerge( ...Object.values(baseStyles), variants[variant] )
    return (
        <>
            <input { ...props }
                className={styles}/>
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
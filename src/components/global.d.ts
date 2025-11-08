export type ValidationState = {
    minLength?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
    digits?: boolean;
    specialChars?: boolean;
    emailFormat?: boolean;
    isPwdMatched?: boolean;
};

export interface InputValidateRequirement {
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
     * 
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

    /**
     * Минимальная длина значения
     */
    minLength?: number;

    /**
     * Максимальная длина значения
     */
    maxLength?: number;
}

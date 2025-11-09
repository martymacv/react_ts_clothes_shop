import React, { type FormHTMLAttributes } from "react";
// import { twMerge } from "tailwind-merge";
import { Form } from "react-router-dom";
import Input from "../generals/Input";
import ActionButton from "../generals/ActionButton";

const SubscribeForm: React.FC<FormHTMLAttributes<HTMLFormElement>> = () => {
    const styles = "flex flex-row justify-center items-center gap-3"

    return <Form method="POST" action="/" className={styles}>
        <Input type="email" name="email" placeholder="Введите email"/>
        <ActionButton>Подписаться</ActionButton>
    </Form>
}

export default SubscribeForm;
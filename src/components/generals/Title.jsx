function Title({ children, variant = "primary", ...props }) {
    const generals = "font-roboto text-black text-center"
    const variants = {
        primary: "",
        h1: "text-[32px] font-[300] leading-[100%] my-7"
    }
    return (
        <h1 className={`${generals} ${variants[variant]}`}
            { ...props }>
            {children}
        </h1>
    )
}

export default Title

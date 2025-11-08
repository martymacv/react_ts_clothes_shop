function Text({ children, variant = "primary", ...props }) {
    const generals = "font-khula text-black text-center"
    const variants = {
        primary: "text-[13px] font-[400] leading-[100%] my-3"
    }
    return (
        <h1 className={`${generals} ${variants[variant]}`}
            { ...props }>
            {children}
        </h1>
    )
}

export default Text

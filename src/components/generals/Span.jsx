function Span({ children, variant = "primary", ...props }) {
    const generals = "font-roboto text-[#828282ff]"
    const variants = {
        primary: "text-[8px] font-[300] leading-[100%] my-3 text-center"
    }
    return (
        <h1 className={`${generals} ${variants[variant]}`}
            { ...props }>
            {children}
        </h1>
    )
}

export default Span

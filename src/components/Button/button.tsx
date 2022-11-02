interface ButtonProps {
    text: string,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
    return(
        <button className={`${className}`} onClick={onClick}>
            {text}
        </button>
    )
}
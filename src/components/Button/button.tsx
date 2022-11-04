import styles from './button.module.scss'

interface ButtonProps {
    type?: 'button'|'submit'|'reset'
    text: string,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button: React.FC<ButtonProps> = ({ text, className, onClick, type }) => {
    return(
        <button 
            type={type}
            className={`${className} ${styles.button}`} 
            onClick={onClick}>
            {text}
        </button>
    )
}
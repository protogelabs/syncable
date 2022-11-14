import styles from './button.module.scss'

interface ButtonProps {
    type?: 'button'|'submit'|'reset',
    children?: React.ReactNode
    text?: string,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button: React.FC<ButtonProps> = ({ text, className, onClick, type, children }) => {
    return(
        <button 
            type={type}
            className={`${className} ${styles.button}`} 
            onClick={onClick}>
            {!children ? text : children}
        </button>
    )
}
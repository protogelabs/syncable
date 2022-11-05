import styles from "./words.module.scss"



export const Words: any = () =>{
    return(
         <div className={styles.word}>
            Never miss a <span className={styles.color}>Class</span> 
         </div>
    )
}
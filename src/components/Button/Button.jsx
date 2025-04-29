import styles from './button.module.scss'

export const Button = ({text}) => {
    return(
        <button className={styles.container}>
            <div className={styles.container_inner}>
                {text}
            </div>
        </button>
    )
}
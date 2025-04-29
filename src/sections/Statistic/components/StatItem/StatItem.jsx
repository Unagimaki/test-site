import styles from './statItem.module.scss'

export const StatItem = ({count, title, text}) => {
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.container_inner_count}>&pound;{count}</div>
                <div className={styles.container_inner_title}>{title}</div>
                <div className={styles.container_inner_text}>{text}</div>
            </div>
        </div>
    )
}
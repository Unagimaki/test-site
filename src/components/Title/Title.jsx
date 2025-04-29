import styles from './title.module.scss'

export const Title = ({text = 'Title'}) => {
    return(
        <div className={styles.container}>
            {text}
        </div>
    )
}
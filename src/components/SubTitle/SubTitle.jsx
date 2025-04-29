import styles from './subTitle.module.scss'

export const SubTitle = ({text = 'SubTitle'}) => {
    return(
        <div className={styles.container}>
            {text}
        </div>
    )
}
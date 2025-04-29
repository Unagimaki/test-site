import styles from './tableItem.module.scss'

export const TableItem = ({ name = 'noName', operation = 'none', result = 'none' }) => {
    const profit = require('./assets/profit.png')

    const getFormattedDate = () => {
        const date = new Date()
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear().toString().slice(-2)
        return `${day}.${month}.${year}`
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_info}>
                <div className={styles.container_name}>{name}</div>
                <div className={styles.container_operation}>{operation}</div>
                <div className={styles.container_result}>{result}</div>
                <div className={styles.container_date}>{getFormattedDate()}</div>
            </div>
            <div className={styles.imageWrapper}>
                <img src={profit} alt="result_type" />
            </div>
        </div>
    )
}

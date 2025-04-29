import styles from './tableItem.module.scss'

export const TableItem = ({ name = 'noName', operation = 'none', result = 'none' }) => {
    const profit = require('./assets/profit.png')
    return (
        <div className={styles.container}>
            <div className={styles.container_info}>
                <div className={styles.container_name}>{name}</div>
                <div className={styles.container_operation}>{operation}</div>
                <div className={styles.container_result}>{result}</div>
                <div className={styles.container_date}>08.04.25</div>
            </div>
            <div className={styles.imageWrapper}>
                <img src={profit} alt="result_type" />
            </div>

        </div>
    )
}

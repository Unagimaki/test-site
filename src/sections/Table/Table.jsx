import { SubTitle } from '../../components/SubTitle/SubTitle'
import { Title } from '../../components/Title/Title'
import { TableItem } from './components/TableItem/TableItem'
import { table_data } from './data'
import styles from './table.module.scss'

export const Table = () => {
    const arr = table_data
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <SubTitle text={'Trades'}/>
                <Title text='GreenChart uses Artificial Intelligence and State-of-the art algorithms to identify only profitable trades'/>
                <div className={styles.table}>
                    <div className={styles.table_title}>
                        <div className={styles.table_title_info}>
                            <div className={styles.table_title_name}>Confirmacion</div>
                            <div className={styles.table_title_operation}>Operacion</div>
                            <div className={styles.table_title_result}>Resultado</div>
                            <div className={styles.table_title_date}>Fecha</div>
                        </div>
                        <div className={styles.table_title_confirmation}>Confirmacion</div>
                    </div>
                    <div className={styles.table_item_list}>
                        {
                            arr.map((item, index) => {
                                return(
                                    <TableItem
                                        key={index}
                                        name={item.name}
                                        operation={item.operation}
                                        result={item.result}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
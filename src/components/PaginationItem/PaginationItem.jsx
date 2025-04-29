import styles from './paginationItem.module.scss'

export const PaginationItem = ({type = '', onClick}) => {
    return(
        <div onClick={onClick} style={{backgroundColor: type === 'fill' ? '#E3FF34' : ''}} className={styles.container}>

        </div>
    )
}
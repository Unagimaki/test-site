import styles from './timer.module.scss'


export const Timer = () => {
    const flag = require('./assets/flag.png')
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>

                <div className={styles.container_info}>
                    <img src={flag} alt="flag" />
                    <div className={styles.container_info_text}>Earn from <span>£780</span> to <span>£1,800</span> per day by using an investment platform.</div>
                </div>
                <div className={styles.container_timer}>
                    <div className={styles.container_timer_count}>09 : 34</div>
                    <button className={styles.container_timer_button}>Sign up</button>
                </div>
            </div>

        </div>
    )
}
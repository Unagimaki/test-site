import styles from './footer.module.scss'
import { Button } from '../../components/Button/Button'

export const Footer = () => {
    const logo = require('./assets/logo.png')
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.container_inner_logo}>
                    <img src={logo} alt="logo" />
                </div>
                <Button text={'Register now'}/>
                <div className={styles.container_inner_menu_list}>
                    <div className={styles.container_inner_menu_list_item}>Leaders</div>
                    <div className={styles.container_inner_menu_list_item}>Trades</div>
                    <div className={styles.container_inner_menu_list_item}>Advantages</div>
                    <div className={styles.container_inner_menu_list_item}>Stats</div>
                </div>
                <div className={styles.container_inner_info_list}>
                    <div className={styles.container_inner_info_list_item}>GreenChart, All Rights Reserved.</div>
                    <div className={styles.container_inner_info_list_item}>Privacy policy</div>
                    <div className={styles.container_inner_info_list_item}>Terms</div>
                    <div className={styles.container_inner_info_list_item}>2025</div>
                </div>
                <div className={styles.container_inner_info_list_mobile}>
                    <div className={styles.container_inner_info_list_item}>Privacy policy</div>
                    <div className={styles.container_inner_info_list_item}>Terms</div>
                    <div className={styles.container_inner_info_list_item}>GreenChart, All Rights Reserved. 2025</div>
                </div>
            </div>
        </div>
    )
}
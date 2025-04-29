import styles from './footer.module.scss'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-scroll'

export const Footer = () => {
    const logo = require('./assets/logo.png')
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.container_inner_logo}>
                    <img src={logo} alt="logo" />
                </div>
                <Link to="Intro" smooth={true} duration={500}>
                    <Button text={'Register now'}/>
                </Link>
                <div className={styles.container_inner_menu_list}>
                    <div className={styles.container_inner_menu_list_item}>
                        <Link to="Leaders" smooth={true} duration={500}>
                            Leaders
                        </Link>
                    </div>
                    <div className={styles.container_inner_menu_list_item}>
                        <Link to="Trades" smooth={true} duration={500}>
                            Trades
                        </Link>
                    </div>
                    <div className={styles.container_inner_menu_list_item}>
                        <Link to="Advantages" smooth={true} duration={500}>
                            Advantages
                        </Link>
                    </div>
                    <div className={styles.container_inner_menu_list_item}>
                        <Link to="Stats" smooth={true} duration={500}>
                            Stats
                        </Link>
                    </div>
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
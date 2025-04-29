import { Link } from 'react-scroll'
import styles from './dropdownMenu.module.scss'

export const DropdownMenu = ({handleMenu}) => {
    return(
        <div className={styles.dropdownMenu}>
            <div className={styles.dropdownMenu_list}>
                    <Link to="Leaders" smooth={true} duration={500}>
                        <button onClick={handleMenu} className={styles.dropdownMenu_list_button}>Leaders</button>
                    </Link>

                    <Link to="Trades" smooth={true} duration={500}>
                        <button onClick={handleMenu} className={styles.dropdownMenu_list_button}>Trades</button>
                    </Link>

                    <Link to="Advantages" smooth={true} duration={500}>
                        <button onClick={handleMenu} className={styles.dropdownMenu_list_button}>Advantages</button>
                    </Link>

                    <Link to="Stats" smooth={true} duration={500}>
                        <button onClick={handleMenu} className={styles.dropdownMenu_list_button}>Stats</button>
                    </Link>
            </div>
            <div className={styles.dropdownMenu_reg_button}>Register Now</div>
            
            <div className={styles.dropdownMenu_policy}>
                <div className={styles.dropdownMenu_policy_item}>Privacy policy</div>
                <div className={styles.dropdownMenu_policy_item}>Terms</div>
            </div>
            <div className={styles.dropdownMenu_right}>
                GreenChart, All Rights Reserved. 2024
            </div>
        </div>
    )
}
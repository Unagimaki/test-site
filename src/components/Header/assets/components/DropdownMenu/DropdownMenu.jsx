import styles from './dropdownMenu.module.scss'

export const DropdownMenu = () => {
    return(
        <div className={styles.dropdownMenu}>
            <div className={styles.dropdownMenu_list}>
                <button className={styles.dropdownMenu_list_button}>Instruction</button>
                <button className={styles.dropdownMenu_list_button}>Advantages</button>
                <button className={styles.dropdownMenu_list_button}>Investments</button>
                <button className={styles.dropdownMenu_list_button}>Expert Opinion</button>
                <button className={styles.dropdownMenu_list_button}>Support</button>
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
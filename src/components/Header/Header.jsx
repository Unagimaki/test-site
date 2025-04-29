import { DropdownMenu } from './assets/components/DropdownMenu/DropdownMenu'
import styles from './header.module.scss'
import { useEffect, useState } from 'react'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const logo = require('./assets/header_logo.png')

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <img className={styles.container_inner_logo} src={logo} alt="logo" />
                
                <div className={styles.container_inner_buttons}>
                    <button className={styles.container_inner_header_button}>Leaders</button>
                    <button className={styles.container_inner_header_button}>Leaders</button>
                    <button className={styles.container_inner_header_button}>Leaders</button>
                    <button className={styles.container_inner_header_button}>Leaders</button>
                </div>

                <button className={styles.container_inner_reg_button}>Register Now</button>

                {/* Кнопка-бургер */}
                <button
                    className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
                    onClick={handleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                { menuOpen && <DropdownMenu/> }
            </div>
        </div>
    )
}

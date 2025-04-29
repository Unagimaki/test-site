import { DropdownMenu } from './assets/components/DropdownMenu/DropdownMenu'
import styles from './header.module.scss'
import { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const logo = require('./assets/header_logo.png')

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`${styles.container} ${scrolled ? styles.sticky : ''}`}>
            <div className={styles.container_inner}>
                <img className={styles.container_inner_logo} src={logo} alt="logo" />

                <div className={styles.container_inner_buttons}>
                    <Link to="Leaders" smooth={true} duration={500}>
                        <button className={styles.container_inner_header_button}>Leaders</button>
                    </Link>

                    <Link to="Trades" smooth={true} duration={500}>
                        <button className={styles.container_inner_header_button}>Trades</button>
                    </Link>

                    <Link to="Advantages" smooth={true} duration={500}>
                        <button className={styles.container_inner_header_button}>Advantages</button>
                    </Link>

                    <Link to="Stats" smooth={true} duration={500}>
                        <button className={styles.container_inner_header_button}>Stats</button>
                    </Link>
                </div>
                <Link to='Intro' smooth={true} duration={500}>
                    <button className={styles.container_inner_reg_button}>Register Now</button>
                </Link>
                <button className={`${styles.burger} ${menuOpen ? styles.active : ''}`} onClick={handleMenu}>
                    <span></span><span></span><span></span>
                </button>
                { menuOpen && <DropdownMenu/> }
            </div>
        </div>
    )
}


import { RegistrationForm } from './components/RegistrationForm/RegistrationForm'
import styles from './intro.module.scss'

export const Intro = () => {
    const note_icon = require('./assets/note_icon.png')
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.container_inner_info}>
                    <div className={styles.container_inner_info_text}>Earn from <span>£780</span> to <span>£1,800</span> per day by using an investment platform</div>
                    <div className={styles.container_inner_info_note}>
                        <img src={note_icon} alt="note_icon" />
                        <div>UK registration is now <span>open</span></div>
                    </div>
                </div>
                <RegistrationForm/>
            </div>
        </div>
    )
}
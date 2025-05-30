import styles from './advantageItem.module.scss'

export const AdvantageItem = ({tag, title, text}) => {
    const photo = require('./assets/photo.png')
    const icon = require('./assets/icon.png')
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.container_inner_info}>
                    <div className={styles.container_inner_info_tag}>{tag}</div>
                    <div className={styles.container_inner_info_title}>{title}</div>
                    <div className={styles.container_inner_info_text}>{text}</div>
                </div>
                <div className={styles.container_inner_image}>
                    <img className={styles.container_inner_image_photo} src={photo} alt="photo" />
                    <img className={styles.container_inner_image_icon} src={icon} alt="icon" />
                </div>
            </div>
        </div>
    )
}
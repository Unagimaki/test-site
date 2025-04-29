import { useEffect, useState } from 'react'
import styles from './timer.module.scss'

export const Timer = () => {
    const flag = require('./assets/flag.png')
    const [timeLeft, setTimeLeft] = useState(9 * 60 + 34) // 9:34 в секундах
    const [isVisible, setIsVisible] = useState(true) // Состояние для видимости

    useEffect(() => {
        if (timeLeft <= 0) return

        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timeLeft])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${minutes.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`
    }

    useEffect(() => {
        // Функция для отслеживания прокрутки
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            if (scrollPosition >= documentHeight) {
                setIsVisible(false) // Если достигнут конец страницы, скрываем таймер
            } else {
                setIsVisible(true) // В противном случае показываем
            }
        }

        // Добавляем обработчик события прокрутки
        window.addEventListener('scroll', handleScroll)

        // Убираем обработчик при размонтировании компонента
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        isVisible && ( // Если isVisible true, таймер отображается
            <div className={styles.container}>
                <div className={styles.container_inner}>
                    <div className={styles.container_info}>
                        <img src={flag} alt="flag" />
                        <div className={styles.container_info_text}>
                            Earn from <span>£780</span> to <span>£1,800</span> per day by using an investment platform.
                        </div>
                    </div>
                    <div className={styles.container_timer}>
                        <div className={styles.container_timer_count}>
                            {formatTime(timeLeft)}
                        </div>
                        <button className={styles.container_timer_button}>Sign up</button>
                    </div>
                </div>
            </div>
        )
    )
}

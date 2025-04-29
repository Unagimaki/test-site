import { useEffect, useState, useRef } from 'react'
import styles from './statItem.module.scss'

export const StatItem = ({ count, title, text }) => {
    const [displayedCount, setDisplayedCount] = useState(0)
    const [visible, setVisible] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.5, // 50% элемента в зоне видимости
            }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!visible) return

        let start = 0
        const duration = 1000
        const stepTime = 20
        const steps = duration / stepTime
        const increment = count / steps

        const interval = setInterval(() => {
            start += increment
            if (start >= count) {
                start = count
                clearInterval(interval)
            }
            setDisplayedCount(start)
        }, stepTime)

        return () => clearInterval(interval)
    }, [visible, count])


    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.container_inner_count}>
                    &pound;{Number.isInteger(count)
                        ? Math.floor(displayedCount).toLocaleString()
                        : displayedCount.toFixed(1)}
                </div>
                <div className={styles.container_inner_title}>{title}</div>
                <div className={styles.container_inner_text}>{text}</div>
            </div>
        </div>
    )
}

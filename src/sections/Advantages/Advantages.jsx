import { useEffect, useRef, useState } from 'react'
import styles from './advantages.module.scss'
import { SubTitle } from '../../components/SubTitle/SubTitle'
import { Title } from '../../components/Title/Title'
import { AdvantageItem } from './components/AdvantageItem/AdvantageItem'
import { PaginationItem } from '../../components/PaginationItem/PaginationItem'
import { advantagesData } from './data'

export const Advantages = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [gap, setGap] = useState(20); // начальный зазор между карточками
    const [slideWidth, setSlideWidth] = useState(252); // начальная ширина карточки
    const AUTO_SCROLL_INTERVAL = 3000; // каждые 3 секунды

    const handleMove = (index) => {        
        setCurrentIndex(index)
    }

    const updateDimensions = () => {
        const screenWidth = window.innerWidth; // получаем ширину экрана

        // Рассчитываем новые значения
        const newSlideWidth = (screenWidth / 375) * 252; // ширина карточки
        const newGap = (screenWidth / 375) * 20; // зазор

        setSlideWidth(newSlideWidth);
        setGap(newGap);
    };

    useEffect(() => {
        // Запускаем пересчет при монтировании компонента
        updateDimensions();

        // Добавляем обработчик события изменения размера окна
        window.addEventListener('resize', updateDimensions);

        // Очищаем обработчик при размонтировании компонента
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                // если дошли до конца — возвращаемся в начало
                const nextIndex = prevIndex + 1;
                return nextIndex >= advantagesData.length ? 0 : nextIndex;
            });
        }, AUTO_SCROLL_INTERVAL);

        return () => clearInterval(interval); // очистка таймера
    }, [advantagesData.length]);


    return (
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <SubTitle text='Advantages' />
                <Title text='Register today to gain immediate access to this revolutionary trading system!' />

                {/* Desktop */}
                <div className={styles.advantages_list}>
                        {
                            advantagesData.map(item => {
                                return(
                                    <AdvantageItem
                                        tag={item.tag}
                                        text={item.text}
                                        title={item.title}
                                        key={item.id}
                                    />
                                )
                            })
                        }                </div>

                {/* Mobile slider */}
                <div className={styles.advantages_list_mobile}>
                    <div
                        className={styles.advantages_list_mobile_line}
                        style={{
                            transform: `translateX(-${currentIndex * (slideWidth + gap)}px)`,
                            transition: 'transform 0.4s ease-in-out',
                        }}
                    >
                        {
                            advantagesData.map(item => {
                                return(
                                    <AdvantageItem
                                        tag={item.tag}
                                        text={item.text}
                                        title={item.title}
                                        key={item.id}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                {/* Pagination */}
                <div className={styles.advantages_pagination_wrapper}>
                    <div className={styles.advantages_pagination_wrapper_inner}>
                        {advantagesData.map((item, index) => (
                            <PaginationItem type={index === currentIndex ? 'fill' : ''} key={index} onClick={() => handleMove(index)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

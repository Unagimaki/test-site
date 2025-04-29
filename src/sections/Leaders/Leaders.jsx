import { useEffect, useState } from 'react'
import styles from './leaders.module.scss'
import { text } from './data'
import { SubTitle } from '../../components/SubTitle/SubTitle'
import { Title } from '../../components/Title/Title'

export const Leaders = () => {
    const img_1 = require('./assets/slide_img_1.png')
    const img_2 = require('./assets/slide_img_2.png')

    const left = require('./assets/left.png')
    const right = require('./assets/right.png')

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        if (currentIndex === slides.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1));
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(slides.length - 1)
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1));
        }
    };
    const slides = [
        {
            text: text,
            img: img_1,
            name: 'Martin Lewis',
            role: 'Journalist, broadcaster',
        },
        {
            text: text,
            img: img_2,
            name: 'Lewis Martin',
            role: 'Journalist, broadcaster',

        },
    ]
    
    return (
        <div className={styles.container}>
            <SubTitle text={'Leaders'}/>
            <Title text='Leaders who support us'/>
            <div className={styles.container_inner}>
                <div className={styles.container_inner_buttons_wrapper}>
                    <button onClick={prevSlide}><img src={left} alt="left" /></button>
                    <button onClick={nextSlide}><img src={right} alt="right" /></button>
                </div>
                <div className={styles.slider_slide}>
                    <div className={styles.slider_slide_info}>
                        <div className={styles.slider_slide_info_text}>{slides[currentIndex].text}</div>
                        <div className={styles.slider_slide_info_author}>
                            <div className={styles.slider_slide_info_author_name}>{slides[currentIndex].name}</div>
                            <div className={styles.slider_slide_info_author_role}>{slides[currentIndex].role}</div>
                        </div>
                    </div>
                    <div className={styles.slider_slide_img}>
                        <img src={slides[currentIndex].img} alt="img" />
                    </div>
                </div>
                <div className={styles.slider_pages}>
                    {
                        slides.map((item, index) => {
                            return(
                                <div key={index} style={{backgroundColor: index === currentIndex ? '#E3FF34' : ''}} className={styles.slider_pages_item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
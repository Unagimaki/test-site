import { useEffect, useState } from 'react';
import styles from './leaders.module.scss';
import { text } from './data';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { Title } from '../../components/Title/Title';
import { PaginationItem } from '../../components/PaginationItem/PaginationItem'

export const Leaders = () => {
  const img_1 = require('./assets/slide_img_1.png');
  const img_2 = require('./assets/slide_img_2.png');
  const left = require('./assets/left.png');
  const right = require('./assets/right.png');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const nextSlide = () => {
    if (fadeOut || fadeIn) return;
    const index = (currentIndex + 1) % slidesLength;
    setNextIndex(index);
    setFadeOut(true);
  };

  const prevSlide = () => {
    if (fadeOut || fadeIn) return;
    const index = (currentIndex - 1 + slidesLength) % slidesLength;
    setNextIndex(index);
    setFadeOut(true);
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
  ];
  const slidesLength = slides.length;

  const toggleIndex = (index) => {
    if (fadeOut || fadeIn || index === currentIndex) return

    setFadeOut(true)
    setNextIndex(index) // сохраняем, куда хотим переключиться
  }

  const [nextIndex, setNextIndex] = useState(null)

  useEffect(() => {
    if (fadeOut && nextIndex !== null) {
      const timer = setTimeout(() => {
        setCurrentIndex(nextIndex)
        setNextIndex(null)
        setFadeOut(false)
        setFadeIn(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [fadeOut, nextIndex])

  useEffect(() => {
    if (fadeIn) {
      const timer = setTimeout(() => {
        setFadeIn(false); // Убираем fadeIn после появления слайда
      }, 500); // Время появления

      return () => clearTimeout(timer); // Очищаем таймер при размонтировании
    }
  }, [fadeIn]);

  return (
    <div className={styles.container}>
      <SubTitle text={'Leaders'} />
      <Title text='Leaders who support us' />
      <div className={styles.container_inner}>
        <div className={styles.container_inner_buttons_wrapper}>
          <button onClick={prevSlide}>
            <img src={left} alt="left" />
          </button>
          <button onClick={nextSlide}>
            <img src={right} alt="right" />
          </button>
        </div>
        <div className={`${styles.slider_slide} ${fadeOut ? styles.fadeOut : ''} ${fadeIn ? styles.fadeIn : ''}`}>
          <div className={styles.slider_slide_info}>
            <div className={styles.slider_slide_info_text}>
              {slides[currentIndex].text}
            </div>
            <div className={styles.slider_slide_info_author}>
              <div className={styles.slider_slide_info_author_name}>
                {slides[currentIndex].name}
              </div>
              <div className={styles.slider_slide_info_author_role}>
                {slides[currentIndex].role}
              </div>
            </div>
          </div>
          <div className={styles.slider_slide_img}>
            <img src={slides[currentIndex].img} alt="img" />
          </div>
        </div>
        <div className={styles.slider_pages}>
          {slides.map((item, index) => {
            return(
              <PaginationItem onClick={() => toggleIndex(index)} type={index === currentIndex ? 'fill' : ''}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

import { useEffect, useRef } from 'react';
import styles from './Card.module.scss';

const Card = ({ title, image, price, oldPrice, rate }) => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <li className={`${styles.headphones__card} ${styles.card}`}>
      <img ref={ref} className={styles.card__image} src={image} alt={title} />
      <div className={styles.card__description}>
        <h3 className={styles.card__name}>{title}</h3>
        <div className={styles['card__price-wrapper']}>
          <span className={styles.card__price}>{price} ₽</span>
          <span className={styles['card__old-price']}>
            {oldPrice ? oldPrice + ' ₽' : ''}
          </span>
        </div>
        <span className={styles.card__rate}>{rate}</span>
        <button
          type='button'
          aria-label='Купить'
          className={styles['card__button-buy']}
        >
          Купить
        </button>
      </div>
    </li>
  );
};

export default Card;

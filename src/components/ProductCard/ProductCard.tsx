import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, increaseAmountItem } from '../../redux/cart/cartSlice';

import styles from './ProductCard.module.scss';

import { FC } from 'react';
import { IProductCardProps } from './ProductCard.types';
import { useAppSelector } from 'src/types';
import { ICartItem } from 'src/redux/cart/cartSlice.types';

const ProductCard = ({ title, image, price, oldPrice, rate, id }: IProductCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((store) => store.cart.cartItems);

  const handleAddToCart = () => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(increaseAmountItem({ title, image, price, oldPrice, rate, id } as ICartItem));
    } else {
      return dispatch(addItemToCart({ title, image, price, oldPrice, rate, id, amount: 1 }));
    }
  };

  return (
    <li className={`${styles.card}`}>
      <img className={styles.card__image} src={image} alt={title} />
      <div className={styles.card__description}>
        <h3 className={styles.card__name}>{title}</h3>
        <div className={styles['card__price-wrapper']}>
          <span className={styles.card__price}>{price} ₽</span>
          <span className={styles['card__old-price']}>{oldPrice ? oldPrice + ' ₽' : ''}</span>
        </div>
        <span className={styles.card__rate}>{rate}</span>
        <button type="button" aria-label="Купить" className={styles['card__button-buy']} onClick={handleAddToCart}>
          Купить
        </button>
      </div>
    </li>
  );
};

export default ProductCard;

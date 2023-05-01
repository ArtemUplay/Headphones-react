import styles from './CartItems.module.scss';

import { removeItemFromCart, increaseAmountItem, decreaseAmountItem } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const totalPrice = item.price * item.amount;

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item));
  };

  const handleIncreaseAmountItem = () => {
    dispatch(increaseAmountItem(item));
    // setTotalItemPrice(totalItemPrice + item.price);
  };

  const handleDecreaseAmountItem = () => {
    dispatch(decreaseAmountItem(item));
    // setTotalItemPrice(totalItemPrice - item.price);
  };

  return (
    <li className={styles.cart__item}>
      <div className={styles['cart__columns-wrapper']}>
        <div className={styles['cart__image-column']}>
          <img className={styles['cart__item-image']} src={item.image} alt={item.title} />
          <div className={styles.cart__buttons}>
            <button
              className={`${styles.cart__button} ${styles['cart__button-deacrease']}`}
              type="button"
              aria-label="Уменьшить количество товара"
              onClick={handleDecreaseAmountItem}></button>
            <span className={styles['cart__item-counter']}>{item.amount}</span>
            <button
              className={`${styles.cart__button} ${styles['cart__button-increase']}`}
              type="button"
              aria-label="Увеличить количество товара"
              onClick={handleIncreaseAmountItem}></button>
          </div>
        </div>
        <div className={styles['cart__column-info']}>
          <h3 className={styles['cart__item-name']}>{item.title}</h3>
          <span className={styles['cart__item-price']}>{item.price} ₽</span>
        </div>
      </div>
      <div className={styles['cart__column-total-price']}>
        <button
          className={styles['cart__item-delete-button']}
          aria-label="Удалить товар из корзины"
          onClick={handleRemoveItem}></button>
        <span className={styles['cart__item-total-price']}>{totalPrice} ₽</span>
      </div>
    </li>
  );
};

export default CartItem;

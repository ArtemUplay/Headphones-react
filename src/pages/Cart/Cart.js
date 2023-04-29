import { useSelector } from 'react-redux';
import styles from './Cart.module.scss';
import { useEffect, useMemo, useState } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { loadPage } from '../../utils/utils';
import Loader from 'react-js-loader';

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPage(setIsLoading);
  }, []);

  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      if (item.amount === 1) {
        return sum + item.price;
      } else if (item.amount > 1) {
        return sum + item.price * item.amount;
      } else {
        return 0;
      }
    }, 0);
  }, [cartItems]);

  return (
    <>
      {isLoading ? (
        <div className={'item'}>
          <Loader type="spinner-default" bgColor={'#000000'} title={'Загрузка'} color={'#000000'} size={100} />
        </div>
      ) : (
        <section className={styles.cart}>
          <h2 className={styles.cart__title}>Корзина</h2>
          <div className={styles['cart__body-wrapper']}>
            <ul className={styles.cart__list}>
              {cartItems
                ? cartItems.map((item, index) => {
                    return <CartItem key={index} item={item} />;
                  })
                : null}
            </ul>
            <div className={styles['cart__total']}>
              <div className={styles['cart__total-info']}>
                <span className={styles['cart__total-text']}>ИТОГО</span>
                <span className={styles['cart__total-price']}>₽ {totalPrice}</span>
              </div>
              <div className={styles['cart__total-button-wrapper']}>
                <button className={styles['cart__total-button']} aria-label="Перейти к оформлению">
                  Перейти к оформлению
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;

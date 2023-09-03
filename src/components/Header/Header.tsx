import styles from './Header.module.scss';

import favotiresIcon from '../../assets/heart.svg';
import cartIcon from '../../assets/cart.svg';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';
import { useAppSelector } from 'src/types';

const Header = () => {
  const { cartItems } = useAppSelector((store) => store.cart);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const items = JSON.stringify(cartItems);
      localStorage.setItem('cartItems', items);
    }

    isMounted.current = true;
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.amount, 0);
  }, [cartItems]);

  return (
    <header className={styles.header}>
      <h1 className={`${styles.header__logo} ${styles.logo}`}>
        <Link to="/" className={styles.logo__link}>
          QPICK
        </Link>
      </h1>
      <ul className={styles.header__menu}>
        <li className={styles.header__item}>
          <button className={styles.header__link}>
            <span className={`${styles.header__counter} ${styles['header__count-favorites']}`}>2</span>
            <img className={styles.header__icon} src={favotiresIcon} alt="Избранное" />
          </button>
        </li>
        <li className={styles.header__item}>
          <Link to="/cart" className={styles.header__link}>
            <span className={`${styles.header__counter} ${styles['header__count-cart']}`}>{totalItems}</span>
            <img className={styles.header__icon} src={cartIcon} alt="Корзина" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

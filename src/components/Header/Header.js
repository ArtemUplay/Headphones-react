import { useSelector } from 'react-redux';

import styles from './Header.module.scss';

import favotiresIcon from '../../assets/heart.svg';
import cartIcon from '../../assets/cart.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const counterCart = useSelector((store) => store.cart.cartItems.length);

  return (
    <header className={styles.header}>
      <h1 className={`${styles.header__logo} ${styles.logo}`}>
        <Link to="/" className={styles.logo__link}>
          QPICK
        </Link>
      </h1>
      <ul className={styles.header__menu}>
        <li className={styles.header__item}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a className={styles.header__link} href="#">
            <span className={`${styles.header__counter} ${styles['header__count-favorites']}`}>2</span>
            <img className={styles.header__icon} src={favotiresIcon} alt="Избранное" />
          </a>
        </li>
        <li className={styles.header__item}>
          <Link to="/cart" className={styles.header__link}>
            <span className={`${styles.header__counter} ${styles['header__count-cart']}`}>{counterCart}</span>
            <img className={styles.header__icon} src={cartIcon} alt="Корзина" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

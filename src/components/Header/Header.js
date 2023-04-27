import styles from './Header.module.scss';

import favotiresIcon from '../../assets/heart.svg';
import cartIcon from '../../assets/cart.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>QPICK</h1>
      <ul className={styles.header__menu}>
        <li className={styles.header__item}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a className={styles.header__link} href='#'>
            <span
              className={`${styles.header__counter} ${styles['header__count-favorites']}`}
            >
              0
            </span>
            <img
              className={styles.header__icon}
              src={favotiresIcon}
              alt='Избранное'
            />
          </a>
        </li>
        <li className={styles.header__item}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a className={styles.header__link} href='#'>
            <span
              className={`${styles.header__counter} ${styles['header__count-cart']}`}
            >
              0
            </span>
            <img className={styles.header__icon} src={cartIcon} alt='Корзина' />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

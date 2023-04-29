import styles from './Footer.module.scss';

import Planet from '../../assets/planet.svg';
import Vk from '../../assets/VK.svg';
import Telegram from '../../assets/Telegram.svg';
import WhatsApp from '../../assets/Whatsapp.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__column-logo']}>
        <span className={`${styles.footer__logo} ${styles.logo}`}>
          <a className={styles.logo__link} href="#">
            QPICK
          </a>
        </span>
      </div>
      <div className={styles.footer__links}>
        <a className={styles.footer__link} href="#">
          Избранное
        </a>
        <a className={styles.footer__link} href="#">
          Корзина
        </a>
        <a className={styles.footer__link} href="#">
          Контакты
        </a>
      </div>
      <div className={styles['footer__column-terms']}>
        <a className={styles['footer__link-terms']} href="#">
          Условия сервиса
        </a>
        <div className={styles.footer__languages}>
          <img src={Planet} alt="Переключение языков" />
          <button
            className={`${styles['footer__language-button']} ${styles['footer__language-button_active']}`}
            type="button">
            Рус
          </button>
          <button className={`${styles['footer__language-button']}`} type="button">
            Eng
          </button>
        </div>
      </div>
      <div className={styles['footer__column-messengers']}>
        <a href="#">
          <img src={Vk} alt="Вконтакте" />
        </a>
        <a href="#">
          <img src={Telegram} alt="Телеграмм" />
        </a>
        <a href="#">
          <img src={WhatsApp} alt="Вотсап" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

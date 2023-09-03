import styles from './Footer.module.scss';

import Planet from '../../assets/planet.svg';
import Vk from '../../assets/VK.svg';
import Telegram from '../../assets/Telegram.svg';
import WhatsApp from '../../assets/Whatsapp.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__logo} ${styles.logo}`}>
        <button className={styles.logo__link}>QPICK</button>
      </div>
      <div className={styles.footer__links}>
        <button className={styles.footer__link}>Избранное</button>
        <button className={styles.footer__link}>Корзина</button>
        <button className={styles.footer__link}>Контакты</button>
      </div>
      <div className={styles['footer__column-terms']}>
        <button className={styles['footer__link-terms']}>Условия сервиса</button>
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
        <button className={styles['footer__column-messengers-button']}>
          <img src={Vk} alt="Вконтакте" />
        </button>
        <button className={styles['footer__column-messengers-button']}>
          <img src={Telegram} alt="Телеграмм" />
        </button>
        <button className={styles['footer__column-messengers-button']}>
          <img src={WhatsApp} alt="Вотсап" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

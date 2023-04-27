import { headphonesArray } from '../utils/data';
import styles from './Headphones.module.scss';

import Card from '../Card/Card';

const Headphones = () => {
  return (
    <>
      <h2 className={styles.headphones__title}>Наушники</h2>
      <ul className={styles.headphones__list}>
        {headphonesArray.map((item, index) => {
          if (item.isWireless) {
            return (
              <Card
                key={index}
                title={item.title}
                image={item.img}
                price={item.price}
                oldPrice={item.oldPrice}
                rate={item.rate}
              />
            );
          }

          return null;
        })}
      </ul>
      <h2 className={styles.headphones__title}>Беспроводные наушники</h2>
      <ul className={styles.headphones__list}>
        {headphonesArray.map((item, index) => {
          if (!item.isWireless) {
            return (
              <Card
                key={index}
                title={item.title}
                image={item.img}
                price={item.price}
                oldPrice={item.oldPrice}
                rate={item.rate}
              />
            );
          }

          return null;
        })}
      </ul>
    </>
  );
};

export default Headphones;

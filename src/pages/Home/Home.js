import { headphonesArray } from '../../__mocks__/headphones.mocks';
import styles from './Home.module.scss';
import { v4 as uuidv4 } from 'uuid';

import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from 'react-js-loader';
import { useEffect, useState } from 'react';
import { loadPage } from '../../utils/utils';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPage(setIsLoading);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={'item'}>
          <Loader type="spinner-default" bgColor={'#000000'} title={'Загрузка'} color={'#000000'} size={100} />
        </div>
      ) : (
        <>
          <section>
            <h2 className={styles.headphones__title}>Наушники</h2>
            <ul className={styles.headphones__list}>
              {headphonesArray.map((item) => {
                if (item.isWireless) {
                  return (
                    <ProductCard
                      key={item.id}
                      id={item.id}
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
          </section>
          <section>
            <h2 className={styles.headphones__title}>Беспроводные наушники</h2>
            <ul className={styles.headphones__list}>
              {headphonesArray.map((item) => {
                if (!item.isWireless) {
                  return (
                    <ProductCard
                      key={uuidv4()}
                      id={uuidv4()}
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
          </section>
        </>
      )}
    </>
  );
};

export default Home;

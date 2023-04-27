import styles from './App.module.scss';

import Header from '../Header/Header';
import Headphones from '../Headphones/Headphones';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className='main'>
        <Headphones />
      </main>
    </div>
  );
};

export default App;

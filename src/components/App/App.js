import styles from './App.module.scss';

import Header from '../Header/Header';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};

export default App;

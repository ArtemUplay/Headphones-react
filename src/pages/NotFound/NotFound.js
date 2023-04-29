import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.text}>Страница, которую вы ищете, не существует.</p>
    </>
  );
};

export default NotFound;

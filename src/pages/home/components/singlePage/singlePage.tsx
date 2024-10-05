import styles from "./singlePage.module.css";

const MainSinglePage: React.FC<{
  title: string;
  flag: string;
  population: string;
}> = ({ title, flag, population }) => {
  return (
    <div className={styles["singlePage-container"]}>
      <div className={styles.root}>
        <h2 className={styles["country-title"]}>{title}</h2>
        <img
          src={flag}
          alt={`Flag of ${title}`}
          className={styles["country-flag"]}
        />
        <p className={styles["country-population"]}>Population: {population}</p>
      </div>
    </div>
  );
};
export default MainSinglePage;

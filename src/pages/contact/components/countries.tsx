import styles from "./countries.module.css";

const Country = () => {
  return (
    <section className={styles["countries-section"]}>
      <div className={styles["countries-block"]}>
        <h2>Countries</h2>
      </div>
    </section>
  );
};
export default Country;

import styles from "./hero-wrapper.module.css";

const HeroWrapper: React.FC = () => {
  return (
    <div className={styles["hero-wrapper"]}>
      <h1 className={styles["hero-title"]}>Countries App</h1>
      <p className={styles["hero-description"]}>
        Discover fascinating information about countries worldwide, including
        their geography, demographics, and cultural heritage. Our app provides
        an interactive platform to explore and learn about diverse nations
        across the globe.
      </p>
    </div>
  );
};
HeroWrapper.displayName = "HeroWrapper";
export default HeroWrapper;

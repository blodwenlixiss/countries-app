import styles from "./hero.module.css";

const Hero: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactNode => {
  return <section className={styles.hero}>{children}</section>;
};
Hero.displayName = "Hero";

export default Hero;

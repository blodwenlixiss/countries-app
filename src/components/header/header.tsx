import styles from "./header.module.css";

const Header: React.FC = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <h1 className={styles["header-title"]}>
          <a href="/">Countries App</a>
        </h1>
        <nav className={styles["header-nav"]}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/countries">Countries</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
Header.displayName = "Header";
export default Header;

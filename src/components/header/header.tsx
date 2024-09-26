import styles from "./header.module.css";

function Header() {
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
}

export default Header;

import styles from "./header.module.css";
import { Link, NavLink, NavLinkRenderProps } from "react-router-dom";

function Header() {
  function navIsActive({ isActive }: NavLinkRenderProps) {
    return isActive ? styles["active-nav-item"] : styles["nav-item"];
  }
  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <Link to="/">
          <h1 className={styles["header-title"]}>Countries App</h1>
        </Link>
        <nav className={styles["header-nav"]}>
          <ul>
            <li>
              <NavLink className={navIsActive} to="/countries">
                <span>Countries</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={navIsActive} to="/about">
                <span>About</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

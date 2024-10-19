import { useState } from "react";
import styles from "./header.module.css";
import { NavLink, NavLinkRenderProps, useNavigate } from "react-router-dom";

function Header() {
  function navIsActive({ isActive }: NavLinkRenderProps) {
    return isActive ? styles["active-nav-item"] : styles["nav-item"];
  }
  const [langChange, setLangChange] = useState(false);
  const navigate = useNavigate();

  function handleLangChange() {
    setLangChange((state) => !state);
    const route = langChange ? "en" : "ka";
    navigate(`../${route}/`);
  }

  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <NavLink to="countries">
          <h1 className={styles["header-title"]}>Countries App</h1>
        </NavLink>
        <nav className={styles["header-nav"]}>
          <ul>
            <li>
              <NavLink className={navIsActive} to="countries">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={navIsActive} to="contact">
                <span>Contact</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={navIsActive} to="about">
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <button onClick={handleLangChange}>
                {langChange ? "ka" : "en"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

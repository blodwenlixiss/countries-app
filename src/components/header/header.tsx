import { getTranslation, locale } from "../utilities/util";
import styles from "./header.module.css";
import { NavLink, Link, useLocation, useParams } from "react-router-dom";

function Header() {
  const location = useLocation();
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  const navItmes = [
    { name: `${t("home")}`, path: `/${lang}` },
    { name: `${t("about")}`, path: "about" },
    { name: `${t("contact")}`, path: "contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <NavLink to="countries">
          <h1 className={styles["header-title"]}>Countries App</h1>
        </NavLink>
        <nav className={styles["header-nav"]}>
          <ul>
            {navItmes.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
            {locale.map((local) => (
              <li key={local} className={styles["nav-item"]}>
                <Link to={`/${local}${location.pathname.slice(3)}`}>
                  {local}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

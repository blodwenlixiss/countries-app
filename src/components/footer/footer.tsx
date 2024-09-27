import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span>© 2023 All rights reserved</span>
    </footer>
  );
};

Footer.displayName = "Footer";
export default Footer;

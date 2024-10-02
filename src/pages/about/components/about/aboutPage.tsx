import styles from "./aboutPage.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About Our Company</h1>
      <div className={styles.aboutContent}>
        <section className={styles.aboutSection}>
          <p>
            Welcome to our company! We are dedicated to providing excellent
            services and innovative solutions to our clients.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products and services that
            exceed our customers' expectations and contribute to their success.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2>Our Team</h2>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberInfo}>
              <h3 className={styles.teamMemberName}>John Doe</h3>
              <p className={styles.teamMemberRole}>CEO & Founder</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberInfo}>
              <h3 className={styles.teamMemberName}>Jane Smith</h3>
              <p className={styles.teamMemberRole}>CTO</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default AboutPage;

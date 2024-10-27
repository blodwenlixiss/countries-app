import { useParams } from "react-router-dom";
import styles from "./aboutPage.module.css";
import { getTranslation } from "@/components/utilities/util";

const AboutPage: React.FC = () => {
  const param = useParams();
  const lang = param.lang as string;
  const t = getTranslation(lang);

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>{t("aboutTitle")}</h1>
      <div className={styles.aboutContent}>
        <section className={styles.aboutSection}>
          <p>{t("aboutDescription")}</p>
        </section>
      </div>
    </div>
  );
};
export default AboutPage;

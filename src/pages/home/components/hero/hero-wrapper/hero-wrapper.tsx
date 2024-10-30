import { useParams } from "react-router-dom";
import styles from "./hero-wrapper.module.css";
import { getTranslation } from "@/components/utilities/util";
import { OTP } from "../../otp";

const HeroWrapper: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);
  return (
    <div className={styles["hero-wrapper"]}>
      <OTP />
      <h1 className={styles["hero-title"]}>{t("heroTitle")}</h1>
      <p className={styles["hero-description"]}>{t("heroTitleDescription")}</p>
    </div>
  );
};
HeroWrapper.displayName = "HeroWrapper";
export default HeroWrapper;

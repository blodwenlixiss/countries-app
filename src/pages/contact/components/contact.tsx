import { useParams } from "react-router-dom";
import styles from "./contact.module.css";
import { getTranslation } from "@/components/utilities/util";

const ContactComp: React.FC = () => {
  const logData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      logData(e);
    }
  };
  const param = useParams();
  const lang = param.lang as string;
  const t = getTranslation(lang);

  return (
    <section className={styles["content-section"]}>
      <form onSubmit={logData} onKeyDown={handleKeyDown}>
        <div className="nameInput">
          <label>{t("contactName")}</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="lastNameInput">
          <label>{t("contactSurname")}</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="emailInput">
          <label>Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="messageInput  ">
          <label>{t("contactMessage")}</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit">{t("contactSend")}</button>
      </form>
    </section>
  );
};
export default ContactComp;

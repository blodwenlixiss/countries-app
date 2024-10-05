import styles from "./contact.module.css";

const ContactComp: React.FC = () => {
  const logData = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logData(e.currentTarget);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      logData(e.currentTarget);
    }
  };

  return (
    <section className={styles["content-section"]}>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <div className="nameInput">
          <label>Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="lastNameInput">
          <label>Last Name:</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="emailInput">
          <label>Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="messageInput  ">
          <label>Message:</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default ContactComp;

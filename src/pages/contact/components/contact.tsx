import styles from "./contact.module.css";

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

  return (
    <section className={styles["content-section"]}>
      <form onSubmit={logData} onKeyDown={handleKeyDown}>
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

import styles from "./card.module.css";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles.card}>{children}</div>
    </div>
  );
};
Card.displayName = "Card";
export default Card;

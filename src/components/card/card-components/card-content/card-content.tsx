import styles from "./card-content.module.css";

const CardContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactNode => {
  return (
    <>
      <div className={styles["card-content"]}>
        <button className={styles["card-button"]}>&#8599;</button>
        {children}
      </div>
    </>
  );
};
CardContent.displayName = "CardContent";
export default CardContent;

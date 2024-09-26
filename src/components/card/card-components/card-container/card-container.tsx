import styles from "./card-container.module.css";

const CardContent: React.FC<{
  children: React.ReactNode;
  renderButton: React.ReactNode;
}> = ({ children, renderButton }): React.ReactNode => {
  return (
    <>
      <div className={styles.root}>
        {renderButton}
        {children}
      </div>
    </>
  );
};
CardContent.displayName = "CardContent";
export default CardContent;

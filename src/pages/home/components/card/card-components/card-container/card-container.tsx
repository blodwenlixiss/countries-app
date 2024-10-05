import { Link } from "react-router-dom";
import styles from "./card-container.module.css";

const CardContent: React.FC<{
  children: React.ReactNode;
  renderButton: React.ReactNode;
  id: string;
}> = ({ children, renderButton, id }): React.ReactNode => {
  return (
    <>
      <Link style={{ color: "black" }} to={id} className={styles.root}>
        {renderButton}
        {children}
      </Link>
    </>
  );
};
CardContent.displayName = "CardContent";
export default CardContent;

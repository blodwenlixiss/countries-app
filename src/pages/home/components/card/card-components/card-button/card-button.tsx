import React from "react";
import styles from "./card-button.module.css";
import { Link } from "react-router-dom";

const CardButton: React.FC<{ id: string; onChange: () => void }> = ({
  id,
  onChange,
}) => {
  return (
    <>
      <div className={styles["button-container"]}>
        <Link to={id} className={styles["card-button"]}>
          <span className={styles.btnSpan}>&#8599;</span>
        </Link>
      </div>
      <div className={styles["like-button-container"]}>
        <span>
          <button onClick={onChange} className={styles.likeBtn}>
            &#10084;
          </button>
        </span>
      </div>
    </>
  );
};
CardButton.displayName = "CardButton";
export default CardButton;

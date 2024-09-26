import React from "react";
import styles from "./card-button.module.css";

const CardButton: React.FC = () => {
  return <button className={styles["card-button"]}>&#8599;</button>;
};
CardButton.displayName = "CardButton";
export default CardButton;

import styles from "./card-image.module.css";

const CardImage: React.FC<{ flagSrc: string }> = ({ flagSrc }) => {
  return (
    <div className={styles["card-image"]}>
      <img src={flagSrc} />
    </div>
  );
};
CardImage.displayName = "CardImage";
export default CardImage;

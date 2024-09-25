import styles from "./card-image.module.css";

const CardImage: React.FC = (): React.ReactNode => {
  return (
    <div className={styles["card-image"]}>
      <img src="https://www.countryflags.com/wp-content/uploads/georgia-flag-jpg-xl.jpg" />
    </div>
  );
};
CardImage.displayName = "CardImage";
export default CardImage;

import styles from "./card-info.module.css";

const CardInfo: React.FC<{
  countryTitle: string;
  population: string;
}> = ({ countryTitle, population }) => {
  return (
    <article className={styles["card-info"]}>
      <h2>Country:{countryTitle}</h2>
      <h6>
        Population: <span> {population}</span>
      </h6>
    </article>
  );
};
CardInfo.displayName = "CardInfo";
export default CardInfo;

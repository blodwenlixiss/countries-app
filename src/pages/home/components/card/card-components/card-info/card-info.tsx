import styles from "./card-info.module.css";

const CardInfo: React.FC<{
  countryTitle: string;
  likeCount: number;
  population: string;
}> = ({ countryTitle, population, likeCount }) => {
  return (
    <article className={styles["card-info"]}>
      <h2>Country:{countryTitle}</h2>
      <p style={{ fontWeight: "bold" }}>Likes: {likeCount}</p>
      <br />
      <h6>
        Population: <span> {population}</span>
      </h6>
    </article>
  );
};
CardInfo.displayName = "CardInfo";
export default CardInfo;

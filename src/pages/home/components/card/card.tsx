import styles from "./card.module.css";
import CardContent from "./card-components/card-container";
import CardButton from "./card-components/card-button";
import CardInfo from "./card-components/card-info";
import CardFlag from "./card-components/card-image";
import { country } from "../static/country-data";
import { useState } from "react";

const Card: React.FC = () => {
  const [cardArticle, setCardArticle] = useState<
    {
      title: string;
      population: string;
      flag: string;
      id: string;
      like: number;
    }[]
  >(country);

  const handleLikeCount = (id: string) => {
    const newCardArticle = cardArticle.map((article) =>
      article.id === id ? { ...article, like: article.like + 1 } : article
    );

    setCardArticle(newCardArticle);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const sortDirection = e.target.value;
    const newCardArticle = [...cardArticle];

    if (sortDirection == "ascending") {
      newCardArticle.sort((a, b) => a.like - b.like);
    } else if (sortDirection == "descending") {
      newCardArticle.sort((a, b) => b.like - a.like);
    }

    setCardArticle(newCardArticle);
  };

  return (
    <div className={styles["card-container"]}>
      <div className={styles.selection}>
        <select name="filter" onChange={handleSort}>
          <option value="default">-- Please Select --</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending </option>
        </select>
      </div>
      <div style={{ display: "flex", gap: " 40px", lineHeight: "1rem" }}>
        {cardArticle.map((artcile) => (
          <div key={artcile.id} className={styles.card}>
            <CardContent
              renderButton={
                <CardButton
                  onChange={() => handleLikeCount(artcile.id)}
                  id={artcile.id}
                />
              }
            >
              <CardInfo
                likeCount={artcile.like}
                countryTitle={artcile.title}
                population={artcile.population}
              />
              <CardFlag flagSrc={artcile.flag} />
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
};
Card.displayName = "Card";
export default Card;

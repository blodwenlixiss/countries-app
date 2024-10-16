import styles from "./card.module.css";
import CardContent from "./card-components/card-container";
import CardButton from "./card-components/card-button";
import CardInfo from "./card-components/card-info";
import CardFlag from "./card-components/card-image";
import CardSort from "./card-components/card-sort/cardSort";
import CardCreate from "./card-components/card-create/cardCreate";
import { country } from "../static/country-data";
import { useReducer } from "react";
import { articleReducer } from "./card-reducer/reducer";
import { CardDelete } from "./card-components/card-button/deletebtn/cardDelete";

const Card: React.FC = () => {
  const [state, dispatch] = useReducer(articleReducer, {
    sortDirection: null,
    cardArticle: [...country],
  });

  const handleLikeCount = (id: string) => {
    return dispatch({ type: "likes", payload: { id } });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    dispatch({ type: "sort", payload: { selectedValue } });
  };

  const handleCreateArticle = (newArticleObj: {
    title: string;
    population: string;
  }) => {
    dispatch({ type: "create", payload: { newArticleObj } });
  };

  const handleDeleteArticle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    dispatch({ type: "delete", payload: { id } });
  };
  const handleRecoverArticle = (id: string) => {
    dispatch({ type: "recover", payload: { id } });
  };

  return (
    <div className={styles["card-container"]}>
      <CardSort onSort={handleSort} />
      <div style={{ display: "flex", gap: " 40px", lineHeight: "1rem" }}>
        {state.cardArticle.map((artcile) => (
          <div
            key={artcile.id}
            className={`${!artcile.isDeleted ? styles.card : styles.isDeleted}`}
          >
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
              {!artcile.isDeleted ? (
                <CardDelete
                  isDelete={false}
                  onRecover={() => handleRecoverArticle(artcile.id)}
                  onDelete={(e) => handleDeleteArticle(e, artcile.id)}
                />
              ) : (
                <CardDelete
                  isDelete={true}
                  onRecover={() => handleRecoverArticle(artcile.id)}
                  onDelete={(e) => handleDeleteArticle(e, artcile.id)}
                />
              )}
            </CardContent>
          </div>
        ))}
      </div>
      <CardCreate onCreate={handleCreateArticle} />
    </div>
  );
};
Card.displayName = "Card";
export default Card;

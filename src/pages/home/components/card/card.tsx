import styles from "./card.module.css";
import CardContent from "./card-components/card-container";
import CardButton from "./card-components/card-button";
import CardInfo from "./card-components/card-info";
import CardFlag from "./card-components/card-image";
import CardSort from "./card-components/card-sort/cardSort";
import CardCreate from "./card-components/card-create/cardCreate";
import { useEffect, useReducer } from "react";
import { articleReducer } from "./card-reducer/reducer";
import { CardDelete } from "./card-components/card-button/deletebtn/cardDelete";
import { useParams } from "react-router-dom";
import axios from "axios";

const Card: React.FC = () => {
  const params = useParams();
  const lang = params.lang || "en";

  const initialState = {
    sortDirection: null,
    cardArticle: [],
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  useEffect(() => {
    const endpoint = `http://localhost:3000/countries`;
    axios
      .get(endpoint)
      .then((res) => {
        dispatch({
          type: "setArticles",
          payload: { articles: res.data[lang] },
        });
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, [lang]);

  const handleLikeCount = (id: string) => {
    const likedArticle = state.cardArticle.find((article) => article.id === id);
    if (!likedArticle) return;

    dispatch({ type: "likes", payload: { id } });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    dispatch({ type: "sort", payload: { selectedValue } });
  };

  const handleCreateArticle = (newArticleObj: {
    title: string;
    population: string;
    flag: string;
    id: string;
    like: number;
    isDeleted: boolean;
  }) => {
    axios
      .post(`http://localhost:3000/countries`, newArticleObj)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "create",
          payload: {
            newArticleObj: {
              ...response.data[lang],
              id: (Number(state.cardArticle.at(-1)?.id) + 1).toString(),
              like: 0,
              isDeleted: false,
            },
          },
        });
      })
      .catch((error) => {
        console.error("Error creating article:", error);
      });
  };

  const handleDeleteArticle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3000/countries`)
      .then(() => {
        dispatch({ type: "delete", payload: { id } });
      })
      .catch((error) => {
        console.error("Error deleting article:", error);
      });
  };

  const handleRecoverArticle = (id: string) => {
    dispatch({ type: "recover", payload: { id } });
  };

  return (
    <div className={styles["card-container"]}>
      <CardSort onSort={handleSort} />
      <div style={{ display: "flex", gap: "40px", lineHeight: "1rem" }}>
        {state.cardArticle.map(
          ({
            id,
            isDeleted,
            like,
            title,
            population,
            flag,
          }: {
            id: string;
            isDeleted: boolean;
            like: number;
            title: string;
            population: string;
            flag: string;
          }) => (
            <div
              key={id}
              className={`${!isDeleted ? styles.card : styles.isDeleted}`}
            >
              <CardContent
                renderButton={
                  <CardButton onChange={() => handleLikeCount(id)} id={id} />
                }
              >
                <CardInfo
                  likeCount={like}
                  countryTitle={title}
                  population={population}
                />
                <CardFlag flagSrc={flag} />
                <CardDelete
                  isDelete={isDeleted}
                  onRecover={() => handleRecoverArticle(id)}
                  onDelete={(e) => handleDeleteArticle(e, id)}
                />
              </CardContent>
            </div>
          ),
        )}
      </div>
      <CardCreate onCreate={handleCreateArticle} />
    </div>
  );
};

Card.displayName = "Card";
export default Card;

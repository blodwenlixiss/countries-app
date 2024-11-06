import styles from "./card.module.css";
import CardContent from "./card-components/card-container";
import CardButton from "./card-components/card-button";
import CardInfo from "./card-components/card-info";
import CardFlag from "./card-components/card-image";
import CardSort from "./card-components/card-sort/cardSort";
import CardCreate from "./card-components/card-create/cardCreate";
import { useReducer } from "react";
import { articleReducer } from "./card-reducer/reducer";
import { CardDelete } from "./card-components/card-button/deletebtn/cardDelete";
// import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCoutnries, updateCountriesLike } from "@/api/countires";
import axios from "axios";

const Card: React.FC = () => {
  // const params = useParams();
  // const lang = params.lang || "en";

  const initialState = {
    sortDirection: null,
    cardArticle: [],
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["countries-list"],
    queryFn: getCoutnries,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  // const handleLikeCount = (id: string) => {
  //   const likedArticle = state.cardArticle.find((article) => article.id === id);
  //   if (!likedArticle) return;

  //   dispatch({ type: "likes", payload: { id } });
  // };
  const { mutate } = useMutation({ mutationFn: updateCountriesLike });

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    dispatch({ type: "sort", payload: { selectedValue } });
  };

  const handleCreateArticle = async (newArticleObj: {
    title: string;
    population: string;
    flag: string;
    id: string;
    like: number;
    isDeleted: boolean;
  }) => {
    const response = await axios.post(
      `http://localhost:3000/countries`,
      newArticleObj,
    );
    try {
      dispatch({
        type: "create",
        payload: {
          newArticleObj: {
            ...response.data,
            id: (Number(state.cardArticle.at(-1)?.id) + 1).toString(),
            like: 0,
            isDeleted: false,
          },
        },
      });
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  const handleDeleteArticle = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    await axios.delete(`http://localhost:3000/countries/${id}`);
    try {
      dispatch({ type: "delete", payload: { id } });
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleRecoverArticle = (id: string) => {
    dispatch({ type: "recover", payload: { id } });
  };

  return (
    <div className={styles["card-container"]}>
      {isLoading ? "Loading..." : null}
      {isError ? "Error" : null}
      <CardSort onSort={handleSort} />
      <div style={{ display: "flex", gap: "40px", lineHeight: "1rem" }}>
        {data?.map(
          ({
            id,
            isDeleted,
            like,
            titleEn,
            population,
            flag,
          }: {
            id: string;
            isDeleted: boolean;
            like: number;
            titleEn: string;
            population: string;
            flag: string;
          }) => (
            <div
              key={id}
              className={`${!isDeleted ? styles.card : styles.isDeleted}`}
            >
              <CardContent
                renderButton={
                  <CardButton
                    onChange={() => {
                      mutate(
                        { id: id, payload: { like: (like += 1) } },
                        {
                          onSuccess: () => {
                            refetch();
                          },
                        },
                      );
                    }}
                    id={""}
                  />
                }
              >
                <CardInfo
                  likeCount={like}
                  countryTitle={titleEn}
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

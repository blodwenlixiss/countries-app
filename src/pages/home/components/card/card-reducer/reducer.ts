type CardArticleType = {
  title: string;
  population: string;
  flag: string;
  id: string;
  like: number;
  isDeleted: boolean;
}[];

type ActionType = {
  type: string;
  payload: any;
};

const deletedItemIndex: { [key: string]: number } = {};
let index: number = 0;
export const articleReducer = (
  state: { sortDirection: string | null; cardArticle: CardArticleType },
  action: ActionType
) => {
  switch (action.type) {
    case "likes":
      return {
        ...state,
        cardArticle: state.cardArticle.map((article) =>
          article.id === action.payload.id
            ? { ...article, like: article.like + 1 }
            : article
        ),
      };

    case "sort": {
      const sortDirection = action.payload.selectedValue;
      const articleCopy = [...state.cardArticle];
      const deletedCardArticle = articleCopy.filter(
        (article) => article.isDeleted === true
      );
      const currentCardArticle = articleCopy.filter(
        (article) => article.isDeleted === false
      );

      let sortedArticles;
      if (sortDirection === "ascending") {
        sortedArticles = [
          ...currentCardArticle.sort((a, b) => a.like - b.like),
          ...deletedCardArticle,
        ];
      } else if (sortDirection === "descending") {
        sortedArticles = [
          ...currentCardArticle.sort((a, b) => b.like - a.like),
          ...deletedCardArticle,
        ];
      } else {
        sortedArticles = articleCopy;
      }

      return {
        ...state,
        sortDirection,
        cardArticle: sortedArticles,
      };
    }

    case "create": {
      const articleCopy = [...state.cardArticle];
      const deletedCardArticle = articleCopy.filter(
        (article) => article.isDeleted === true
      );
      const currentCardArticle = articleCopy.filter(
        (article) => article.isDeleted === false
      );

      return {
        ...state,
        cardArticle: [
          ...currentCardArticle,
          {
            ...action.payload.newArticleObj,
            flag: "rame",
            id: (Number(state.cardArticle.at(-1)?.id) + 1).toString(),
            like: 0,
            isDeleted: false,
          },
          ...deletedCardArticle,
        ],
      };
    }

    case "delete": {
      const deletedCardArticle = state.cardArticle.find(
        (article) => article.id === action.payload.id
      );

      if (deletedCardArticle) {
        deletedItemIndex[deletedCardArticle.title] =
          parseInt(action.payload.id, 10) - 1;
      }

      const updatedArticles = state.cardArticle.filter(
        (article) => article.id !== action.payload.id
      );

      return {
        ...state,
        cardArticle: [
          ...updatedArticles,
          { ...deletedCardArticle, isDeleted: true },
        ],
      };
    }

    case "recover": {
      const articleToMove = state.cardArticle.find(
        (article) => article.id === action.payload.id
      );

      for (const [key] of Object.entries(deletedItemIndex)) {
        if (key === articleToMove?.title) {
          index = deletedItemIndex[key];
          break;
        }
      }

      const updatedArticles = state.cardArticle.filter(
        (article) => article.id !== action.payload.id
      );

      if (index !== undefined && articleToMove) {
        updatedArticles.splice(index, 0, {
          ...articleToMove,
          isDeleted: false,
        });
      }

      return {
        ...state,
        cardArticle: updatedArticles,
      };
    }

    default:
      return state;
  }
};

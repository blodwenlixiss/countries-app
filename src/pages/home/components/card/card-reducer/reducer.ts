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
  cardArticle: CardArticleType,
  action: ActionType
) => {
  if (action.type == "likes") {
    const newCardArticle = cardArticle.map((article) =>
      article.id === action.payload.id
        ? { ...article, like: article.like + 1 }
        : article
    );
    return newCardArticle;
  }
  if (action.type == "sort") {
    const sortDirection = action.payload.selectedValue;
    const articleCopy = [...cardArticle];
    const deletedCardArticle = articleCopy.filter(
      (article) => article.isDeleted == true
    );
    const currentCardArticle = articleCopy.filter(
      (article) => article.isDeleted == false
    );

    if (sortDirection == "ascending") {
      return [
        ...currentCardArticle.sort((a, b) => a.like - b.like),
        ...deletedCardArticle,
      ];
    } else if (sortDirection == "descending") {
      return [
        ...currentCardArticle.sort((a, b) => b.like - a.like),
        ...deletedCardArticle,
      ];
    }

    return articleCopy;
  }
  if (action.type == "create") {
    const newArticle: any = {};
    const formData = new FormData(action.payload.newArticleObj);
    for (const [key, value] of formData) {
      newArticle[key] = value;
    }

    return [
      ...cardArticle,
      {
        ...newArticle,
        flag: "rame",
        id: (Number(cardArticle.at(-1)?.id) + 1).toString(),
        like: 0,
      },
    ];
  }

  if (action.type == "delete") {
    const deletedCardArticle = cardArticle.find(
      (article) => article.id === action.payload.id
    );

    if (deletedCardArticle) {
      deletedItemIndex[deletedCardArticle.title] = action.payload.id - 1;
    }
    const removeArticle = cardArticle.filter(
      (article) => article.id !== action.payload.id
    );
    return [...removeArticle, { ...deletedCardArticle, isDeleted: true }];
  }

  if (action.type == "recover") {
    const articleToMove = cardArticle.find(
      (article) => article.id === action.payload.id
    );

    for (const [key] of Object.entries(deletedItemIndex)) {
      if (key == articleToMove?.title) {
        index = deletedItemIndex[key];
        break;
      }
    }
    const restoreArticle = cardArticle.filter(
      (article) => article.id !== action.payload.id
    );
    if (index !== undefined && articleToMove) {
      // Insert the recovered article at the correct index
      restoreArticle.splice(index, 0, {
        ...articleToMove,
        isDeleted: false,
      });
    }
    return restoreArticle;
  }

  return cardArticle;
};

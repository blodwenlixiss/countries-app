import { getTranslation } from "@/components/utilities/util";
import { useParams } from "react-router-dom";

export const CardDelete: React.FC<{
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDelete: boolean;
  onRecover: () => void;
}> = ({ isDelete, onDelete, onRecover }) => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);
  if (isDelete) {
    return <button onClick={onRecover}>{t("recoverCard")}</button>;
  }

  return <button onClick={onDelete}>{t("deleteCard")}</button>;
};

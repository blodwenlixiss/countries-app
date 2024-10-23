import { getTranslation } from "@/components/utilities/util";
import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

const CardCreate: React.FC<{
  onCreate(newArticleObj: {
    title: string;
    population: string;
    flag: any;
  }): void;
}> = ({ onCreate }) => {
  const [populationErrorMsg, setPopulationErrorMsg] = useState("");
  const [titleErrorMsg, setTitleErrorMsg] = useState("");
  const [title, setTitle] = useState("");
  const [population, setPopulation] = useState("");
  const [flag, setFlag] = useState();
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  const handleCreateCard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate({ title, population, flag });
  };
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const data = new FileReader();
    console.log(data);
    data.addEventListener("load", () => {
      if (data.result) {
        setFlag(data.result);
      }
    });
    if (e.target.files) {
      data.readAsDataURL(e.target.files[0]);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 9) {
      return setTitleErrorMsg("Title must be less than 9 characters");
    } else {
      setTitleErrorMsg("");
    }
    setTitle(value);
  };

  const handlePopulationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 9) {
      return setPopulationErrorMsg("population must be less than 9 characters");
    } else {
      setPopulationErrorMsg("");
    }
    setPopulation(value);
  };

  return (
    <form
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        maxWidth: "40%",
        padding: "10px",
        gap: "10px",
      }}
      onSubmit={handleCreateCard}
    >
      <progress className="progress" value={0.2} />
      <input
        onChange={handleTitleChange}
        value={title}
        name="title"
        placeholder={`${t("createTitle")}`}
        type="text"
      />
      {titleErrorMsg && (
        <span
          style={{
            color: "red",
            fontSize: "13px",
            textAlign: "center",
            fontWeight: "bold",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          }}
        >
          {titleErrorMsg}
        </span>
      )}
      <input
        value={population}
        onChange={handlePopulationChange}
        name="population"
        placeholder={`${t("createPopulation")}`}
        type="number"
      />
      {populationErrorMsg && (
        <span
          style={{
            color: "red",
            fontSize: "13px",
            textAlign: "center",
            fontWeight: "bold",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          }}
        >
          {populationErrorMsg}
        </span>
      )}
      <label>{t("contactImage")}</label>
      <input
        type="file"
        name="image"
        id="image"
        onChange={handleImageUpload}
        accept=".jpg, .png"
      />
      <button type="submit">{t("create")}</button>
    </form>
  );
};
export default CardCreate;

import { ChangeEvent, FormEvent, useState } from "react";

const CardCreate: React.FC<{
  onCreate(newArticleObj: { title: string; population: string }): void;
}> = ({ onCreate }) => {
  const [populationErrorMsg, setPopulationErrorMsg] = useState("");
  const [titleErrorMsg, setTitleErrorMsg] = useState("");
  const [title, setTitle] = useState("");
  const [population, setPopulation] = useState("");

  const handleCreateCard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate({ title, population });
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
      {" "}
      <progress className="progress" value={0.2} />
      <input
        onChange={handleTitleChange}
        value={title}
        name="title"
        placeholder="title"
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
        placeholder="population"
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
      <button type="submit">Create</button>
    </form>
  );
};
export default CardCreate;

const CardCreate: React.FC<{
  onCreate: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ onCreate }) => {
  return (
    <form
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        maxWidth: "30%",
        gap: "10px",
      }}
      onSubmit={onCreate}
    >
      <input name="title" placeholder="title" type="text" />
      <input name="population" placeholder="population" type="number" />
      <button type="submit">Create</button>
    </form>
  );
};
export default CardCreate;

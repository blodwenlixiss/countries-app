import { useParams } from "react-router-dom";
import MainSinglePage from "../../components/singlePage/singlePage";
import { country } from "../../components/static/country-data";

const SinglePage = () => {
  const params = useParams();
  const findPage = country.find((country) => country.id == params.id);

  if (!findPage) {
    return <div style={{ marginTop: "200px" }}>Page was not found</div>;
  }

  return (
    <MainSinglePage
      flag={findPage.flag}
      title={findPage.title}
      population={findPage.population}
    />
  );
};
export default SinglePage;

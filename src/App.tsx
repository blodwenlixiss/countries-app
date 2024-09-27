import "./App.css";
import Hero from "comp/hero";
import HeroWrapper from "comp/hero/hero-wrapper";
import Card from "comp/card";
import CardContent from "comp/card/card-components/card-container";
import CardInfo from "comp/card/card-components/card-info";
import CardFlag from "comp/card/card-components/card-image";
import CardButton from "comp/card/card-components/card-button";
import Layout from "comp/layout";

const country = {
  title: "Georgia",
  population: "3,729,861",
  flag: "https://www.countryflags.com/wp-content/uploads/georgia-flag-jpg-xl.jpg",
};

function App() {
  return (
    <>
      <Layout>
        <Hero>
          <HeroWrapper />
          <Card>
            <CardContent renderButton={<CardButton />}>
              <CardInfo
                countryTitle={country.title}
                population={country.population}
              />
              <CardFlag flagSrc={country.flag} />
            </CardContent>
          </Card>
        </Hero>
      </Layout>
    </>
  );
}

export default App;

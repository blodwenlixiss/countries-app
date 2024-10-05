import CardButton from "../../components/card/card-components/card-button/card-button";
import HeroWrapper from "../../components/hero/hero-wrapper/hero-wrapper";
import { lazy } from "react";
import { country } from "../../components/static/country-data";
import Card from "../../components/card";
import Hero from "../../components/hero/hero";
const CardContent = lazy(
  () =>
    import(
      "../../components/card/card-components/card-container/card-container"
    )
);
const CardInfo = lazy(
  () => import("../../components/card/card-components/card-info/card-info")
);

const CardFlag = lazy(
  () => import("../../components/card/card-components/card-image")
);

const HomePage = () => {
  return (
    <>
      <Hero>
        <HeroWrapper />
        <Card>
          <CardContent
            id={country[0].id.toString()}
            renderButton={<CardButton />}
          >
            <CardInfo
              countryTitle={country[0].title}
              population={country[0].population}
            />
            <CardFlag flagSrc={country[0].flag} />
          </CardContent>
        </Card>
        <Card>
          <CardContent
            id={country[1].id.toString()}
            renderButton={<CardButton />}
          >
            <CardInfo
              countryTitle={country[1].title}
              population={country[1].population}
            />
            <CardFlag flagSrc={country[1].flag} />
          </CardContent>
        </Card>
        <Card>
          <CardContent
            id={country[2].id.toString()}
            renderButton={<CardButton />}
          >
            <CardInfo
              countryTitle={country[2].title}
              population={country[2].population}
            />
            <CardFlag flagSrc={country[2].flag} />
          </CardContent>
        </Card>
      </Hero>
    </>
  );
};
export default HomePage;

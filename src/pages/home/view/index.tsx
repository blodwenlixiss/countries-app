import CardButton from "../components/card/card-components/card-button/card-button";
import HeroWrapper from "../components/hero/hero-wrapper/hero-wrapper";
import { lazy } from "react";

const country = {
  title: "Georgia",
  population: "3,729,861",
  flag: "https://www.countryflags.com/wp-content/uploads/georgia-flag-jpg-xl.jpg",
};

const LazyHero = lazy(() => import("../components/hero/hero"));
const LazyCard = lazy(() => import("../components/card/card"));
const LazyCardContent = lazy(
  () =>
    import("../components/card/card-components/card-container/card-container")
);
const LazyCardInfo = lazy(
  () => import("../components/card/card-components/card-info/card-info")
);
const LazyCardFlag = lazy(
  () => import("../components/card/card-components/card-image")
);

const HomePage = () => {
  return (
    <>
      <LazyHero>
        <HeroWrapper />
        <LazyCard>
          <LazyCardContent renderButton={<CardButton />}>
            <LazyCardInfo
              countryTitle={country.title}
              population={country.population}
            />
            <LazyCardFlag flagSrc={country.flag} />
          </LazyCardContent>
        </LazyCard>
      </LazyHero>
    </>
  );
};
export default HomePage;

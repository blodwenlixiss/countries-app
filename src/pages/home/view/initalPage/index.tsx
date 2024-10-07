import HeroWrapper from "../../components/hero/hero-wrapper/hero-wrapper";
import { lazy } from "react";
import Hero from "../../components/hero/hero";
const Card = lazy(() => import("../../components/card"));

const HomePage = () => {
  return (
    <>
      <Hero>
        <HeroWrapper />
        <Card />
      </Hero>
    </>
  );
};
export default HomePage;

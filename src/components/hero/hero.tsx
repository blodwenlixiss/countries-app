import styles from "./hero.module.css";
import Card from "../card/card";
import CardHeader from "../card/card-components/card-content/card-content";
import CardImage from "../card/card-components/card-image/card-image";

const Hero: React.FC = (): React.ReactNode => {
  const country = {
    name: "Georgia",
    population: 3720400,
    capital: "Tbilisi",
  };

  return (
    <section className={styles.hero}>
      <div className={styles["hero-wrapper"]}>
        <h1 className={styles["hero-title"]}>Countries App</h1>
        <p className={styles["hero-description"]}>
          Discover fascinating information about countries worldwide, including
          their geography, demographics, and cultural heritage. Our app provides
          an interactive platform to explore and learn about diverse nations
          across the globe.
        </p>
      </div>
      <Card>
        <CardHeader>
          <h2 className="card-title">{country.name}</h2>
          <h6 className="population">
            <strong>Population:</strong> <span>{country.population}</span>
          </h6>
          <h6 className="capital">
            <strong>Capital:</strong> <span>{country.capital}</span>
          </h6>
        </CardHeader>
        <CardImage />
      </Card>
    </section>
  );
};
Hero.displayName = "Hero";

export default Hero;

import fs from "fs/promises";
import axios from "axios";

const fetchCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countries = response.data;

    const processedCountries = countries.map((country) => ({
      name: country.name.common,
      alpha2Code: country.cca2,
      alpha3Code: country.cca3,
      region: country.region,
      subregion: country.subregion,
      population: country.population,
      area: country.area,
      languages: country.languages,
      currencies: country.currencies,
    }));

    const countryInfo = {
      countries: processedCountries,
    };

    await fs.writeFile("database.json", JSON.stringify(countryInfo, null, 2));
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

fetchCountries();

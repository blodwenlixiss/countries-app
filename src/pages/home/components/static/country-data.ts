export const country = {
  en: [
    {
      title: "Georgia",
      population: "3,729,861",
      flag: "https://www.countryflags.com/wp-content/uploads/georgia-flag-jpg-xl.jpg",
      id: "1",
      like: 0,
      isDeleted: false,
    },
    {
      title: "United Kingdom",
      population: "68,278,000",
      flag: "https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg",
      id: "2",
      like: 0,
      isDeleted: false,
    },
    {
      title: "Korea",
      population: "52,081,799",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png",
      id: "3",
      like: 0,
      isDeleted: false,
    },
  ],
  ka: [
    {
      title: "საქართველო",
      population: "3,729,861",
      flag: "https://www.countryflags.com/wp-content/uploads/georgia-flag-jpg-xl.jpg",
      id: "1",
      like: 0,
      isDeleted: false,
    },
    {
      title: "დიდი ბრიტანეთი",
      population: "68,278,000",
      flag: "https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg",
      id: "2",
      like: 0,
      isDeleted: false,
    },
    {
      title: "კორეა",
      population: "52,081,799",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png",
      id: "3",
      like: 0,
      isDeleted: false,
    },
  ],
};
export const cards = Object.keys(country);
export const defaultLocationCard = "en";

export function getTranslationCard(lang: string) {
  const selectedNamespace = country[lang as keyof typeof country];

  return (key: keyof (typeof country)["ka"]) => {
    return selectedNamespace[key];
  };
}

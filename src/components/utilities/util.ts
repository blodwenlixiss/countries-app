const appData = {
  ka: {
    heroTitle: "ქვეყნების აპლიკაცია",
    heroTitleDescription:
      "აღმოაჩინეთ მომხიბლავი ინფორმაცია მსოფლიოს ქვეყნების შესახებ, მათ შორის მათი გეოგრაფიის, დემოგრაფიისა და კულტურული მემკვიდრეობის შესახებ. ჩვენი აპლიკაცია უზრუნველყოფს ინტერაქტიულ პლატფორმას მსოფლიოს სხვადასხვა ქვეყნების შესასწავლად და გასაცნობად.",
    home: "მთავარი",
    createTitle: "ქვეყნის სახელი",
    createPopulation: "მოსახლეობა",
    create: "შექმნა",
    about: "ჩვენს შესახებ",
    aboutTitle: "ინფორმაცია ჩვენს შესახებ",
    aboutDescription:
      "კეთილი იყოს თქვენი მობრძანება ჩვენს კომპანიაში! ჩვენ მზად ვართ მივაწოდოთ შესანიშნავი მომსახურება და ინოვაციური გადაწყვეტილებები ჩვენს კლიენტებს.",
    contact: "კონტაქტი",
    contactName: "სახელი",
    contactSurname: "გვარი",
    contactMessage: "წერილი",
    contactImage: "ფოტო",
    contactSend: "გაგზავნა",
    recoverCard: "აღდგენა",
    deleteCard: "წაშლა",
  },
  en: {
    heroTitle: "Countries App",
    heroTitleDescription:
      "Discover fascinating information about countries worldwide, including their geography, demographics, and cultural heritage. Our app provides an interactive platform to explore and learn about diverse nations across the globe",
    home: "Home",
    createTitle: "Title",
    createPopulation: "Population",
    create: "Create",
    about: "About",
    aboutTitle: "About Us",
    aboutDescription:
      "Welcome to our company! We are dedicated to providing excellent services and innovative solutions to our clients.",
    contact: "Contact",
    contactName: "Name",
    contactSurname: "Surname",
    contactMessage: "Message",
    contactImage: "Image",
    contactSend: "Send",
    recoverCard: "Recover",
    deleteCard: "Delete",
  },
};

export const locale = Object.keys(appData);
export const defaultLocation = "en";

export function getTranslation(lang: string) {
  const selectedNamespace = appData[lang as keyof typeof appData];

  return (key: keyof (typeof appData)["ka"]) => {
    return selectedNamespace[key];
  };
}

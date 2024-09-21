import "./App.css";

function App() {
  const country = {
    name: "Georgia",
    population: 3720400,
    capital: "Tbilisi",
    image: "https://cdn.countryflags.com/thumbs/georgia/flag-round-250.png",
  };

  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <h1 className="header-title">
            <a href="/">Countries App</a>
          </h1>
          <nav className="header-nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/countries">Countries</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-wrapper">
            <h1 className="hero-title">Countries App</h1>
            <p className="hero-description">
              Discover fascinating information about countries worldwide,
              including their geography, demographics, and cultural heritage.
              Our app provides an interactive platform to explore and learn
              about diverse nations across the globe.
            </p>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-image">
                <img src={country.image} alt={country.name} />
              </div>
              <div className="card-content">
                <h2 className="card-title">{country.name}</h2>
                <h6 className="population">Population: {country.population}</h6>
                <h6 className="capital">Capital: {country.capital}</h6>
                <button className="card-button">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

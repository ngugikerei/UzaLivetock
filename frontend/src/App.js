import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">UZALIVESTOCK</a>
      </header>

      <main>
        <h1> Newly Added</h1>

        <div className="animals">
          {data.animals.map((animal) => (
            <div className="animal" key={animal.slug}>
              <img src={animal.image} alt={animal.name} />

              <div className="animal-info">
                <p>{animal.name}</p>

                <p>{animal.breed}</p>

                <p>{animal.County}</p>

                <p>
                  <strong>Ksh {animal.ListPrice}</strong>
                </p>
                <button>Know More</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

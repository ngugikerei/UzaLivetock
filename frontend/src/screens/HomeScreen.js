import { Link } from 'react-router-dom';
//import data from '../data';
import { useEffect, useState } from 'react';
import axios from 'axios';

function HomeScreen() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/animals');
      setAnimals(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {' '}
      <h1> Newly Added</h1>
      <div className="animals">
        {animals.map((animal) => (
          <div className="animal" key={animal.slug}>
            <Link to={`/animal/${animal.slug}`}>
              <img src={animal.image} alt={animal.name} />
            </Link>

            <div className="animal-info">
              <Link to={`/animal/${animal.slug}`}>
                <p>{animal.name}</p>
              </Link>

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
    </div>
  );
}

export default HomeScreen;

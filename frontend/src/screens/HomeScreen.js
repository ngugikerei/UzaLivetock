import { Link } from 'react-router-dom';
import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };

    case 'FETCH_SUCCESS':
      return { ...state, animals: action.payload, loading: false };

    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, animals }, dispatch] = useReducer(reducer, {
    animals: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });

      try {
        const result = await axios.get('/api/animals');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }

      //setAnimals(result.data);
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

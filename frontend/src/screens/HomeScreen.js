import { Link } from 'react-router-dom';
import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Animal from '../components/Animal';

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
        <Row>
          {animals.map((animal) => (
            <Col key={animal.slug} sm={6} md={3} lg={4} className="mb-3">
              <Animal animal={animal}></Animal>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default HomeScreen;

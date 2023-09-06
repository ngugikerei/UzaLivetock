import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Animal(props) {
  const { animal } = props;
  return (
    <Card className="animal">
      <Link to={`/animal/${animal.slug}`}>
        <img src={animal.image} className="card-img-top" alt={animal.name} />
      </Link>

      <Card.Body>
        <Link to={`/animal/${animal.slug}`}>
          <Card.Title>{animal.name}</Card.Title>
        </Link>

        <Card.Text>County: {animal.County}</Card.Text>

        <Card.Text>Ksh {animal.ListPrice}</Card.Text>

        <Card.Text> Open to Offers: {animal.OpenToOffers}</Card.Text>
        <Button>Know More</Button>
      </Card.Body>
    </Card>
  );
}

export default Animal;

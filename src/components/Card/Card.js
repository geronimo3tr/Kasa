import { Link } from "react-router-dom";
function Card(props) {
  const accommodation = props.logement;
  console.log(accommodation);
  return (
    <article className="card">
      <Link to={`/accommodation/${accommodation.id}`}>
        <img className="Card-cover" src={accommodation.cover} id={accommodation.id} alt="logement" />
        <h3>{accommodation.title}</h3>
      </Link>
    </article>
  );
}

export default Card;

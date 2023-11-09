function Card(props) {
  const accomodation = props.logement;
  return (
    <article className="card">
      <img className="Card-cover" src={accomodation.cover} id={accomodation.id} alt="logement" />

      <h3>{accomodation.title}</h3>
    </article>
  );
}

export default Card;

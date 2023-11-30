function Rating(props) {
  const rating = Number(props.rating);
  const maxStars = 5;

  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(<i className={`fa-solid fa-star ${i <= rating ? "active" : ""}`} />);
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;

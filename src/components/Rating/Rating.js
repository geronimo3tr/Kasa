function Rating(props) {
  const rating = props.rating;
  const maxStars = 5;
  const stars = Array.from({ length: maxStars }, (_, stars) => (
    <i key={stars} className={`fa-solid fa-star${stars < rating ? " active" : ""}`} />
  ));

  return <div className="rating">{stars}</div>;
}

export default Rating;

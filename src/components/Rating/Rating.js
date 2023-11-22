function Rating(props) {
  const rating = props.rating;
  const maxStar = 5;
  const stars = Array.from({ length: maxStar }, (_, index) => (
    <i key={index} className={`fa-solid fa-star${index === 0 ? (rating > 0 ? " active" : "") : index < rating ? " active" : ""}`} />
  ));

  return <div className="rating">{stars}</div>;
}

export default Rating;

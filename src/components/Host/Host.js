function Host({ name, picture }) {
  const [firstName, lastName] = name.split(" ");

  return (
    <>
      <div className="host-container">
        <img className="host-picture" src={picture} alt={`Portrait of ${name}`} />
        <div className="host-fullname">
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>
      </div>
    </>
  );
}

export default Host;

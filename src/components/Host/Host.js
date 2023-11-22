function Host(host) {
  const name = host.name;
  const picture = host.picture;

  return (
    <>
      <div className="host-container">
        <img className="host-picture" src={picture} alt="host-picture"></img>
        <span>{name}</span>
      </div>
    </>
  );
}

export default Host;

import data from "../data.json";
import Card from "../components/Card.js";

function Home() {
  const logements = data.map((logement) => <Card logement={logement} />);
  return (
    <>
      <div className="Accomodation-card">{logements}</div>
    </>
  );
}

export default Home;

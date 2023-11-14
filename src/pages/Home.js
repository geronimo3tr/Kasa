import data from "../data.json";
import Card from "../components/Card";
import Banner from "../components/Banner";
import bannerHome from "../image/bannerHome.png";

function Home() {
  const logements = data.map((logement) => <Card logement={logement} />);
  return (
    <>
      <Banner src={bannerHome} />
      <div className="Accomodation-card">{logements}</div>
    </>
  );
}

export default Home;

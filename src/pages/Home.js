import data from "../data.json";
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner";
import bannerHome from "../image/bannerHome.png";

function Home() {
  const logements = data.map((logement) => <Card logement={logement} />);
  const homeText = "Chez vous, partout et ailleurs";
  return (
    <>
      <Banner src={bannerHome} text={homeText} />
      <section className="Accomodation-card">{logements}</section>
    </>
  );
}

export default Home;

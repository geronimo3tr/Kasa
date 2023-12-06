import Banner from "../components/Banner/Banner";
import bannerAbout from "../image/bannerAbout.png";
import aboutData from "../aboutdata";
import Collapse from "../components/Collapse/Collapse";

function About() {
  return (
    <>
      <Banner src={bannerAbout} />
      <section className="about-collapse-position">
        {aboutData.map((item) => (
          <Collapse title={item.title} content={item.description} />
        ))}
      </section>
    </>
  );
}

export default About;

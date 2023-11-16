import Banner from "../components/Banner/Banner";
import bannerAbout from "../image/bannerAbout.png";

function About() {
  return (
    <div>
      <Banner src={bannerAbout} />
      <p>A propos</p>
    </div>
  );
}

export default About;

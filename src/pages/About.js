import Banner from "../components/Banner/Banner";
import bannerAbout from "../image/bannerAbout.png";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import aboutData from "../aboutdata";
import Collapse from "../components/Collapse/Collapse";

function About() {
  const params = useParams();
  const { id } = params;

  const [about, setAbout] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const selectedAbout = aboutData.find((item) => item.id === id);

    if (selectedAbout) {
      setAbout({
        title: selectedAbout.title,
        description: selectedAbout.description,
      });
    }
  }, [id]);

  return (
    <>
      <Banner src={bannerAbout} />
      <section className="about-collapse-position">
        {aboutData.map((item) => (
          <Collapse key={item.title} title={item.title} content={item.description} />
        ))}
      </section>
    </>
  );
}

export default About;

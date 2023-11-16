import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import accommodationData from "../data";
import Carrousel from "../components/Carrousel/Carrousel";
import Collapse from "../components/Collapse/Collapse";

function Accommodation() {
  const params = useParams();
  const { id } = params;

  const [accommodation, setAccommodation] = useState({
    title: "",
    name: "",
    description: "",
    location: "",
    pictures: [],
    tags: [],
    equipments: [],
  });

  useEffect(() => {
    const selectedAccommodation = accommodationData.find((item) => item.id === id);

    if (selectedAccommodation) {
      setAccommodation({
        title: selectedAccommodation.title,
        name: selectedAccommodation.host.name,
        description: selectedAccommodation.description,
        location: selectedAccommodation.location,
        pictures: selectedAccommodation.pictures,
        tags: selectedAccommodation.tags,
        equipments: selectedAccommodation.equipments,
      });
    }
  }, [id]);

  return (
    <>
      <Carrousel slide={accommodation.pictures} />
      <section>
        <article className="accommodationPresentation">
          <div>
            <h2>{accommodation.title}</h2>
            <p>{accommodation.location}</p>
          </div>
          <p>{accommodation.name}</p>
        </article>
        <article>
          <p className="tags">{accommodation.tags}</p>
        </article>
        <section className="test">
          <Collapse title="Description" content={accommodation.description} />
          <Collapse
            title="Equipements"
            content={accommodation.equipments.map((equipement) => (
              <div className="equipement">{equipement}</div>
            ))}
          />
        </section>
      </section>
    </>
  );
}

export default Accommodation;

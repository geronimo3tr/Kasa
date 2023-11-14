import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import accommodationData from "../data";
import Carrousel from "../components/Carrousel";

function Accommodation() {
  const params = useParams();
  const { id } = params;

  const [accommodation, setAccommodation] = useState({
    title: "",
    name: "",
    description: "",
    location: "",
    pictures: [],
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
      });
    }
  }, [id]);

  return (
    <>
      <Carrousel slide={accommodation.pictures} />
      <h2>{accommodation.title}</h2>
      <h3>{accommodation.location}</h3>
      <p>{accommodation.name}</p>
      <p>{accommodation.description}</p>
    </>
  );
}

export default Accommodation;

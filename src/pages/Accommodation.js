import { useParams } from "react-router-dom";
import accommodationData from "../data";
import Carrousel from "../components/Carrousel/Carrousel";
import Collapse from "../components/Collapse/Collapse";
import Error from "./Error";
import Rating from "../components/Rating/Rating";
import Tags from "../components/Tags/Tags";
import Host from "../components/Host/Host";

function Accommodation() {
  const params = useParams();
  const { id } = params;

  const accommodation = accommodationData.find((item) => item.id === id);

  if (!accommodation) {
    return <Error />;
  }

  return (
    <>
      <Carrousel slide={accommodation.pictures} />
      <section>
        <article className="accommodationPresentation">
          <div>
            <h2>{accommodation.title}</h2>
            <p>{accommodation.location}</p>
          </div>
          <Host name={accommodation.host.name} picture={accommodation.host.picture} />
        </article>
        <article className="tags-ratings">
          <Tags
            tags={accommodation.tags.map((tags) => (
              <span className="tag-container">{tags}</span>
            ))}
          />
          <Rating rating={accommodation.rating} />
        </article>
        <section className="accomodation-collapse-position">
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

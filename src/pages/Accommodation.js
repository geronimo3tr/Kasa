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
        <article className="test">
          <div className="title-tags">
            <h2>{accommodation.title}</h2>
            <p>{accommodation.location}</p>

            <Tags
              tags={accommodation.tags.map((tags) => (
                <span className="tag-container">{tags}</span>
              ))}
            />
          </div>

          <div className="host-ratings">
            <Host name={accommodation.host.name} picture={accommodation.host.picture} />
            <Rating rating={accommodation.rating} />
          </div>
        </article>
        <article className="accomodation-collapse-position">
          <Collapse title="Description" content={accommodation.description} />
          <Collapse
            title="Equipements"
            content={accommodation.equipments.map((equipement) => (
              <div className="equipement">{equipement}</div>
            ))}
          />
        </article>
      </section>
    </>
  );
}

export default Accommodation;

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
      <section className="accommodation-information">
        <article className="text-tags">
          <div className="text">
            <h2>{accommodation.title}</h2>
            <p>{accommodation.location}</p>
          </div>
          <Tags
            key={accommodation.id}
            tags={accommodation.tags.map((tags) => (
              <span className="tag-container">{tags}</span>
            ))}
          />
        </article>
        <article className="host-rating">
          <Host name={accommodation.host.name} picture={accommodation.host.picture} />

          <Rating key={accommodation.id} rating={accommodation.rating} />
        </article>
      </section>
      <article className="accomodation-collapse-position">
        <Collapse title="Description" content={accommodation.description} />
        <Collapse
          key={`${accommodation.id}-equipments`}
          title="Equipements"
          content={accommodation.equipments.map((equipement, index) => (
            <div key={`${accommodation.id}-equipement-${index}`} className="equipement">
              {equipement}
            </div>
          ))}
        />
      </article>
    </>
  );
}

export default Accommodation;

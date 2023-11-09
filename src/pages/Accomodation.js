import { useParams } from "react-router-dom";
function Accomodation() {
  const params = useParams();
  console.log(params);
  debugger;
  return <div>accomodation</div>;
}

export default Accomodation;

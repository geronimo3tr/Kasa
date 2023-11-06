import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import data from "./data.json";
import Accomodation from "./components/accomodation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const logements = data.map((logement) => <Accomodation logement={logement} />);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      {logements}
    </div>
  );
}

export default App;

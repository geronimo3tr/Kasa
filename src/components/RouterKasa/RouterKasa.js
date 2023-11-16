import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Accommodation from "../../pages/Accommodation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function RouterKasa() {
  return (
    <div>
      <Router>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accommodation/:id" element={<Accommodation />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default RouterKasa;

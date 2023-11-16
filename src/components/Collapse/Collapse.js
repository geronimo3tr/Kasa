import { useState } from "react";
import arrow from "../../image/arrow_up.png";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={`collapse-container ${open ? "open" : ""}`}>
      {/* Ternaire */}
      <div className="collapse-title" onClick={toggle}>
        {title}
        <img className={`collapse-icon ${open ? "open" : ""}`} src={arrow} alt={"chevron"} />
      </div>
      <div className="collapse-text">{content}</div>
    </div>
  );
}

export default Collapse;

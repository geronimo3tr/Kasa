import { useState } from "react";

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
        <i className={`collapse-icon fa-solid fa-chevron-up ${open ? "open" : ""}`} />
      </div>
      <div className="collapse-text">{content}</div>
    </div>
  );
}

export default Collapse;

import { useState } from "react";

function Collapse({ title, content, diffContainer }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const collapseContainer = `collapse-container ${open ? "open" : ""} ${diffContainer ? "about-container" : ""}`;

  return (
    <div className={collapseContainer}>
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

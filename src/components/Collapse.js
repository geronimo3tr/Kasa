import { useState } from "react";

import arrow from "../image/arow_up.png";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={`collapse-container ${open && "open"}`}>
      <div className="collapse-title" onClick={toggle}>
        {title}
      </div>
      <div className="collapse-text">{content}</div>
    </div>
  );
}

export default Collapse;

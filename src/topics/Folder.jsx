/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function Folder({ dir }) {
  const [open, setOpen] = useState(false);
  if (dir.type === "folder")
    return (
      <div
        style={{ padding: "5px" }}
        onClick={(e) => {
          setOpen(!open);
          e.stopPropagation();
        }}
      >
        <span className="folder">📁{dir.name}</span>
        <div style={{ display: `${open ? "block" : "none"} ` }}>
          {Array.isArray(dir.items) &&
            dir.items.length &&
            dir.items.map((val, index) => <Folder key={index} dir={val} />)}
        </div>
      </div>
    );
  else return <span className="file">🗄️{dir.name}</span>;
}

export default Folder;

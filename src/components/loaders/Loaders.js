import React from "react";
import "./Loaders.css";

function Loaders() {
  return (
    <div
      style={{
        background: "black",
      }}
    >
      <div class="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loaders;

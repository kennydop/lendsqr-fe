import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loader({ type }: any) {
  return (
    <div className={`loader-container ${type}`}>
      <FontAwesomeIcon icon={solid("spinner")} spin />
    </div>
  );
}

export default Loader;

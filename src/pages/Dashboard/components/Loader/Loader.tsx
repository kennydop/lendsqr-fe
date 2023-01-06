import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Loader({ type }: any) {
  return (
    <div className={`loader-container ${type}`} data-testid="loader">
      <FontAwesomeIcon icon={solid("spinner")} spin />
    </div>
  );
}

export default Loader;

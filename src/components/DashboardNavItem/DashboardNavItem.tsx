import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { toggleNavModal } from "../../helpers/modal";

interface Props {
  name: string;
  icon: IconDefinition;
  active?: boolean;
}

function DashboardNavItem({ name, icon, active }: Props) {
  return (
    <div
      className={`dashboard-nav-item ${active ? "active" : ""}`}
      onClick={() => toggleNavModal()}
    >
      <FontAwesomeIcon icon={icon} />
      <p className="lg-hide">{name}</p>
    </div>
  );
}

export default DashboardNavItem;

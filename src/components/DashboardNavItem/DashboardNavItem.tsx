import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  name: string;
  icon: IconDefinition;
  active?: boolean;
}

function DashboardNavItem({ name, icon, active }: Props) {
  return (
    <div className={`dashboard-nav-item ${active ? "active" : ""}`}>
      <FontAwesomeIcon icon={icon} />
      <p>{name}</p>
    </div>
  );
}

export default DashboardNavItem;

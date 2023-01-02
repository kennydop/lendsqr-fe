import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

interface Props {
  param: {
    icon: IconDefinition;
    color: string;
    title: string;
    value: number;
  };
}

function UsersStatCard({ param: { icon, color, title, value } }: Props) {
  return (
    <div className="users-stat-card">
      <div
        className="icon-container"
        style={{ backgroundColor: `${color}21`, color: color }}
      >
        <FontAwesomeIcon icon={icon} color={color} />
      </div>
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
  );
}

export default UsersStatCard;

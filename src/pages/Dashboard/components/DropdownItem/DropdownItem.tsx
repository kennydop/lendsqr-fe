import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  icon: IconDefinition;
  userId?: string;
  onClick?: () => void;
}
export default function DropdownItem({ text, icon, userId, onClick }: Props) {
  return (
    <li className="dropdown-item" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      {text === "User Details" ? (
        <Link to={`/dashboard/users/${userId}`} className="link">
          {" "}
          {text}{" "}
        </Link>
      ) : (
        <div>{text}</div>
      )}
    </li>
  );
}

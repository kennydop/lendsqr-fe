import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  text: string;
  icon: IconDefinition;
}
export default function DropdownItem({ text, icon }: Props) {
  return (
    <li className="dropdown-item">
      <FontAwesomeIcon icon={icon} />
      <a href="/"> {text} </a>
    </li>
  );
}

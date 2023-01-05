import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { closeModal } from "../../helpers/modal";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  name: string;
  icon: IconDefinition;
}

function DashboardNavItem({ name, icon }: Props) {
  const { nav } = useParams();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (nav === undefined) {
      if (
        window.location.pathname === "/dashboard" &&
        name.toLowerCase() === "dashboard"
      ) {
        setActive(true);
      } else if (
        window.location.pathname.startsWith("/dashboard/users/") &&
        name.toLowerCase() === "users"
      ) {
        setActive(true);
      }
    } else if (nav?.toLowerCase() === name.toLowerCase()) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [nav, name]);

  return (
    <Link to={`/dashboard/${name.toLowerCase()}`} className="link">
      <div
        className={`dashboard-nav-item ${active ? "active" : ""}`}
        onClick={() => closeModal()}
      >
        <FontAwesomeIcon icon={icon} />
        <p className="lg-hide">{name}</p>
      </div>
    </Link>
  );
}

export default DashboardNavItem;

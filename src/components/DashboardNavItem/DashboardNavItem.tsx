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
    console.log(name, "->", nav);
    if (
      nav === undefined &&
      window.location.pathname.startsWith("/dashboard/users/") &&
      name.toLowerCase() === "users"
    ) {
      console.log("ibi users");
      setActive(true);
    } else if (
      window.location.pathname === "/" &&
      name.toLowerCase() === "dashboard"
    ) {
      console.log("ibi dashboard");
      setActive(true);
    } else if (nav?.toLowerCase() === name.toLowerCase()) {
      console.log(`ibi ${name}`);
      setActive(true);
    } else {
      console.log("not active");
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

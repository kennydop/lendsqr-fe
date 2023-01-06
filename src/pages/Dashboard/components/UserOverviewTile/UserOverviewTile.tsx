import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { User } from "../../../../types";
import DropdownItem from "../DropdownItem/DropdownItem";
import { Link } from "react-router-dom";
import "./style.scss";

interface Props {
  user: User;
}

function UserOverviewTile({ user }: Props) {
  const formatter = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const [open, setOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="tile">
      <Link to={`/dashboard/users/${user.id}`} className="link tile-i">
        <div className="tile-item org" title={user.orgName}>
          {user.orgName}
        </div>
        <div className="tile-item username" title={user.userName}>
          {user.userName}
        </div>
        <div className="tile-item email" title={user.email}>
          {user.email}
        </div>
        <div className="tile-item phone" title={user.phoneNumber}>
          {user.phoneNumber}
        </div>
        <div
          className="tile-item date"
          title={formatter.format(new Date(user.createdAt))}
        >
          {formatter.format(new Date(user.createdAt))}
        </div>
        <div className={`status ${user.status ?? "None"}`}>
          {user.status ?? "None"}
        </div>
      </Link>
      <div
        className="more"
        ref={menuRef}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FontAwesomeIcon icon={solid("ellipsis-vertical")} />
        <div className={`dropdown-menu card ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem
              text={"User Details"}
              icon={solid("eye")}
              userId={user.id}
            />
            <DropdownItem
              text={"Blacklist User"}
              icon={solid("user-xmark")}
              onClick={() => (user.status = "Blacklisted")}
            />
            <DropdownItem
              text={"Activate User"}
              icon={solid("user-check")}
              onClick={() => (user.status = "Active")}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserOverviewTile;

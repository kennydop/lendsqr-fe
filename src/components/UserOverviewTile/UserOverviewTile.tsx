import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { User } from "../../types";
import DropdownItem from "../DropdownItem/DropdownItem";
import "./style.scss";

interface Props {
  user: User;
}

function UserOverviewTile({ user }: Props) {
  const formatter = Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
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
      <div className="tile-item" title={user.orgName}>
        {user.orgName}
      </div>
      <div className="tile-item" title={user.userName}>
        {user.userName}
      </div>
      <div className="tile-item" title={user.email}>
        {user.email}
      </div>
      <div className="tile-item" title={user.phoneNumber}>
        {user.phoneNumber}
      </div>
      <div
        className="tile-item"
        title={formatter.format(new Date(user.createdAt))}
      >
        {user.createdAt}
      </div>
      <div className="status">{"Active"}</div>
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
            <DropdownItem text={"User Details"} icon={solid("eye")} />
            <DropdownItem text={"Blacklist User"} icon={solid("user-xmark")} />
            <DropdownItem text={"Activate User"} icon={solid("user-check")} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserOverviewTile;

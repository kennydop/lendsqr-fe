import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../../types";
import "./style.scss";

interface Props {
  user: User;
}

function UserOverviewTile({ user }: Props) {
  const formatter = Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
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
      <div className="more">
        <FontAwesomeIcon icon={solid("ellipsis-vertical")} />
      </div>
    </div>
  );
}

export default UserOverviewTile;

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../../types";
import UserOverviewTile from "../UserOverviewTile/UserOverviewTile";
import "./style.scss";

interface Props {
  users: User[];
  show: number;
}

const cats = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

function UsersOverview({ users, show }: Props) {
  return (
    <div className="users-overview">
      <div className="users-overview-header">
        {cats.map((cat) => (
          <div key={cat} className="cat">
            <div className="cat-name">{cat}</div>
            <FontAwesomeIcon
              icon={solid("arrow-down-wide-short")}
              className="cat-icon"
            />
          </div>
        ))}
        <div></div>
      </div>
      {users.map((user) => (
        <UserOverviewTile key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersOverview;

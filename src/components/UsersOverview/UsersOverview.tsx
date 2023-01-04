import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { User } from "../../types";
import UserOverviewTile from "../UserOverviewTile/UserOverviewTile";
import "./style.scss";

interface Props {
  _users: User[];
  show: number;
  start: number;
}

const cats = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

function UsersOverview({ _users, show, start }: Props) {
  const [users, setUsers] = useState<User[]>();
  const [sort, setSort] = useState<string>("");
  const [order, setOrder] = useState<string>("asc");

  useEffect(() => {
    setUsers(_users);
  }, [_users]);

  const sortUsers = (type: string, order: string) => {
    let sortedUsers = [...users!];
    switch (type) {
      case "Date Joined":
        sortedUsers.sort((a, b) => {
          let dateA: Date = new Date(a.createdAt);
          let dateB: Date = new Date(b.createdAt);
          if (order === "asc") {
            return dateA.getTime() - dateB.getTime();
          } else {
            return dateB.getTime() - dateA.getTime();
          }
        });
        break;
      case "Status":
        sortedUsers.sort((a, b) => {
          if (order === "asc") {
            return a!.status!.localeCompare(b!.status ?? "None");
          } else {
            return b!.status!.localeCompare(a!.status ?? "None");
          }
        });
        break;
      case "Username":
        sortedUsers.sort((a, b) => {
          if (order === "asc") {
            return a.userName.localeCompare(b.userName);
          } else {
            return b.userName.localeCompare(a.userName);
          }
        });
        break;
      case "Organization":
        sortedUsers.sort((a, b) => {
          if (order === "asc") {
            return a.orgName.localeCompare(b.orgName);
          } else {
            return b.orgName.localeCompare(a.orgName);
          }
        });
        break;
      case "Email":
        sortedUsers.sort((a, b) => {
          if (order === "asc") {
            return a.email!.localeCompare(b.email!);
          } else {
            return b.email!.localeCompare(a.email!);
          }
        });
        break;
      case "Phone Number":
        sortedUsers.sort((a, b) => {
          if (order === "asc") {
            return a.profile.phoneNumber.localeCompare(b.profile.phoneNumber);
          } else {
            return b.profile.phoneNumber.localeCompare(a.profile.phoneNumber);
          }
        });
        break;
      default:
        sortedUsers.sort((a, b) => {
          if (order === "asc") {
            return a.profile.firstName.localeCompare(b.profile.firstName);
          } else {
            return b.profile.firstName.localeCompare(a.profile.firstName);
          }
        });
        break;
    }
    setUsers(sortedUsers);
    setSort(type);
    setOrder(order);
  };

  return (
    <div className="users-overview card">
      <div className="users-overview-header">
        <div className="cats">
          {cats.map((cat) => (
            <div key={cat} className={`cat ${cat}`}>
              <div className="cat-name">{cat}</div>
              <FontAwesomeIcon
                icon={
                  sort === cat
                    ? order === "asc"
                      ? solid("arrow-down-wide-short")
                      : solid("arrow-up-wide-short")
                    : solid("arrow-down-wide-short")
                }
                className="cat-icon"
                onClick={() =>
                  sortUsers(
                    cat,
                    sort === cat && order === "asc" ? "desc" : "asc"
                  )
                }
              />
            </div>
          ))}
        </div>
        <div className="more-spacer"></div>
      </div>
      {users &&
        users.map((user: User, index: number) => {
          if (index < start || index >= start + show) return null;
          return <UserOverviewTile key={user.id} user={user} />;
        })}
    </div>
  );
}

export default UsersOverview;

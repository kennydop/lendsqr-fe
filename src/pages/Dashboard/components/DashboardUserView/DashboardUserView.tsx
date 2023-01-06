import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { User } from "../../../../types";
import FilterMenu from "../FilterMenu/FilterMenu";
import Loader from "../Loader/Loader";
import UsersOverview from "../UsersOverview/UsersOverview";
import UsersStatCard from "../UsersStatCard/UsersStatCard";
import "./style.scss";

function DashboardUserView() {
  const [show, setShow] = useState(25);
  const [start, setStart] = useState(0);
  const [fetchingUsers, setFetchingUsers] = useState(true);
  const [error, setError] = useState<string>("");
  const [users, setUsers] = useState<User[]>();
  const [activeUsers, setActiveUsers] = useState(0);
  const [availablePages, setAvailablePages] = useState<number[]>([]);

  useEffect(() => {
    const jsonCachedUsers = localStorage.getItem("users");
    if (jsonCachedUsers !== null) {
      const cachedUsers = JSON.parse(jsonCachedUsers);
      setUsers(cachedUsers);
      setActiveUsers(JSON.parse(localStorage.getItem("activeUsers")!));
      setFetchingUsers(false);
      generateAvailableUsers(show, cachedUsers.length);
    } else {
      fetchUsers();
    }
  }, []);

  // Fetch users
  const fetchUsers = async () => {
    setFetchingUsers(true);
    setError("");
    await fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    )
      .then((res) => res.json())
      .then((data) => {
        // Randomize user statuses
        let _actU = 0;
        let statuses = ["Active", "Inactive", "Pending", "Blacklisted"];
        let _res: User[] = data.map((user: User) => {
          let rand = statuses[Math.floor(Math.random() * statuses.length)];
          user.status = rand;
          if (rand === "Active") {
            _actU += 1;
          }
          return user;
        });
        localStorage.setItem("users", JSON.stringify(_res));
        localStorage.setItem("activeUsers", JSON.stringify(_actU));
        setActiveUsers(_actU);
        setUsers(_res);
        generateAvailableUsers(show, _res.length);
        setFetchingUsers(false);
      })
      .catch((err) => {
        setError(err.message);
        setFetchingUsers(false);
      });
  };

  const generateAvailableUsers = (
    _newlerp: number = show,
    _uLen: number = 0
  ) => {
    if (users) {
      _uLen = users.length;
    }
    let pagesLength: number = Math.ceil(_uLen / _newlerp);
    setAvailablePages(Array.from(Array(pagesLength).keys()));
  };

  return (
    <div className="user-view">
      <div className="view-name" style={{ marginBottom: "1.6rem" }}>
        Users
      </div>
      {/* stats */}
      {users && (
        <div className="reports-container">
          <UsersStatCard
            param={{
              title: "Users",
              value: users.length,
              icon: solid("users"),
              color: "#DF18FF",
            }}
          />
          <UsersStatCard
            param={{
              title: "Active Users",
              value: activeUsers,
              icon: solid("users-line"),
              color: "#5718FF",
            }}
          />
          <UsersStatCard
            param={{
              title: "Users with Loans",
              value: 20,
              icon: solid("file-invoice-dollar"),
              color: "#F55F44",
            }}
          />
          <UsersStatCard
            param={{
              title: "Users with Savings",
              value: 12,
              icon: solid("coins"),
              color: "#FF3366",
            }}
          />
        </div>
      )}
      <div style={{ marginTop: "1.6rem" }}></div>
      {fetchingUsers ? (
        <Loader type="xl" />
      ) : error.length > 0 ? (
        <div className="error">{`ERROR: ${error}`}</div>
      ) : (
        users && (
          <>
            <UsersOverview _users={users!} show={show} start={start} />
            <div className="overview-controller">
              <div className="left">
                {/* filter menu */}
                <FilterMenu />
                {/* pagination length */}
                <div className="length">
                  <div>Showing</div>
                  <select
                    className="length-selector"
                    onChange={(e) => {
                      generateAvailableUsers(parseInt(e.target.value));
                      setShow(parseInt(e.target.value));
                    }}
                  >
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                  </select>
                  <div>out of 100</div>
                </div>
              </div>
              {/* pagination */}
              <nav className="pagination">
                <button
                  disabled={start === 0}
                  onClick={() =>
                    setStart(start === 0 || start - show < 0 ? 0 : start - show)
                  }
                  className={`pag-btn ${
                    start !== 0 || start - show >= 0 ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={solid("chevron-left")} />
                </button>
                {availablePages.map((page) => (
                  <button
                    key={page}
                    disabled={start === page * show}
                    onClick={() => setStart(page * show)}
                    className={`pag-item ${
                      start === page * show ? "active" : ""
                    }`}
                  >
                    {page + 1}
                  </button>
                ))}

                <button
                  disabled={
                    start >= users.length && start + show > users.length
                  }
                  onClick={() =>
                    setStart(
                      start < users.length && start + show < users.length
                        ? start + show
                        : start
                    )
                  }
                  className={`pag-btn ${
                    start < users.length && start + show < users.length
                      ? "active"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={solid("chevron-right")} />
                </button>
              </nav>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default DashboardUserView;

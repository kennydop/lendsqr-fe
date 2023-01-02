import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { User } from "../../types";
import UsersOverview from "../UsersOverview/UsersOverview";
import UsersStatCard from "../UsersStatCard/UsersStatCard";
import "./style.scss";

function DashboardUserView() {
  const [show, setShow] = useState(25);
  const [start, setStart] = useState(0);
  const [open, setOpen] = useState(false);
  const [fetchingUsers, setFetchingUsers] = useState(true);
  const [users, setUsers] = useState<User[]>();
  const [activeUsers, setActiveUsers] = useState(0);
  const [availablePages, setAvailablePages] = useState<number[]>([]);
  const [error, setError] = useState<string>();
  let filterTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Close filter menu when clicked outside
  useEffect(() => {
    let handler = (e: any) => {
      if (
        filterTriggerRef.current &&
        !filterTriggerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // Fetch users
  const fetchUsers = async () => {
    setFetchingUsers(true);
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
        User
      </div>
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
        <div className="loader-container">
          <FontAwesomeIcon icon={solid("spinner")} spin />
        </div>
      ) : error ? (
        <div className="error">{`ERROR: ${error}`}</div>
      ) : (
        users && (
          <>
            <UsersOverview _users={users!} show={show} start={start} />
            <div className="overview-controller">
              <div className="left">
                <div
                  className="filter"
                  ref={filterTriggerRef}
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <FontAwesomeIcon icon={solid("filter")} />
                  <div
                    className={`filter-menu card ${
                      open ? "active" : "inactive"
                    }`}
                  >
                    <div className="filter-menu-item">
                      <div className="filter-menu-item-title">Organization</div>
                      <select>
                        <option value="select">Select</option>
                        <option value="lendsqr">Lendsqr</option>
                        <option value="lendstack">Lendstack</option>
                      </select>
                    </div>
                    <div className="filter-menu-item">
                      <div className="filter-menu-item-title">Username</div>
                      <input type="text" />
                    </div>
                    <div className="filter-menu-item">
                      <div className="filter-menu-item-title">Email</div>
                      <input type="text" />
                    </div>
                    <div className="filter-menu-item">
                      <div className="filter-menu-item-title">Date</div>
                      <input type="date" />
                    </div>
                    <div className="filter-menu-item">
                      <div className="filter-menu-item-title">Phone Number</div>
                      <input type="text" />
                    </div>
                    <div className="filter-menu-item">
                      <div className="filter-menu-item-title">Status</div>
                      <select>
                        <option value="select">Select</option>
                        <option value="lendsqr">Lendsqr</option>
                        <option value="lendstack">Lendstack</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                    onClick={() => setStart(0 + page * show)}
                    className="pag-item"
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

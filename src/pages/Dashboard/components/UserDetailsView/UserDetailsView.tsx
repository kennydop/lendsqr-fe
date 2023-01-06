import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { User } from "../../../../types";
import Loader from "../Loader/Loader";
import "./style.scss";
import { useNavigate, useParams } from "react-router-dom";
import UserGeneralDetailsCard from "../UserGeneralDetailsCard/UserGeneralDetailsCard";

function UserDetailsView() {
  const [user, setUser] = useState<User>();
  const [fetchingUsers, setFetchingUsers] = useState(true);
  const [error, setError] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setFetchingUsers(true);
    setError("");
    await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setFetchingUsers(false);
      })
      .catch((err) => {
        setError(err.message);
        setFetchingUsers(false);
      });
  };

  return (
    <div className="user-details-view">
      <button className="nav-btn" onClick={() => navigate(-1)}>
        <div className="back-icon">
          <FontAwesomeIcon icon={solid("arrow-left-long")} />
        </div>
        <p>Back to Users</p>
      </button>
      <div className="view-title">
        <div className="view-name">User Details</div>
        <div className="actions">
          <button className="blacklist">Blacklist User</button>
          <button className="activate">Activate User</button>
        </div>
      </div>
      {fetchingUsers ? (
        <Loader type="xl" />
      ) : error.length > 0 ? (
        <div className="error">{`ERROR: ${error}`}</div>
      ) : (
        user && (
          <>
            <div className="user-nav-card card">
              <div className="top">
                <div className="avatar">
                  <img src={user.profile.avatar} alt="Avatar" />
                </div>
                <div className="names-container">
                  <div className="txt-lg">{`${user.profile.firstName} ${user.profile.lastName}`}</div>
                  <div className="txt-li capitalize">{user.accountNumber}</div>
                </div>
                <div className="divider"></div>
                <div className="user-tier">
                  <div className="txt">User&apos;s Tier</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={solid("star")} color="orange" />
                    <FontAwesomeIcon icon={regular("star")} color="orange" />
                    <FontAwesomeIcon icon={regular("star")} color="orange" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="loaned-money-details">
                  <div className="txt-lg">{`${user.profile?.currency ?? "NGN"}${
                    user.accountBalance
                  }`}</div>
                  <div className="bank">{`${
                    user.profile?.bvn ?? "123"
                  }/Providus Bank`}</div>
                </div>
              </div>
              <div className="bottom">
                <div className="nav-t active">General Details</div>
                <div className="nav-t">Documents</div>
                <div className="nav-t">Bank Details</div>
                <div className="nav-t">Loans</div>
                <div className="nav-t">Savings</div>
                <div className="nav-t">App and System</div>
              </div>
            </div>
            <UserGeneralDetailsCard user={user} />
          </>
        )
      )}
    </div>
  );
}

export default UserDetailsView;

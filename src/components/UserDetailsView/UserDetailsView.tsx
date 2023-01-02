import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../../types";
import UserGeneralDetailsCard from "../UserGeneralDetailsCard/UserGeneralDetailsCard";
import "./style.scss";

interface Props {
  user: User;
}

function UserDetailsView({ user }: Props) {
  return (
    <div className="user-details-view">
      <button className="nav-btn">
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
    </div>
  );
}

export default UserDetailsView;

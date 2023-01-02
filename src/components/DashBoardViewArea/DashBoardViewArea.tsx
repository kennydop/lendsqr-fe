import DashboardUserView from "../DashboardUserView/DashboardUserView";
import UserDetailsView from "../UserDetailsView/UserDetailsView";
import "./style.scss";

function DashBoardViewArea() {
  return (
    <div className="dashboard-view-area">
      {/* <DashboardUserView /> */}
      <UserDetailsView />
    </div>
  );
}

export default DashBoardViewArea;

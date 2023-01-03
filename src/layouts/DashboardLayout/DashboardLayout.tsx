import DashboardLeftNav from "../../components/DashboardLeftNav/DashboardLeftNav";
import { Header } from "../../components/Header/Header";
import "./style.scss";
import { Outlet } from "react-router-dom";
import { User } from "../../types";

interface Props {
  user: User;
}

const DashboardLayout = ({ user }: Props) => {
  return (
    <div className="Dashboard">
      <Header user={user} />
      <div className="dashboard-body">
        <DashboardLeftNav />
        <div className="dashboard-view-area">
          <Outlet context={user} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

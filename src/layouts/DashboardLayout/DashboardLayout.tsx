import DashboardLeftNav from "../../pages/Dashboard/components/DashboardLeftNav/DashboardLeftNav";
import "./style.scss";
import { Outlet } from "react-router-dom";
import { User } from "../../types";
import { closeModal } from "../../helpers/modal";
import { Header } from "../../pages/Dashboard/components/Header/Header";

interface Props {
  user: User;
}

const DashboardLayout = ({ user }: Props) => {
  return (
    <div className="Dashboard">
      <div className="modal-bg inactive" onClick={() => closeModal()}></div>
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

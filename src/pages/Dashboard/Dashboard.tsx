import { useEffect, useState } from "react";
import DashboardLeftNav from "../../components/DashboardLeftNav/DashboardLeftNav";
import DashBoardViewArea from "../../components/DashBoardViewArea/DashBoardViewArea";
import { Header } from "../../components/Header/Header";
import "./dashboard.scss";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const _user = localStorage.getItem("user");
    if (_user) {
      setUser(JSON.parse(_user));
    }
    setLoading(false);
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : user ? (
    <div className="Dashboard">
      <Header user={user} />
      <div className="dashboard-body">
        <DashboardLeftNav />
        <DashBoardViewArea />
      </div>
    </div>
  ) : (
    <div>Error</div>
  );
};

export default Dashboard;

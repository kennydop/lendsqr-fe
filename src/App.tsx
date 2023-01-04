import { useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import Loader from "./components/Loader/Loader";
import { Routes, useNavigate, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import DashboardUserView from "./components/DashboardUserView/DashboardUserView";
import UserDetailsView from "./components/UserDetailsView/UserDetailsView";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();

  useEffect(() => {
    setLoading(true);
    const _user = localStorage.getItem("user");
    if (_user) {
      setUser(JSON.parse(_user));
    } else {
      navigator("/login");
    }
    setLoading(false);
  }, [navigator]);

  return loading ? (
    <Loader type="xl" />
  ) : (
    <Routes>
      <Route path="/" element={!user && <Login />} />
      <Route path="/login" element={<Login />} />
      {user && (
        <Route path="/dashboard" element={<DashboardLayout user={user} />}>
          <Route index path="users" element={<DashboardUserView />} />
          <Route path="users/:id" element={<UserDetailsView />} />
        </Route>
      )}
      <Route path="*" element={<div />} />
    </Routes>
  );
}

export default App;

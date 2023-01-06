import { useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import Loader from "./pages/Dashboard/components/Loader/Loader";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import UserDetailsView from "./pages/Dashboard/components/UserDetailsView/UserDetailsView";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function getUser() {
    console.log("fetching user");
    setLoading(true);
    const _user = localStorage.getItem("user");

    if (_user) {
      setUser(JSON.parse(_user));
    }
    setLoading(false);
  }

  useEffect(() => {
    getUser();
    window.addEventListener("storage", getUser);

    return () => {
      window.removeEventListener("storage", getUser);
    };
  }, []);

  return loading ? (
    <Loader type="xl" />
  ) : (
    <Routes>
      <Route
        path="/"
        element={user ? <DashboardLayout user={user} /> : <Login />}
      />
      <Route path="/login" element={<Login />} />
      {user && (
        <Route path="/dashboard" element={<DashboardLayout user={user} />}>
          <Route index path=":nav" element={<Dashboard />} />
          <Route path="users/:id" element={<UserDetailsView />} />
        </Route>
      )}
      <Route path="*" element={user ? <div /> : <Login />} />
    </Routes>
  );
}

export default App;

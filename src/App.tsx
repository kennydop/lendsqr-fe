import { useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
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

  return loading ? <div>loading...</div> : user ? <Dashboard /> : <Login />;
}

export default App;

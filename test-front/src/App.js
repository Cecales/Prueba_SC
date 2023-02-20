import { useEffect, useState } from "react";
import Login from "./pages/login/Login";
import Customers from "./pages/customers/Customers";

function App() {
  const [user, setUser] = useState("");
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    setUser(window.localStorage.getItem("user"));
  }, []);
  return (
    <div className="App">
      {user ? <Customers/> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;

import { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import Dashboard from "./Dashboard.jsx";

export default function App() {
  // null means logged out; otherwise { username, role }
  const [user, setUser] = useState(null);

  const handleLogin = (username, role) => setUser({ username, role });
  const handleLogout = () => setUser(null);

  return (
    <main className="card">
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </main>
  );
}

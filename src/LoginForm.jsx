import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (role) => {
    const name = username.trim();
    if (!name) {
      setError("Enter a username to continue.");
      return;
    }
    setError("");
    onLogin(name, role);
  };

  return (
    <section>
      <h1>Sign in</h1>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
      />
      <p className="err" role="alert">{error}</p>
      <div className="row">
        <button className="admin" onClick={() => handleLogin("Admin")}>
          Login as Admin
        </button>
        <button className="viewer" onClick={() => handleLogin("Viewer")}>
          Login as Viewer
        </button>
      </div>
    </section>
  );
}

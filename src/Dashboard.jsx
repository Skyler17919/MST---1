export default function Dashboard({ user, onLogout }) {
  const { username, role } = user;

  return (
    <section>
      <p className="welcome">
        Welcome, {username} ({role})
      </p>

      {role === "Admin" ? (
        <button className="admin" onClick={() => alert("Post deleted (demo).")}>
          Delete Post
        </button>
      ) : (
        <div className="note">Read-only access</div>
      )}

      <button className="logout" onClick={onLogout}>
        Logout
      </button>
    </section>
  );
}

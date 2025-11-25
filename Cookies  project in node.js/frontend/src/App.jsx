import { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);

  const register = async () => {
    const res = await axios.post("http://localhost:8000/register", {
      username,
      password,
    });
    alert(res.data.message);
  };

  const login = async () => {
    const res = await axios.post("http://localhost:8000/login", {
      username,
      password,
    });
    alert(res.data.message);
  };

  const getprofile = async () => {
    try {
      const res = await axios.get("http://localhost:8000/profile");
      setProfile(res.data);
    } catch (error) {
      alert("Not logged in");
    }
  };

  const logout = async () => {
    await axios.post("http://localhost:8000/logout");
    setProfile(null);
    alert("Logged out");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          width: "380px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#333",
          }}
        >
          MERN COOKIE AUTH
        </h1>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <div
          style={{
            display: "grid",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <button
            onClick={register}
            style={{
              padding: "12px",
              background: "#4a90e2",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Register
          </button>

          <button
            onClick={login}
            style={{
              padding: "12px",
              background: "#5cb85c",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <button
            onClick={getprofile}
            style={{
              padding: "12px",
              background: "#f0ad4e",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Get Profile
          </button>

          <button
            onClick={logout}
            style={{
              padding: "12px",
              background: "#d9534f",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        {profile && (
          <div
            style={{
              marginTop: "20px",
              background: "#f1f1f1",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>Profile</h2>
            <pre
              style={{
                background: "white",
                padding: "10px",
                borderRadius: "10px",
                overflowX: "auto",
              }}
            >
              {JSON.stringify(profile, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

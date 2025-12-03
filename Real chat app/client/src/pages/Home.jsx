import { io } from "socket.io-client";
const socket = io("http://localhost:5000");
import { useState, useEffect } from "react";

const Home = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });
    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", { message });
    setChat((prev) => [...prev, { message }]);
    setMessage("");
  };
  return (
    <div>
      <h1>My Chat App</h1>

      <input
        type="text"
        placeholder="type message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>Send</button>
      <hr />
      <ul>
        {chat.map((msg, index) => (
          <li key={index}>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
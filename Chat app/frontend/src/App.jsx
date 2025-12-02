import { useEffect ,useState} from "react";
import {io} from 'socket.io-client';
const socket = io('http://localhost5000'); // your backend srver url;



const App = ()=>{

  
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  

  const sendMessage = ()=>{
    socket.emit('send_message',{message});
    setChat((prev)=>[...prev,{message}]);
    setMessage('');
  };

  useEffect(()=>{
    socket.on('receive_message',(data)=>{
      setChat((prev)=>[...prev,data])
    });

    return()=>{
      socket.off('receive_message')
    };
  },[]);

  return(

    <>
    <h1> This is chat app</h1>

    <input type="text" placeholder="Type message" value={message} onChange={(e)=>{
      setMessage(e.target.value)
    }}/>
    <button onClick={sendMessage}>send</button>

    <hr />

    <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg.message}</p>
        ))}
      </div>
    </>
  )
}

export default App;
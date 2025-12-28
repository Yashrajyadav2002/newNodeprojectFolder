import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const [input, setInput] = useState({});
    const navigate = useNavigate();
    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values, [name]:value}));
         console.log(input);
    }

   const handleSubmit=async(e)=>{
      e.preventDefault();
      let api=`${import.meta.env.VITE_BACKENDURL}/product/login`; 
      const response = await axios.post(api, input);
      console.log(response.data);
      localStorage.setItem("user", response.data.user.name);
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("userid", response.data.user._id);
      localStorage.setItem("address", response.data.user.shippingadd);
      navigate("/home")
   }

   
    return(
        <>
          <h1 align="center"> User Login</h1>
           <Form style={{width:"400px", margin:"auto"}}>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"   name="email" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password"   name="password" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
        </>
    )
}
export default Login;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const AdminLogin=()=>{
    const [adminid, setAdminId] =useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   const handleSubmit=async(e)=>{
       e.preventDefault();
       let api=`${import.meta.env.VITE_BACKENDURL}/admin/login`;
       const response = await axios.post(api, {adminid:adminid, password:password});
       console.log(response);
       alert(response.data);
       navigate("/dashboard");
   }
    return(
        <>
        <h1 className='heading'> Admin Login</h1>
           <Form style={{width:"400px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID</Form.Label>
        <Form.Control type="text" value={adminid} onChange={(e)=>{setAdminId(e.target.value)}}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>  
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
        </>
    )
}
export default AdminLogin;
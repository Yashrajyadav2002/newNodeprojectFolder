import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Registration=()=>{
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
      let api=`${import.meta.env.VITE_BACKENDURL}/product/registration`; 
      const response = await axios.post(api, input);
      console.log(response.data);
      alert("You are Succesfully Registered!!!");
      navigate("/login");
   }

    return(
        <>
          <h1 align="center"> User Registration</h1>
           <Form style={{width:"400px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"   name="email" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password"   name="password" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact No.</Form.Label>
        <Form.Control type="text"  name="contact" onChange={handleInput}  />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  name="city" onChange={handleInput}  />
      </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shipping Address</Form.Label>
        <Form.Control type="text"  name="shippingadd" onChange={handleInput}  />
      </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin Code</Form.Label>
        <Form.Control type="text"  name="pincode" onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Registration;
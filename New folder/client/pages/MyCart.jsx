import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { qntyInc, qntyDec, proRemove } from "../cartSlice";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const MyCart=()=>{
    const myData= useSelector(state=>state.mycart.cart);
    const dispatch= useDispatch();
    const navigate = useNavigate();
    let totAmount=0;
     const ans=myData.map((key)=>{
        totAmount+=key.price * key.qnty;
         return(
            <>
               <tr>
                <td> <img src={key.image} style={{width:"100px", height:"100px"}} /> </td>
                <td> {key.name} </td>
                <td>{key.category}</td>
                <td>{key.description}</td>
                <td>{key.price}</td>
                <td style={{fontSize:"20px", fontWeight:"bold"}}>
                     <FaSquareMinus  onClick={()=>{dispatch(qntyDec({id:key.id}))}} />
                    {key.qnty}
                    <FaSquarePlus onClick={()=>{dispatch(qntyInc({id:key.id}))}} />
                   
                </td>
                <td> {key.price * key.qnty} </td>
                <td>  
                  <Button variant="primary"  onClick={()=>{dispatch(proRemove({id:key.id}))}}>Remove</Button>
                </td>
               </tr>
            
            </>
         )
     })

    return(
        <>
           <h1> My Cart Data</h1>
            <h3 align="center" style={{color:"green"}} > Total Amount : <FaRupeeSign />  {totAmount}
            
             <Button variant="success" style={{marginLeft:"20px"}}
             onClick={()=>{navigate("/checkout")}}>CheckOut</Button>
            </h3>

           
          
           

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Decription</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Amount</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
      {ans}
      </tbody>
</Table>

        </>
    )
}

export default MyCart;
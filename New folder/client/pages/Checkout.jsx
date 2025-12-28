import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CheckOut=()=>{
const navigate = useNavigate();
  const myData= useSelector(state=>state.mycart.cart);

    useEffect(()=>{
        if (!localStorage.getItem("user"))
        {
           navigate("/login");
        }
    }, []);

    let totalAmount=0;
    let proName="";
    const ans= myData.map((key)=>{
             totalAmount+=key.price*key.qnty;
             proName+=key.name+", ";
    })

    return(
        <>
         <h1> CheckOut</h1>
          <h2> Total Amount : {totalAmount} </h2>
          <h2> Product name : {proName}</h2>
          <h2> Your Shipping Address : {localStorage.getItem("address")}</h2>
          Enter Alternate Address : 
          <input type="text" />
       
         <br />
          <button>Make Payment</button>

        </>
    )
}

export default CheckOut;
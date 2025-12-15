const AdminModel= require("../models/adminModel");


const adminLogin=async(req, res)=>{
    const { adminid, password }= req.body;

    const admin = await AdminModel.findOne({adminid:adminid});

    if (!admin){
         res.status(401).send({msg:"Invalid Admin ID"});
    }

    if (admin.password!=password){
           res.status(401).send({msg:"Invalid Password"});
    }
  
   res.status(200).send("Login Succesfully!");
}

const addProduct=async(req, res)=>{
     console.log(req.body);
     res.send("OKKK");
}


module.exports={
    adminLogin,
    addProduct
}
const cookieModel = require("../models/cookieModel");

const bcrypt = require("bcrypt");

// register Route 

const cookieRegistration = async(req,res)=>{
    const {username,password}=req.body;
    const hashedPassword = await bcrypt.hash(password,10);

    await cookieModel.create({username,password:hashedPassword});
    res.send({message:"User Registered SuccesFully"});
};

// login route

const cookieLogin = async(req,res)=>{
    const {username,password}=req.body;
    console.log(req.body);
    const user = await cookieModel.findOne({username});

    if(!user){
        res.status(400).send({msg:"User not Found"});
    };
    const isMatch = bcrypt.compare(password,user.password);
    if(!isMatch){
        res.status(400).send({msg:"Invalid Creanditals"});
    };

    res.cookie("authToken",user._id.toString(),{
        httponly:true,
        secure:false,
        samesite:"lax"
    });
    res.send({msg:"Login SuccesFully !!"})
        
};

// Profile Route (protected)


const cookieProfile = async(req,res)=>{
    const {cookieToken}=req.body;
     const user = await cookieModel.findById(authToken).select("-password");
      res.send(user);


    if (!cookieToken){
        res.status(401).send({msg:"NOt Authenticated"});
    }
};

// Logout Route 

const cookieLogout = async(req,res)=>{
    res.clearCookie("cookieToken");
    res.send({msg:"logged out Succesfully"});
};

module.exports = {
    cookieRegistration,
    cookieLogin,
    cookieProfile,
    cookieLogout,
}
const ProductModel = require("../models/productModel");
const UserModel = require("../models/userModel");
const brandDisplay = async (req, res) => {
    const product = await ProductModel.find();
    res.send(product);
}

const userRegistration = async (req, res) => {
    const { name, email, password, contact, city, shippingadd, pincode } = req.body;
    const product = await UserModel.create({
        name: name,
        email: email,
        password: password,
        contact: contact,
        city: city,
        shippingadd: shippingadd,
        pincode: pincode
    })
    res.send("User Created!!!");
}

const userLogin =async(req, res)=>{
    const { email , password} = req.body;
    const user = await UserModel.findOne({email:email});

      if (!user){
         res.status(401).send({msg:"Invalid Email Id!"});
      }

      if (user.password!=password)
      {
          res.status(401).send({msg:"Invalid Password!"});
      }
      
      res.status(200).send({user:user, msg:"You are Succesfully Login!!!"});
}

module.exports = {
    brandDisplay,
    userRegistration,
    userLogin
}
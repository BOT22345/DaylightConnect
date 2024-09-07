import User from "../models/usermodel.js";
import bcrypt from "bcryptjs"

export const loginUser=(req,res)=>{
    res.send("login user");
}
export const  signupUser=async (req,res)=>{
    try{
        const {fullname,username,password,confirmPassword,gender}=req.body;

        if(password!==confirmPassword){
            return res.status(400).json({error:"Password doesn't matched"})
        }
        
        const user=await User.findOne({username});
        
        if(user){
            return res.status(400).json({error:"Exisiting user found"})
        }

        //password hashing 
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)

        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser=new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilepic: gender ==="male" ? boyProfilePic : girlProfilePic 
        })

        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            fullname:newUser.fullname,
            username:newUser.username,
            profilepic:newUser.profilepic
        })

    }catch(error){
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"internal server error "})
    }
}
export const logoutUser=(req,res)=>{
    res.send("logout user");
}
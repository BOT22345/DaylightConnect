import User from "../models/usermodel.js";
import bcrypt from "bcryptjs"
import generateTokenandSetCookie from "../utils/generateToken.js";


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

        if(newUser){
            //Generate JWT token here 
            generateTokenandSetCookie(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                fullname:newUser.fullname,
                username:newUser.username,
                profilepic:newUser.profilepic
            })
        }
        else{
            res.status(400).json({error:"Invalid user data"});
        }
       

    }catch(error){
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"internal server error "})
    }
}

export const loginUser=async (req,res)=>{
 try {
    
    const {username,password}=req.body; 
    const user=await User.findOne({username});
    const isPasswordCorrect=await bcrypt.compare(password, user?.password || "");
    
    if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"Invalid username or password"});
    }

    generateTokenandSetCookie(user.id,res);
    res.status(200).json({
        _id:user._id,
        fullname:user.fullname,
        username:user.username,
        profilepic:user.profilepic
    })

 } catch (error) {
    console.log("Error in login controller",error.message);
    res.status(500).json({error:"internal server error "})
 }
}

export const logoutUser=(req,res)=>{
    try {
        
        res.cookie("jwt","",{maxAge:0,})
        res.status(200).json({message:"logout successfully"})

    } catch (error) {
        console.log("Error in logout controller",error.message);
        res.status(500).json({error:"internal server error "})
    }
}
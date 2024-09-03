export const loginUser=(req,res)=>{
    res.send("login user");
}
export const  signupUser=async (req,res)=>{
    try{
        const {fullName,userName,password,confirmPassword,gender}=req.body;
    }catch(error){

    }
}
export const logoutUser=(req,res)=>{
    res.send("logout user");
}
import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs,setInputs]=useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  });

  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs,gender})
  }
  const {loading,signup}=useSignup();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(inputs) 
    await signup(inputs)
  }
  return (
  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdroup-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Sign Up <span className='text-blue-500 p-1'>DayLightConnect</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>
            <span className="text-base label-text mt-2">Full Name</span>
          </label>
          <input type="text" placeholder="Your Full Name" value={inputs.fullname} onChange={(e)=>setInputs({...inputs,fullname:e.target.value})} className='w-full input-bordered h-10'></input>
        </div>

        <div> 
          <label className='label'>
            <span className="text-base label-text mt-2">Username</span>
          </label>
          <input type="text" placeholder="Your First Name" value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})} className='w-full input-bordered h-10'></input>
        </div>

        <div> 
          <label className='label'>
            <span className="text-base label-text mt-2">Password</span>
          </label>
          <input type="password" placeholder="Your Password" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} className='w-full input-bordered h-10'></input>
        </div>

        <div> 
          <label className='label'>
            <span className="text-base label-text mt-2">Confrim Password</span>
          </label>
          <input type="password" placeholder="Confirm Your Password" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} className='w-full input-bordered h-10'></input>
        </div>

        <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}></GenderCheckBox>

        <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          Already have an account?
        </Link>

        <div> 
          <button className='btn btn-block btn-sm mt-2'>SignUp</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUp
import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdroup-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Sign Up <span className='text-blue-500 p-1'>DayLightConnect</span>
      </h1>

      <form>
        <div>
          <label className='label'>
            <span className="text-base label-text mt-2">Full Name</span>
          </label>
          <input type="text" placeholder="Your Full Name" className='w-full input-bordered h-10'></input>
        </div>

        <div> 
          <label className='label'>
            <span className="text-base label-text mt-2">Username</span>
          </label>
          <input type="text" placeholder="Your First Name" className='w-full input-bordered h-10'></input>
        </div>

        <div> 
          <label className='label'>
            <span className="text-base label-text mt-2">Password</span>
          </label>
          <input type="text" placeholder="Your Password" className='w-full input-bordered h-10'></input>
        </div>

        <div> 
          <label className='label'>
            <span className="text-base label-text mt-2">Confrim Password</span>
          </label>
          <input type="text" placeholder="Confirm Your Password" className='w-full input-bordered h-10'></input>
        </div>

        <GenderCheckBox></GenderCheckBox>

        <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          Already have an account?
        </a>

        <div> 
          <button className='btn btn-block btn-sm mt-2'>SignUp</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUp
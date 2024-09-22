import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';


const SearchInput = () => {
  const [search,setSearch]=useState();
  const {setSelectedCoversations}=useConversation();
  const {conversations}=useConversation()

  const handleSubmit=()=>{
    e.preventDefault();
    if(!search){
      return;
    }
    if(search.length <3){
      return toast.error('Serach term must be at least 3 characters long');
    }

    const conversation=conversations.find((c)=>c.fullname.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedCoversations(conversation)
      setSearch('')
    }else{
      toast.error("no such user found")
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search Here' className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        ></input>
        <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'></IoSearchSharp>
        </button>
    </form>
  )
}

export default SearchInput
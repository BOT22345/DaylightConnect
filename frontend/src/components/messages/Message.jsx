import React from 'react'
import {useAuthContext} from "../../context/AuthContext.jsx"
import useConversation from '../../zustand/useConversation.js';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation}=useConversation()
  const fromMe=message.senderId===authUser._id; 
  const chatClassname =fromMe?'chat-end':'chat-start'
  const profilePics=fromMe ? authUser.profilepic : selectedConversation?.profilepic
  console.log("Auth User Profile Pic:", authUser.profilepic);
console.log("Selected Conversation Profile Pic:", selectedConversation?.profilePic);

  const bubbleBgColor=fromMe ? 'bg-blue-500': ""
  return (
    <div className={`chat ${chatClassname}`}>
        <div className='chat-image avatar'> 
            <div className='w-10 rounded-full'>
                <img
                alt="message container chat icon"
                src={profilePics}
                />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
        <div className={`chat-footer opacity-100 text-xs flex gap-1 items-center text-cyan-400`}>{message.createdAt}</div>
    </div>
  )
}

export default Message
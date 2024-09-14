import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
    const nochatselected=true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {nochatselected ? <NoChatSelected></NoChatSelected> : (
            <>
            <div className='bg-slate-500 px-4 oy-2 mb-2'>
                <span className='label-text'>To:</span>{" "}
                <span className='text-indigo-900 font-bold'>Nayan</span>
            </div>
            
            <Messages></Messages>
            <MessageInput></MessageInput>
        </>
        )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected=()=>{
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-1 text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome To DayLightConnect</p>
                <p>Select chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center'></TiMessages>
            </div>
        </div>
    );
};
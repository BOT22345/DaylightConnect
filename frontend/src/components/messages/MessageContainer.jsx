import React from 'react'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        <>
            <div className='bg-slate-500 px-4 oy-2 mb-2'>
                <span className='label-text'>To:</span>{" "}
                <span className='text-indigo-900 font-bold'>Nayan</span>
            </div>
            
            <Messages></Messages>
            {/* <MessageInput></MessageInput> */}
        </>
    </div>
  )
}

export default MessageContainer
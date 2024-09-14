import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end '>
        <div className='chat-image avatar'> 
            <div className='w-10 rounded-full'>
                <img
                alt="message container chat icon"
                src="https://avatar.iran.liara.run/public"
                />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! what's up</div>
        <div className={`chat-footer opacity-100 text-xs flex gap-1 items-center text-cyan-400`}>12:00</div>
    </div>
  )
}

export default Message
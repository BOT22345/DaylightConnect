import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const {loading,conversations}=useGetConversations();
  console.log(conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {loading ? <span className='loading loading-spinner mx-auto'></span>: null}
    </div>
  )
}

export default Conversations
import Message from "./Message"
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'

const Messages = () => {
  const { messages, loading } = useGetMessages()
  return (
    <div className='px-4 flex-1 overflow-auto '>
        
      {!loading && messages.length > 0 && messages.map((message) => (
        <Message key={message._id} message={message}/>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}></MessageSkeleton>)}

      {!loading && messages.length === 0 && (
        <p className='text-center text-white'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages
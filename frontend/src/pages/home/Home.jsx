import React from 'react'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar></Sidebar>
      {/* <MessageContainer></MessageContainer> */}
    </div>
  )
}

export default Home
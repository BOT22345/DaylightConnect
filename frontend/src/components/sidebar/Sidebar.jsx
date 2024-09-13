import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <SearchInput></SearchInput>
        <div className='divider px-3'></div>
        <Conversations></Conversations>
        <Logout></Logout>
    </div>
  )
}

export default Sidebar
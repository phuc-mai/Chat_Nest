import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3>Chat Nest</h3>
      <div className='user'>
        <img src="/assets/profile.png" alt='profile-photo'/>
        <h4>Phuc Mai</h4>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
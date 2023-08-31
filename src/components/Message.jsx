import React from 'react'

const Message = () => {
  return (
    <div className='message'>
      <div className='message_contact'>
        <img src='/assets/profile.png'/>
        <p>Just Now</p>
      </div>

      <div className='message_content'>
        <p>Good morning! How are you today?</p>
        <img />
      </div>
    </div>
  )
}

export default Message
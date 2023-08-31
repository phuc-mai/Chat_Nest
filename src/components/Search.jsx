import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='search_form'>
        <input type='text' placeholder='Find a contact'/>
      </div>
      <div className='search_contact'>
        <img src='/assets/profile.png' alt='profile-photo'/>
        <h4>Phuc Mai</h4>
      </div>
    </div>
  )
}

export default Search
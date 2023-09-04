import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <h3>Chat Nest</h3>
      <div className='user'>
        <img src={currentUser.photoURL} alt='profile-photo'/>
        <h4>{currentUser.displayName}</h4>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import './Profile.css'
import Creater from '../../Components/Creater/Creater'
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar'
import CreaterVideo from '../../Components/Creater/CreaterVideo/CreaterVideo'
const Profile = ({sidebar}) => {
  return (
    <div>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
      <Creater/>
      <CreaterVideo/>
      </div>
    </div>
  )
}

export default Profile
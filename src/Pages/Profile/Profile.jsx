import React from 'react'
import './Profile.css'
import Creater from '../../Components/Creater/Creater'
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar'
const Profile = ({sidebar}) => {
  return (
    <div>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
      <Creater/>
      </div>
    </div>
  )
}

export default Profile
import React from 'react'
import Badges from '../../components/badge/Badges'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'




const DisplayBadges = () => {
  return (
    <div>
    <div className="list" style={{backgroundColor: " white"}}>
      <SideBar />
      <div className="listContainer" style={{marginLeft:'15%'}}>
        <NavBar />
       <Badges />
      </div>
    </div>
  </div>
  )
}

export default DisplayBadges

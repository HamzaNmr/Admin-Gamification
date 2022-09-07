import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import Group from '../../components/group/Group'



const DisplayGroup = () => {
  return (
    <div>
    <div className="list" style={{backgroundColor: " white"}}>
      <SideBar />
      <div className="listContainer" style={{marginLeft:'15%'}}>
        <NavBar />
       <Group />
      </div>
    </div>
  </div>
  )
}

export default DisplayGroup

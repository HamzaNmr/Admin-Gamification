import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RewardComponent from '../../components/reward/RewardComponent'
import SideBar from '../../components/SideBar/SideBar'


const Reward = () => {
  return (
    <div>
    <div className="list" style={{backgroundColor: " white"}}>
      <SideBar />
      <div className="listContainer" style={{marginLeft:'15%'}}>
        <NavBar />
       <RewardComponent />
      </div>
    </div>
  </div>
  )
}

export default Reward

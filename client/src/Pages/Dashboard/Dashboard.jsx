import React from 'react';
import LateastUsers from '../../components/LateastUsers/LateastUsers';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import Widgets from '../../components/Widgets/Widgets';
import './dashboard.scss'


const Dashboard = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='homeContainer'>
        <NavBar />
       <div className="widgets">
       <Widgets type="user"/>
        <Widgets type="task"/>
        <Widgets type="reward"/>
        <Widgets type="group"/> 
        <Widgets type="badges"/> 
       </div>
       <div className="charts">
        {/* <Chart /> */}
       </div>
       <div className="listContainer">
        <div className="listTitle">Latest Users</div>
        <LateastUsers />
       </div>
      </div>
    </div>
  )
}

export default Dashboard
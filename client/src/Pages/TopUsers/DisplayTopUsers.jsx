import React from 'react';
import './TopUsers.scss';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import TopUsers from '../../components/TopUsers/TopUsers';

const DisplayTopUsers = () => {
  return (
    <div>
      <div className="list">
        <SideBar />
        <div className="listContainer">
          <NavBar />
          <h1 className='title'>See Top 3 Users</h1>
          <div className="listcontainer">
          <div className="listTitle"> Users</div>
          <TopUsers />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayTopUsers

import React from 'react';
import './DisplayUsers.scss'
import SideBar from './../../components/SideBar/SideBar'
import NavBar from './../../components/NavBar/NavBar'
import TableUsers from '../../components/TableUsers/TableUsers';



const DisplayUsers = () => {
  return (
    <div>
      <div className="list">
        <SideBar />
        <div className="listContainer">
          <NavBar />
          <h1 className='title'>See All Users</h1>
          <div className="listcontainer">
          <div className="listTitle"> Users</div>
          <TableUsers />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayUsers

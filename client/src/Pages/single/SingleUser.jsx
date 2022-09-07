import React from 'react';
import SideBar from './../../components/SideBar/SideBar'
import NavBar from './../../components/NavBar/NavBar'
import DetailsUser from './../../components/DetailsUsers/DetailsUser'
import './singleUser.scss';

const SingleUser = () => {
  return (
    <div className='single'>
        <SideBar />
        <div className='singleContainer'>
            <NavBar />
            <DetailsUser />
        </div>      
    </div>
  )
}

export default SingleUser

import React from 'react';
import './SideBar.scss';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import StarsIcon from '@mui/icons-material/Stars';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const history = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
    history('/');
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className='sidebar'>
      <div className='top'>
       <Link to='/dashboard' className='Link'><span className='logo'>Gamification </span></Link>
   
      </div>
      <hr />
     

      <div className='center'>
        <ul>
          <p className="title">Main</p>
          <Link to='/dashboard' className='Link'>
        <li>
          <DashboardIcon className='icon' />
           <span>Dashboard</span>
          </li>
          </Link>

            
          
          <p className="title">Reward</p>
          <Link to='/reward' className='Link'>
          <li>
            <StarsIcon className='icon'/>
            <span> Rewards</span>
          </li>
          </Link>
         
          <p className="title">TO DO</p>
          <Link to='/task' className='Link'>
          <li>
            <AssignmentIcon className='icon'/>
            <span> task </span>
          </li>
          </Link>

          <p className="title">Community</p>
          <Link to='/group' className='Link'>
          <li>
            <AssignmentIcon className='icon'/>
            <span> groups </span>
          </li>
          </Link>

          <p className="title">Badges</p>
          <Link to='/badges' className='Link'>
          <li>
            <AssignmentIcon className='icon'/>
            <span> badges </span>
          </li>
          </Link>
           
          {/* <Link to='' className='Link'>
          <li>
            <QuizIcon className='icon'/>
            <span> Quiz</span>
          </li>
          </Link> */}

          <p className="title">List</p>
              <Link to='/users' className='Link'> 
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Users</span>
          </li>
          </Link>

          <Link to='/TopUsers' className='Link'>
        
        <li>
        <EmojiEventsIcon className='icon' />
          <span> Top Users</span>
        </li>
        </Link>
            
        <p className="title">Stats</p>
        <Link to='/barChart' className='Link'>
          <li>
            <BarChartIcon className='icon'/>
            <span> Bar Chart</span>
          </li>
          </Link>

         



          <p className="title">Profile</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span> View Profile</span>
          </li>

          <li>
            <LogoutIcon className='icon'/>
           <span onClick={handleClick}> LogOut</span> 
          </li>
         

        </ul>
      </div>
          
    </div>
  )
}

export default SideBar

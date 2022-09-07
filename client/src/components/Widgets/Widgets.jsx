import React, {useState,useEffect} from 'react';
import './Widgets.scss';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { Link } from "react-router-dom";

const Widgets = ({type}) => {
  const [countUser, setCountUser] = useState();

  
  const countUsers = async()=>{
    const count = await fetch("http://localhost:5000/user/countUsers",{
        method:"GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    const data = await count.json()
   
    setCountUser(data);
    
}
const [countTask, setCountTask] = useState();

const countTasks  = async ()=>{
  const count = await fetch("http://localhost:5000/task/countTasks",{
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    }
})

const data = await count.json()

setCountTask(data);
  
}

const [countReward,setCountReward] = useState();

const countRewards  = async ()=>{
  const count = await fetch("http://localhost:5000/reward/countReward",{
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    }
})

const data = await count.json()

setCountReward(data);
  
}

const [countGroupp,setCountGroup] = useState();

const countGroup  = async ()=>{
  const count = await fetch("http://localhost:5000/community/countGroup/count",{
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    }
})

const data = await count.json()

setCountGroup(data);
  
}


const [countBadges,setCountBadges] = useState();

const countBadge  = async ()=>{
  const count = await fetch("http://localhost:5000/badges/count",{
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    }
})

const data = await count.json()

setCountBadges(data);
  
}







useEffect(() => {
 countUsers();
 countTasks();
 countRewards();
 countGroup();
 countBadge();
}, [])


  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: <Link to='/users'  className='Link'>See All Users</Link>,
        count: countUser,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "task":
      data = {
        title: "TASKS",
        link:<Link to='/task' className='Link'>"View All Tasks"</Link> ,
        count : countTask,
        icon: (
          <PostAddIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
      case "reward":
        data = {
          title: "REWARDS",
          link: <Link to='/reward'  className='Link'> "View All Rewards" </Link>,
          count: countReward,
          icon: (
            <ReportProblemOutlinedIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
        case "group":
          data = {
            title: "GROUPS",
            link: <Link to='/group'  className='Link'> "View All Groups" </Link>,
            count: countGroupp,
            icon: (
              <ReportProblemOutlinedIcon
                className="icon"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
              />
            ),
          };
          break;
          case "badges":
            data = {
              title: "BADGES",
              link: <Link to='/badges'  className='Link'> "View All Badges" </Link>,
              count: countBadges,
              icon: (
                <ReportProblemOutlinedIcon
                  className="icon"
                  style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                />
              ),
            };
            break;
    default:
      break;
    }
  return (
    <>
    <h1></h1>
    <div className="widget">
   
    <div className="left">
      <span className="title">{data.title}</span>
      <span className="counter">
      {data.count}
      </span>
      
 <span className="link">{data.link}</span> 
    </div>
    <div className="right">
      <div className="percentage positive">
    {data.icon}
      </div>
   
    </div>
  </div>


 




 


  </>
  )
}

export default Widgets

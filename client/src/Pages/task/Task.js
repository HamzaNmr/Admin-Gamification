import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import TaskComponent from '../../components/task/TaskComponent'

const Task = () => {
  return (
    <div>
    <div className="list" style={{backgroundColor: " white"}}>
      <SideBar />
      <div className="listContainer" style={{ marginLeft: '15%'}}>
        <NavBar />
       <TaskComponent />
      </div>
    </div>
  </div>
  )
}

export default Task

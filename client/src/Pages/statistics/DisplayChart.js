import React from 'react'
import Chart from '../../components/chart/Chart'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import './displayChart.scss'

const DisplayChart = () => {
  return (
    <div>
       <div className='single' >
        <SideBar />
        <div className='singleContainer'>
            <NavBar />
            <h1 style={{textAlign:"Center",marginBottom:"3%",marginTop:'1%',color:'rgb(67, 40, 116)'}}> Each users with here level</h1>
            <Chart style={{width:'80%'}} />
        </div>      
    </div>
    </div>
  )
}

export default DisplayChart

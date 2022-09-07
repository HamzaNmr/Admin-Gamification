import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
  
)

const Chart = () => {

  
const [chartData,setChartData] = useState();

  
const getData = async () => {

  const get = await fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
  });

  const data = await get.json();
 

  if (get.status === 422 || !data) {
      console.log("error ");

  } else {
      setChartData(data)
    
     
      
  }
}
useEffect(() => {
getData();

}, [])


const  data = {
  labels:  chartData?.map(x => x.email),
  datasets: [
    {
      label:'level of thiccness',
      data: chartData?.map(x => x.level),
      backgroundColor: [
        'rgb(67, 40, 116)',
        'rgb(67, 40, 116)',
        'rgb(67, 40, 116)',
        'rgb(67, 40, 116)',
        'rgb(67, 40, 116)'
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
     
    }]
};

const options = {
  maintainAspectRatio: false,
  scales: {
  },
  legend: {
    labels:{
      fontSize: 26
    }
  }
}

  return (
    <div>
      <Bar 
      data={data}
      height={400}
      options={options}
      />
    </div>
  )
}

export default Chart

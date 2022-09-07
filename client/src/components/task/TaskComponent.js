import React, { useState, useEffect } from 'react'
import "./task.css"
import ClearIcon from '@mui/icons-material/Clear';


const Task = () => {

  const [tasks, setTasks] = useState(null)

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/task', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();

    if (response.status === 422 || !data) {
      console.log("error ");

    } else {
    
      setTasks(data)


    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])


  const [deleteData, setDeleteData] = useState();


  const handleClick = async (id) => {
    const response = await fetch(`http://localhost:5000/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()

    if (response.ok) {
      setDeleteData(data);
      fetchTasks();
    }
  }

  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [falseChoice, setFalseChoice] = useState('');
  const [trueChoice, setTrueChoice] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [coin, setCoin] = useState();
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title,question,falseChoice, trueChoice, description , link , coin }

    const response = await fetch('http://localhost:5000/task', {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()

    if (!response.ok) {
      setError(data.error)
    }
    if (response.ok) {
      setTitle('')
      setQuestion('')
      setFalseChoice('')
      setTrueChoice('')
      setDescription('')
      setLink('')
      setCoin('')
      setError(null);
      fetchTasks()
    }
  }
  const [query, setQuery] = useState("")


  return (
    <div className="homee">
      <div className="workouts">
        {tasks && tasks.filter((task) => task.title.toLowerCase().includes(query)
        ).map((task,index) => (


          <div className="workout-details" key={index}>
            <h4 style={{marginBottom:'2%'}}> {task.title}</h4>
          
            <p> {task.question  && <span style={{marginBottom:'1%',color:'black'}}><span style={{color:'rgb(67, 40, 116)',fontWeight:'bold'}}>question :</span> {task.question} </span> }  </p>
            
        
            <p>{task.falseChoice && <span style={{marginBottom:'1%',color:"black"}}><span style={{color:'rgb(67, 40, 116)',fontWeight:'bold'}}>falseChoice :</span>{task.falseChoice}</span>}</p>
            <p>{task.trueChoice && <span style={{marginBottom:'1%',color:"black"}}><span style={{color:'rgb(67, 40, 116)',fontWeight:'bold'}}>trueChoice : </span>{task.trueChoice} </span> }</p>

            <p><span style={{marginBottom:'1%',color:"black"}}><span style={{color:'rgb(67, 40, 116)',fontWeight:'bold'}}>Description :</span> {task.description}</span></p>
            <p style={{marginBottom:'1%'}}><a href={task.link}>{task.link} </a> </p>
            <p style={{marginBottom:'1%',color:"black"}}> <span style={{marginBottom:'1%',color:"black"}}><span style={{color:'rgb(67, 40, 116)',fontWeight:'bold'}}>Coin :</span>{task.coin} </span></p>
            {/* <p>{task.createdAt}</p> */}
            <ClearIcon className='span' onClick={() => handleClick(task._id)}></ClearIcon>
          </div>
        ))}
      </div>
      <div>
        <form className='create' onSubmit={handleSubmit}>
          <h2>Search By Title</h2>
          <input
            type='text'
            placeholder='Search ...'
            className='search'
            onChange={(e) => setQuery(e.target.value)}
          />


          <h3 style={{marginBottom:"3%"}}> Add a New Task </h3>

          <label>Task Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

    <label>Question</label>
          <input
            type='text'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

<label>falseChoice</label>
          <input
            type='text'
            value={falseChoice}
            onChange={(e) => setFalseChoice(e.target.value)}
          />


<label>trueChoice</label>
          <input
            type='text'
            value={trueChoice}
            onChange={(e) => setTrueChoice(e.target.value)}
          />

          <label>Description</label>
          <textarea
          cols='36'
          rows='5'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Link tutorial</label>
          <input
            type='text'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
         

          <label>Coin</label>
          <input
            type='text'
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />

          <button className='btnn'> Add New Task</button>

        </form>
      </div>


    </div>
  )
}

export default Task

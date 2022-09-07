import React, { useState, useEffect } from 'react'
import "./group.css"
import ClearIcon from '@mui/icons-material/Clear';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Group = () => {
 const [groups, setRewards] = useState()

  const fetchGroups = async () => {
    const response = await fetch('http://localhost:5000/community', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();


    if (response.status === 422 || !data) {
      console.log("error ");

    } else {
      setRewards(data)


    }
  }

  useEffect(() => {
    fetchGroups()
  }, [])


  const [deleteData, setDeleteData] = useState();


  const handleClick = async (id) => {
    const response = await fetch(`http://localhost:5000/community/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()

    if (response.ok) {
      setDeleteData(data);
      fetchGroups();
    }
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [type, setType] = useState();
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, description,imageUrl, type}

    const response = await fetch('http://localhost:5000/community/create', {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()

  
    if (response.ok) {
      setTitle('')
      setDescription('')
      setImageUrl('')
   
      setType('')
   
      fetchGroups()
    }
  }


  const [query, setQuery] = useState("")
  return (
    <div className="homee">
      <div className="rewards">
        {groups && groups.filter((group) => group.title.toLowerCase().includes(query)
        ).map((group,index) => (
            
            <Card key={index} className='card' sx={{ maxWidth: 445 , minHeight:'5.5%',margin:'2%',marginTop:'4%',width:'29.3%',color:'rgb(67, 40, 116)',backgroundColor:'white', borderRadius:'18px',boxShadow:'1px 1px 3px rgb(67, 40, 116)'}}>
            <Typography gutterBottom variant="h5" component="div" style={{marginLeft:'3%'}}>
                  {group.title}
                  <ClearIcon  className='clear' onClick={() => handleClick(group._id)}></ClearIcon>
                </Typography>
             
              <CardContent>
              
              <img src={group.imageUrl} className='img' />
                
                <Typography variant="body2" color="rgb(67, 40, 116)" style={{marginTop:"10%"}}>
                description : {group.description}
                </Typography>
                <Typography variant="body2" color="rgb(67, 40, 116)">
                 type : {group.type}
                </Typography>
            

               
               
              </CardContent>
             
          
            </Card>
         
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


          <h3 style={{ marginBottom: "3%" }}> Add a New Reward </h3>

          <label>Group Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Type</label>
          <input
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}
          />

          <label>Description</label>
          <textarea
            cols='36'
            rows='5'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Link Photo</label>
          <input
            type='text'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />


          

          

          <button className='btnn'> Add New Group</button>

        </form>
      </div>


    </div>
  )
}

export default Group

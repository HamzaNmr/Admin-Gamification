import React, { useState, useEffect } from 'react'
import "./badge.css"
import ClearIcon from '@mui/icons-material/Clear';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Badges = () => {
 const [badges, setBadges] = useState()

  const fetchBadges = async () => {
    const response = await fetch('http://localhost:5000/badges', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();


    if (response.status === 422 || !data) {
      console.log("error ");

    } else {
      setBadges(data)
    }
  }

  useEffect(() => {
    fetchBadges()
  }, [])


  const [deleteData, setDeleteData] = useState();


  const handleClick = async (id) => {
    const response = await fetch(`http://localhost:5000/badges/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()

    if (response.ok) {
      setDeleteData(data);
      fetchBadges();
    }
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, description,imageUrl}

    const response = await fetch('http://localhost:5000/badges/create', {
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
      fetchBadges()
    }
  }

  const uploadImage = async (e)=> {
    const file=e.target.files[0]
  const base64 =  await converBase64(file)
  setImageUrl(base64)
  
  };

  const converBase64 = (file) => {
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = (() =>{
        resolve(fileReader.result)
      });

      fileReader.onerror = ((error) =>{
        reject(error)
      })
    })
  }


  const [query, setQuery] = useState("")
  return (
    <div className="homee">
      <div className="rewards">
        {badges && badges.filter((badge) => badge.title.toLowerCase().includes(query)
        ).map((badge,index) => (
            
            <Card key={index} className='card' sx={{ maxWidth: 445 , minHeight:'5.5%',margin:'2%',marginTop:'4%',width:'29.3%',color:'rgb(67, 40, 116)',backgroundColor:'white', borderRadius:'18px',boxShadow:'1px 1px 3px rgb(67, 40, 116)'}}>
            <Typography gutterBottom variant="h5" component="div" style={{marginLeft:'3%'}}>
                  {badge.title}
                  <ClearIcon  className='clear' onClick={() => handleClick(badge._id)}></ClearIcon>
                </Typography>
             
              <CardContent>
              
              <img src={badge.imageUrl} className='img' />
                
                <Typography variant="body2" color="rgb(67, 40, 116)" style={{marginTop:"10%"}}>
                description : {badge.description}
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

          <label>Badge Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          {/* <input
            type='text'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          /> */}

          <input type='file' onChange={(e) => {
            uploadImage(e)
          }} />


          

          

          <button className='btnn'> Add New Badges</button>

        </form>
      </div>


    </div>
  )
}

export default Badges

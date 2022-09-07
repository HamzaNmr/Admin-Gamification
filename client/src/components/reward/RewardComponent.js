import React, { useState, useEffect } from 'react'
import "./reward.css"
import ClearIcon from '@mui/icons-material/Clear';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const RewardComponent = () => {

  const [rewards, setRewards] = useState(null)

  const fetchRewards = async () => {
    const response = await fetch('http://localhost:5000/reward', {
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
    fetchRewards()
  }, [])


  const [deleteData, setDeleteData] = useState();


  const handleClick = async (id) => {
    const response = await fetch(`http://localhost:5000/reward/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()

    if (response.ok) {
      setDeleteData(data);
      fetchRewards();
    }
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [coin, setCoin] = useState();
  const [permissionLevel, setPermissionLevel] = useState();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, description, photo, coin, permissionLevel }

    const response = await fetch('http://localhost:5000/reward', {
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
      setDescription('')
      setPhoto('')
      setPermissionLevel('')
      setCoin('')
      setError(null);
      fetchRewards()
    }
  }
  const uploadImage = async (e)=> {
    const file=e.target.files[0]
  const base64 =  await converBase64(file)
  setPhoto(base64)
  
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
        {rewards && rewards.filter((reward) => reward.title.toLowerCase().includes(query)
        ).map((reward,index) => (
            
            <Card key={index} className='card' sx={{ maxWidth: 445 , minHeight:'5.5%',margin:'2%',marginTop:'4%',width:'29.3%',color:'rgb(67, 40, 116)',backgroundColor:'white', borderRadius:'18px',boxShadow:'1px 1px 3px rgb(67, 40, 116)'}}>
            <Typography gutterBottom variant="h5" component="div" style={{marginLeft:'3%',}}>
                  {reward.title}
                  <ClearIcon  className='clear' onClick={() => handleClick(reward._id)}></ClearIcon>
                </Typography>
             
              <CardContent>
              {/* <CardMedia
              className='img'
                component="img"
                height="140" 
                src = {reward.photo}
                alt="green iguana"
              /> */}
              <img src={reward.photo} className='img' />
                
                <Typography variant="body2" color="rgb(67, 40, 116)" style={{marginTop:"10%"}}>
                description : {reward.description}
                </Typography>
                <Typography variant="body2" color="rgb(67, 40, 116)">
                 coin : {reward.coin}
                </Typography>

                <Typography variant="body2" color="rgb(67, 40, 116)">
                level : {reward.permissionLevel}
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

          <label>Reward Title</label>
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

          <label>Coin</label>
          <input
            type='text'
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />

          <label>Permission Level</label>
          <input
            type='Number'
            value={permissionLevel}
            onChange={(e) => setPermissionLevel(e.target.value)}
          />

          <button className='btnn'> Add New Reward</button>

        </form>
      </div>


    </div>
  )
}

export default RewardComponent

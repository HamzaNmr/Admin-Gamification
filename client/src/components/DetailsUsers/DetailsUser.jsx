import './detailsUser.scss'
import React, { useEffect, useState } from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const DetailsUser = () => {

    const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

    const { id } = useParams("");
    




    const getdata = async () => {

        const res = await fetch(`http://localhost:5000/user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
  

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
         
        }
    }
  
    const [rewardss, setRewards] = useState()

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
        getdata();
        fetchRewards();
        fetchBadges();
    }, [])
  
       
    const rewardArray = getuserdata?.rewards  ;
    var finalReward = (rewardArray && rewardArray !=="undefined" && rewardArray !== null ) ? rewardss?.filter(reward =>rewardArray?.indexOf(reward._id) !== -1): [];

    const badgesArray = getuserdata?.badges  ;
    var finalBadges = (badgesArray && badgesArray !=="undefined" && badgesArray !== null ) ? badges?.filter(badge =>badgesArray?.indexOf(badge._id)    !== -1): [];


    

    return (
        <> 
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={getuserdata.profile} alt="" />

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="profile-head">
                               
                            <p> Name : <span> {getuserdata.firstName} {getuserdata.lastName}</span> </p>
                                <p className="">Username : <span>{getuserdata.username}</span></p>
                                <p className="">Email : <span> {getuserdata.email}</span></p>            
                                <p className="">Bio : <span>{getuserdata.bio} </span></p>



                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience:</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{!getuserdata.experience? 0 : getuserdata.experience}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Level:</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{!getuserdata.level? 0 : getuserdata.level}   </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Coin:</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{!getuserdata.coin ? 0 : getuserdata.coin}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>badges:</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{ getuserdata?.badges?.length}</p>
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-md-6">
                                            <label>experience:</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{!getuserdata.experience? 0 : getuserdata.experience}</p>
                                        </div>
                                    </div> */}
                                  
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='row mt-5'>
    
      
                    <div className='col-md-7'>
                           <span className='titlee'> Rewards </span>
                          
                           <div className="rewards" >
        {finalReward && finalReward.map((reward,i) => (

          
            <Card key={i} className='card' sx={{ maxWidth: 245 , minHeight:'2.5%',margin:'2%',marginTop:'4%',width:'25.3%',color:'rgb(67, 40, 116)',backgroundColor:'white', borderRadius:'18px',boxShadow:'1px 1px 3px rgb(67, 40, 116)'}}>
            
              
             
              <CardContent>
            
              <img src={reward.photo} className= 'img' />

              </CardContent>
            
            </Card>
           
        ))}
      </div>
                        </div>

                        <div className='col-md-5'>
                           <span className='titlee'> Badges </span>
                          
                           <div className="rewards" >
        {finalBadges && finalBadges.map((badge,i) => (

          
            <Card key={i} className='card' sx={{  height:'25%',margin:'2%',marginTop:'4%',width:'35.3%',color:'rgb(67, 40, 116)',backgroundColor:'white', borderRadius:'18px',boxShadow:'1px 1px 3px rgb(67, 40, 116)'}}>
            
              
             
              <CardContent>
            
              <img src={badge.imageUrl} className= 'img' />

              </CardContent>
            
            </Card>
           
        ))}
      </div>
                        </div>
                       

                        
                    </div>


                </form>
            </div>
        </>
    )
}

export default DetailsUser

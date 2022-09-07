import React,{useState,useEffect} from 'react';
import './tableUsers.scss';
// import { DataGrid } from '@mui/x-data-grid';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



const TableUsers = () => {
  const {id} = useParams();
  const [userData, setUserData] = useState([]);


    const getUsers = async () => {

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
            setUserData(data)
           

        }
    }
    


    const [badgess, setBadges] = useState()

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
      getUsers();
      fetchBadges();
     
  }, [])



  const [delt,setDLTdata] =useState();

  const deleteuser = async (id) => {

    const del = await fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const deletedata = await del.json();
 

    if (del.status === 422 || !deletedata) {
        console.log("error");
    } else {
        setDLTdata(deletedata)
        getUsers();
    }

}

const [query, setQuery] = useState("")


const [modal, setModal] = useState(false);
const toggle = () => {
  setModal(!modal)

}

// const initialValue = [
  
// ];
const [array,setArray] = useState([]);
let newArray = array;
const hadnleClick =async (badge) => {
 

    const badgesss = {array}

    const response = await fetch(`http://localhost:5000/user/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(badgesss),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()

    if (!response.ok) {
    console.log('error')
    }
    if (response.ok) {
      console.log(badge._id)
      newArray.push(badge._id)
    setArray(newArray)
    console.log(array)
      
    
  }

 
}





   return (
    <>
   <input type='text'  onChange={(e) => setQuery(e.target.value) } placeholder='Search ...' style={{marginLeft:'83.7%' , marginBottom:'1%',marginTop:'-3%',border:'1px solid rgb(67, 40, 116)'}}/>
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow style={{backgroundColor:'rgb(67, 40, 116)'}}>
        <TableCell className="tableCell" style={{color:'white'}}>Id</TableCell>
        <TableCell className="tableCell" style={{color:'white'}}>Profile-Picture</TableCell>
          <TableCell className="tableCell" style={{color:'white'}}>First-Name</TableCell>
          <TableCell className="tableCell" style={{color:'white'}}>Last-Name</TableCell>
          <TableCell className="tableCell" style={{color:'white'}}>Email</TableCell>
          <TableCell className="tableCell" style={{color:'white'}}>Action</TableCell>
        
          
        </TableRow>
      </TableHead>
      <TableBody>
         {userData && userData.filter((user) => user.firstName.toLowerCase().includes(query)
        ).map((user,index) => (
          <TableRow key={index} >
           <TableCell className='tableCell'>{index+1}</TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={user.profile} alt="picture" className="image" />
              </div>
            </TableCell>
            <TableCell className="tableCell">{user.firstName}</TableCell>
            <TableCell className="tableCell">{user.lastName}</TableCell>
            <TableCell className="tableCell">{user.email}</TableCell>
            <TableCell className="tableCell">
            <div className='cellAction'>
            <div className='deleteButton'  onClick={() => setModal(true)}>+ badge</div>
           <Link to={`/${user._id}`}> <div className='viewButton' >View</div></Link>
         <div className='deleteButton' onClick={() => deleteuser(user._id)}>Delete</div>
       </div>
            </TableCell>    
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>


















        {/* modal popup */}
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} >Badges</ModalHeader>
      
     
        <ModalBody >
          
      
        <div className="rewards" >
        {badgess && badgess.map((badge,i) => (

          
            <Card key={i} className='card' sx={{ maxWidth: 245 , minHeight:'2.5%',margin:'2%',marginTop:'4%',width:'28.5%',color:'rgb(67, 40, 116)',backgroundColor:'white', borderRadius:'18px',boxShadow:'1px 1px 3px rgb(67, 40, 116)'}}
             onClick={() => hadnleClick(badge)}
            
            >
                       
          <CardContent>
            
              <img src={badge.imageUrl} className= 'img' />

              </CardContent>
            
            </Card>
           
        ))}
      </div>
        
         

        </ModalBody>
       
         
      
      </Modal>
  </>
  )
 }

export default TableUsers

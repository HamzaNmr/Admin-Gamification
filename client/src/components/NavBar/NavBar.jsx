import React, { useState } from 'react';
import './NavBar.scss';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';




const NavBar = () => {

  const [modal, setModal] = useState(false);
  const [firstName , setFirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()


    const workout = { firstName , lastName ,username,   email , password}

    if(!firstName || !lastName || !username || !email || !password){
      alert('enter full data')
    }
else{
    const response = await fetch('http://localhost:5000/user', {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()

    if (response.ok) {
      setFirstName('')
      setLastName('')
      setUsername('')
      setEmail('')
      setPassword('')  
      console.log('new user added', data)
      setModal(!modal)
     
    }
  }
  }

  const toggle = () => {
    setModal(!modal)
  }
  return (
    <>
      {/* modal popup */}
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} style={{backgroundColor:'rgb(67, 40, 116)',color:'white'}} >Add User</ModalHeader>
      
     
        <ModalBody style={{backgroundColor:'rgb(67, 40, 116)',color:'white'}}>
          
      
          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" name="firstName"  value={firstName}  onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" name="lastName"  value={lastName}   onChange={(e) => setLastName(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>username</label>
            <input type="text" className="form-control" name="username" value={username}   onChange={(e) => setUsername(e.target.value)}/>
          </div>
        
         

        </ModalBody>
        <div style={{margin:'2% 3%'}}>
        <div className="form-group">
            <label>Email</label>
            <input className="form-control" name="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type='password' className="form-control" name='password' value={password}   onChange={(e) => setPassword(e.target.value)}/>
          </div>
          </div>
         
        <ModalFooter>
          <Button style={{backgroundColor:'rgb(67, 40, 116)',color:'white'}} onClick={handleSubmit}>Create</Button>{' '}
          {/* <Button color="danger" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>



      {/* navbar */}

      <div className="navbarr">
        <div className="wrapperr">

          <button className='button' onClick={() => setModal(true)}>Add User</button>


          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon" />
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon
                className="icon"
              // onClick={() => dispatch({ type: "TOGGLE" })}
              />
            </div>
            <div className="item">
              <span style={{ color: "rgb(67, 40, 116)" }}> IT Max <br />Global </span>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQFtf3X3uwoWWw/company-logo_200_200/0/1519952489647?e=2147483647&v=beta&t=3H_K4p769Jh_N16dK_GZXPhsh1ychRTDdOR3UGnRXRo"
                alt=""
                className="avatar"

              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar

import React, { useState, useEffect } from 'react';
import './TobUsers.scss';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



const TopUsers = () => {
  const [userData, setUserData] = useState([]);


  const getTopsUsers = async () => {

    const get = await fetch("http://localhost:5000/user/topUsers", {
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
  useEffect(() => {
    getTopsUsers();

  }, [])
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: 'rgb(67, 40, 116)' }}>
            <TableCell className="tableCell" style={{ color: 'white' }} >Id</TableCell>
            <TableCell className="tableCell" style={{ color: 'white' }}>Profile-Picture</TableCell>
            <TableCell className="tableCell" style={{ color: 'white' }}>First-Name</TableCell>
            <TableCell className="tableCell" style={{ color: 'white' }}>Last-Name</TableCell>
            <TableCell className="tableCell" style={{ color: 'white' }}>Email</TableCell>
            <TableCell className="tableCell" style={{ color: 'white' }}>Level</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user, index) => (
            <TableRow key={index}>
              <TableCell className='tableCell'>{index + 1}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={user.profile} alt="picture" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell">{user.firstName}</TableCell>
              <TableCell className="tableCell">{user.lastName}</TableCell>
              <TableCell className="tableCell">{user.email}</TableCell>
              <TableCell className="tableCell">{user.level}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default TopUsers

import React, { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Sidebar from "./Sidebar";
import Table from 'react-bootstrap/Table';
import InfoCard from "./InfoCard";

export default function AdminHome({ userData }) {

  //setting state
  const [data, setData] = useState([]);
  const currentPage=useRef();



  useEffect(() => {
    currentPage.current=1;
    // getAllUser();
    getPaginatedUsers();
  }, []);


  //fetching all user
  const getAllUser = () => {
    fetch("https://dashboard-buj6.onrender.com/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };


  //deleting user
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("https://dashboard-buj6.onrender.com/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  function getPaginatedUsers(){
    fetch(`https://dashboard-buj6.onrender.com/paginatedUsers?page=${currentPage.current}&limit=5`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.result)
        
       
      });

  }

  return (
    <div className="">
      <div className="" style={{display:"flex", color:"white"}}>
        <div>
        <Sidebar/>
        </div>
        <div style={{width:'100%', marginTop:"1rem"}}>
        <h3>Admin Panel</h3>
        <div style={{marginBottom:"15px"}}>
           <InfoCard title="Number of users" money="02"/>
        </div>
        <Table striped bordered hover variant="dark">
         <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Delete</th>
          </tr>
         </thead>
         <tbody>
            {data.map((i) => {
             if(i.userType === "Admin"){
                return null;
             }
             else{
             return (
               <tr>
                  <td>{i.username}</td>
                 <td>{i.email}</td>
                  <td>{i.userType}</td>
                 <td>
                  <FontAwesomeIcon
                    style={{cursor:"pointer"}}
                    icon={faTrash}
                    onClick={() => deleteUser(i._id, i.username)}
                  />
                </td>
              </tr>
            );}
          })}
          </tbody>
        </Table>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Button, Stack, Typography} from "@mui/material";
import Container from '@mui/material/Container';
import { createTheme} from '@mui/material/styles';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import MyTable from "./Table";
import UTable from "./UTable";



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const Userpage = () => {


    const token = useSelector((state) => state.user.token);
    console.log("This is token",token);


    const [wallet,SetRec] = useState([]);
    const [data,Setdata] = useState({});
    
     const ShowRec = async () => {
      try {
  
        const res = await axios({
          
          url: "https://sandbox.practical.me/api/user/profile",
          method: "get",
          headers: {
            Authorization: `Bearer ${token}` // Send token in the Authorization header
          }
  
        });
       
         if(res.data.isSuccess === true){
          window.alert(res.data.message);
          console.log(res.data.data);
          SetRec(res.data.data.wallet);
          Setdata(res.data.data);
         
          }else{
            console.log("nooo")
          }
        
          
          return;
  
         }

       catch (e) {
        window.alert("ERROR");
        console.error(e);
      }
    };
    useEffect(() => {
        ShowRec();
       
      }, []);


    return ( 
      <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        margin: "100px",
      }}
    > 
     <Box>
      <Typography variant="h2" component="h2">User Page</Typography>
      <Typography variant="h4" component="h2">First Name: {data.first_name}</Typography>
      <Typography variant="h4" component="h2">Surname: {data.sur_name}</Typography>
      <Typography variant="h4" component="h2">Social Auth Type: {data.social_auth_type}</Typography>
      <Typography variant="h4" component="h2">Phone: {data.phone}</Typography>
      <Typography variant="h4" component="h2">Email: {data.email}</Typography>
   
    </Box>
 
   <UTable  rowap={wallet} data={data}/>
   
    </Box>
       
        
     

);
}
 
export default Userpage;
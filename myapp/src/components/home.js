import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Stack, Typography} from "@mui/material";
import Container from '@mui/material/Container';
import { createTheme} from '@mui/material/styles';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

import MealCard from "./MealCard";
import MyTable from "./Table";



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const Home = () => {

    const token = useSelector((state) => state.user.token);
    console.log("This is token",token);


    const [faq,SetRec] = useState([]);
    
     const ShowRec = async () => {
      try {
  
        const res = await axios({
          
          url: "https://sandbox.practical.me/api/faq",
          method: "get",
          headers: {
            Authorization: `Bearer ${token}` // Send token in the Authorization header
          }
  
        });
       
         if(res.data.isSuccess === true){
          window.alert(res.data.message);
          console.log(res.data.data);
          SetRec(res.data.data);
         
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
    <Typography variant="h2" component="h2" > Home Page</Typography>
   <MyTable  rowap={faq}/>
   
    </Box>
       
        
     

);
}
 
export default Home;
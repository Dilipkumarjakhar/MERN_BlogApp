import React from 'react'
import { Typography,Avatar,Box,Card,CardContent,CardHeader,IconButton } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';
// import {useNavigate} from 'react-router-dom';
// import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Blogview = () => {

  const isView=useSelector(state=>state.userView);
  console.log('isView:', isView)
  
  const {state} = useLocation();
  const { title,imageurl,username
    ,avatarname,discription } = state; 
    


    const handelEdit=(e)=>{
      // navigate(`/myBlogs/${probs.blog._id}`)
    }
    const handelDelete=()=>{
  
    }


  return (
    <div>

<Card sx={{
           width:"40%",
           margin:'auto',
           mt:9,mb:5,padding:2,boxShadow:'5px 5px 10px #ccc',
           ":hover":{
               boxShadow:'0.1rem 0.1rem 0.6rem 0.4rem #cecece'
           }}}>


           {/* {isUser && ( */}
             <Box display="flex">
               <IconButton onClick={handelEdit}
               sx={{marginLeft:"auto"}}>
                 <EditTwoToneIcon></EditTwoToneIcon>
               </IconButton>
               <IconButton onClick={handelDelete}>
                 <DeleteSweepTwoToneIcon
                 
                 ></DeleteSweepTwoToneIcon>

               </IconButton>
             </Box>
           {/* )} */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {avatarname}
          </Avatar>
        }
       
        title={title}
        subheader="September 14, 2016"
      />
      
      <CardMedia
        component="img"
        height="auto"
        image={imageurl}
        // image="https://images.pexels.com/photos/51953/mother-daughter-love-sunset-51953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>{username}</b> {":"}{discription}
        </Typography>
      </CardContent>
      
    </Card>
</div>
  )
}
  




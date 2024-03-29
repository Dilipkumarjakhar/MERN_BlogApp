import React from 'react'
import { Typography,Avatar,Box,Card,CardContent,CardHeader,IconButton } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { authActions } from '../store/store';
import { useDispatch } from 'react-redux';

export const BlogCards = (probs) => {
  let backend_url='https://dilipblog.onrender.com';
  let navigate=useNavigate();
  let dispatch= useDispatch()
  // console.log('BlogCardsprobs:', probs)
  let y=probs.blog._id;
  // console.log('BlogCardsprobs:', probs.blog._id)
  
  let name=JSON.stringify(probs.id,['name']);
  console.log('BlogCardsprobsName:', name);
  let userName,avatarname;
  if(name){

    let r=name.split(":");
    let w=r[1].split("}")
    userName=w[0];
    avatarname=userName.charAt(1);
    console.log(w[0])
  }
  
  let x=JSON.stringify(probs.id,['_id']);
  console.log('x:',x)
  let url = x
  x=/[^.]+/.exec(url)[0].substr(8,24);
 let isUser=localStorage.getItem('userId')===x;
  console.log('isUser:', isUser)
  console.log('x:',x)
 
  let title=probs.blog.title;
  let discription=probs.blog.discription;
  let imageurl=probs.blog.image;
  
  const handelEdit=(e)=>{
    navigate(`/myBlogs/${y}`)
  }

  const deleteRequest=async()=>{
      let res=await axios.delete(`{backend_url}/api/${y}`);
      let data=res.data;
      return data;
  }
  const handelDelete=()=>{
    deleteRequest()
    .then(()=>navigate('/myblogs/'))
    .then(()=>navigate('/blogs/'))
  }

  const viewpage=(title,imageurl,userName
    ,avatarname,discription)=>{
      console.log('viewclick',title,imageurl,userName
      ,avatarname,discription)
      dispatch((authActions.userclicked()))

    navigate('/viewBlogs',{
      state:{title:title,
        imageurl:imageurl,
        username:userName,
        avatarname:avatarname,
      discription:discription
      }
    })
  }





  return (
    <div >
    
    
          <Card sx={{
           width:"40%",
           margin:'auto',
           mt:9,mb:5,padding:2,boxShadow:'5px 5px 10px #ccc',
           ":hover":{
               boxShadow:'0.1rem 0.1rem 0.6rem 0.4rem #cecece'
           }}}>


           {isUser && (
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
           )}
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
        onClick={()=>viewpage(
          title,imageurl,userName
          ,avatarname,discription
        )}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>{userName}</b> {":"}{discription}
        </Typography>
      </CardContent>
      
    </Card>
</div>
  )
}
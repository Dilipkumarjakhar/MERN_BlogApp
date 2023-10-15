import React from 'react'
import { Typography,Avatar,Card,CardContent,Box,CardHeader,IconButton } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';
import {useNavigate} from 'react-router-dom';
// import { Blogview } from './Blogview';
import {authActions} from '../store/store';
import {useDispatch,useSelector} from 'react-redux';
export const UserBlogCards = (probs,userName) => {
  let dispatch = useDispatch();
  let navigate=useNavigate()
  console.log('dilipprobs:', probs)

  const isView=useSelector(state=>state.userView);
  console.log('isView:', isView)
  // let y=probs.blog._id;
  let x=JSON.stringify(probs.blog,['user']);
  console.log('x:',x)
  let url = x
  x=/[^.]+/.exec(url)[0].substr(9,24);
 let isUser=localStorage.getItem('userId')===x;
  console.log('isUser:', isUser)
  console.log('x:',x)

  // let name=localStorage.setItem('name',userName)
  
  
  let title,discription,username,avatarname,imageurl;
  if(probs.blog!=null){
    let y=JSON.stringify(probs.blog,['_id']);
    console.log('x:',y)
    console.log('perticularuserprobs:', probs.blog._id)
    console.log('userName:', probs.userName)
   title=probs.blog.title;
   imageurl=probs.blog.image;
   username=probs.userName;
   avatarname=username.charAt(0);
   
   discription=probs.blog.discription

  }

  const handelEdit=(e)=>{
    navigate(`/myBlogs/${probs.blog._id}`)
  }
  const handelDelete=()=>{

  }
  
  const viewpage=(title,imageurl,username
    ,avatarname,discription)=>{
      dispatch((authActions.userclicked()))
      // console.log('viewclick',title,imageurl,username
      // ,avatarname,discription)
     
      navigate('/viewBlogs',{
        state:{title:title,
          username:username,
          imageurl:imageurl,
          avatarname:avatarname,
          discription:discription
        },
      
    })
  }
  return ((probs.blog!=null)?
    <div >
     
    
          <Card sx={{
           width:"40%",
           backgroundColor:'red',
           margin:'auto',
           borderRadius:2,
           marginBottom:2,
           mt:6,padding:2,boxShadow:'5px 5px 10px #ccc',
           ":hover":{
               boxShadow:'0.1rem 0.1rem 0.4rem 0.2rem #111'
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
          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
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
          title,imageurl,username
          ,avatarname,discription)
        
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>{username}</b> {":"}{discription}
        </Typography>
      </CardContent>
      
    </Card>
</div>:'null'
  )
}
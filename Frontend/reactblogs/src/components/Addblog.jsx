import {useState} from 'react';
import {Typography,Box,Button, InputLabel, TextField} from '@mui/material';
import axios from 'axios';
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useNavigate } from 'react-router-dom';
let lables={mb:1,mt:2,fontSize:'20px' ,fontWeight:'bold',
color:"#000"};
export const Postblog =()=>{
    let url='https://dilipblog.onrender.com';
    let navigate=useNavigate()
    const [inputs,setinputs]=useState({
        title:"",
        description:"",
        image:"",
    });
    const sendPostRequest=async()=>{
      let res=await axios.post(`${url}/api/blog`,{
          title:inputs.title,
          discription:inputs.description,
          image:inputs.imageurl,
          user:localStorage.getItem('userId')
      }).catch(err=>console.log(err));
      let data=res.data;
      return data;
    };
const blogPost=(e)=>{
  e.preventDefault();
  console.log(inputs);
  sendPostRequest()
  .then(()=>navigate('/blogs'))
  .then((data=>console.log(data)))
  
}
    const handleChange=(e)=>{
      setinputs((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
    } 
    return (
        <div>
        <form onSubmit={blogPost}
        style={{ marginTop:'8rem'}}>

       
   <Box border={1}
   maxHeight={500} 
   maxWidth={700}
   borderColor='green'
   backgroundColor='#eeedf0'
   borderRadius={10}
   boxShadow='0rem 0rem 0.5rem 1px #111'
   padding={3} margin={'auto'} marginTop={5}
   width="80%" display='flex' flexDirection={'column'}
   >
       <Typography
       fontWeight={'bold'}
       padding={1}
       color='green'
       variant='h5'
       textAlign='center'
       >Post Your Blog</Typography>
       <InputLabel sx={lables}>Title</InputLabel> 
       <TextField  
       value={inputs.title} name='title' onChange={handleChange}
       margin='auto' variant='outlined' />

       <InputLabel sx={lables}>Description</InputLabel>
       <TextField 
       value={inputs.description} name='description' onChange={handleChange}
       margin='auto' variant='outlined'/>
      
       <InputLabel sx={lables} >Imageurl</InputLabel>
       <AddAPhotoTwoToneIcon></AddAPhotoTwoToneIcon>
       <TextField 
       value={inputs.imageurl} name='imageurl' onChange={handleChange}
       margin='auto' variant='outlined'/>

       <Button 
        type='submit'
        sx={{borderRadius:2,width:"15%", height:"50%" ,marginTop:5}} 
        variant='contained' 
        color='primary'

        >Post
        <SendOutlinedIcon sx={{marginLeft:2}}></SendOutlinedIcon>
        </Button>
   </Box>
   </form>
        </div>
    )
}
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Typography,Box,Button, InputLabel, TextField} from '@mui/material';
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
let lables={mb:1,mt:2,fontSize:'20px' ,fontWeight:'bold'};

export const BlogsDtails =()=>{
    let navigate=useNavigate();
    const id=useParams().id;
    let [blog,setblog]=useState();
    const [inputs,setinputs]=useState();
    
    
    const fetchDetails = async()=>{
        console.log(id);
 
    let res=await axios.get(`http://localhost:5000/api/${id}`)
    .catch((err)=>console.log(err))
    let data=await res.data;
      return data;
    }
    useEffect(()=>{
        fetchDetails()
        .then(data=>{
            setblog(data.blogId)
        setinputs({title:data.blogId.title,discription:data.blogId.discription,image:data.blogId.image})
        })
    },[id])



  const handleSubmit=(e)=>{
    e.preventDefault()
    sendRequestTOUpdate()
    .then(data=>console.log(data))
    .then(()=>navigate('/myblogs'))
  }
  const handleChange=(e)=>{
      setinputs((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
    }

    const sendRequestTOUpdate=async()=>{
          let res=await axios.put(`http://localhost:5000/api/blog/edit/${id}`,{
              title:inputs.title,
              discription:inputs.discription,
            //   ------------------------------image-----------------
          })
          .catch((err)=>console.log(err))
    }


    console.log(blog)
    return (
        <div>
        {inputs &&
   
   <form onSubmit={handleSubmit}>

       
   <Box border={1}
   maxHeight={500} 
   maxWidth={700}
   borderColor='green'
   borderRadius={10}
   boxShadow="10px 10px 20px #ccc" 
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
       value={inputs.discription} name='discription' onChange={handleChange}
       margin='auto' variant='outlined'/>
      
       {/* <InputLabel sx={lables} >Imageurl</InputLabel>
       <AddAPhotoTwoToneIcon></AddAPhotoTwoToneIcon>
       <TextField 
       value={inputs.image} name='image' onChange={handleChange}
       margin='auto' variant='outlined'/> */}

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
  


}
        </div>
    )
}
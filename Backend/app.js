import express from 'express';
import mongoose from 'mongoose';
const app=express();
const PORT=process.env.PORT || 6010;
// const path=require('path')
import {Dilip} from './xyz.js';
import cors from 'cors';
import {BlogRouter} from './routers/blog.js';
// import {blogRouter} from '../routers/blog.router.js';
import {RouterUser} from './routers/user.js';


app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    return res.send({"mess":"welcome to backend...."})
})
app.get('/hello',(req,res)=>{
    return res.send({"mess":"hello blog app"})
})
app.use('/api',RouterUser);
app.use('/api',BlogRouter);

//  app.use(express.static(path.join(__dirname, "/public")));

// app.listen(Port,()=>{
//     console.log(Port)
// })
// mongoose.connect('mongodb://admin:KsZOGNptf9eNpsQ@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true');
// mongoose.connect('mongodb+srv://admin:KsZOGNptf9eNpsQ0@cluster0.cnnj6n7.mongodb.net/Blog?retryWrites=true')
// mongoose.connect('mongodb+srv://admin:KsZOGNptf9eNpsQ0@cluster0.cnnj6n7.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://admin:KsZOGNptf9eNpsQ0@cluster0.cnnj6n7.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(PORT))

.then(()=>console.log('port is connected ',PORT))
.catch((err)=>console.log(err))

console.log('hello')
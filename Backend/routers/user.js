import express from 'express';

import {userSignup,userLogin,allUsers} from '../controllers/userc.js';
export const RouterUser=express.Router();



RouterUser.get('/',allUsers);
RouterUser.post('/signup',userSignup);
RouterUser.post('/login',userLogin);

// export default RouterUser;
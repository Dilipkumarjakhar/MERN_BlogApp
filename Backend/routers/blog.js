import express from 'express';

import {allBlogs,addBlogs,editBlog,getBlogId,delBlog,getByUserId}
 from '../controllers/blogc.js';


export const BlogRouter=express.Router();

BlogRouter.get('/blog',allBlogs);
BlogRouter.post('/blog',addBlogs);
BlogRouter.put('/blog/edit/:id',editBlog);
BlogRouter.get('/:id',getBlogId);
BlogRouter.delete('/:id',delBlog);
BlogRouter.get('/user/:id',getByUserId);

// export default BlogRouter;
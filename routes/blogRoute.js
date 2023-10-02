import express from "express";
import {getBlogs} from "../middlewares/blogMiddleware.js";
import {searchBlogs, showBlogs} from "../controllers/blogController.js";

const router = express.Router()


router.get('/api/blog-stats', getBlogs, showBlogs )

router.get('/api/blog-search', getBlogs, searchBlogs)

router.get('/test', (req,res)=>{
    return res.json({
        success:true,
        message:"This is a test route"
    })
})
export default router
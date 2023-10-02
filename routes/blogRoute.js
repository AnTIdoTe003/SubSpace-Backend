const express = require("express");
const { getBlogs } = require("../middlewares/blogMiddleware.js");
const { searchBlogs, showBlogs } = require("../controllers/blogController.js");

const router = express.Router();

router.get('/api/blog-stats', getBlogs, showBlogs);

router.get('/api/blog-search', getBlogs, searchBlogs);

router.get('/test', (req, res) => {
    return res.json({
        success: true,
        message: "This is a test route"
    });
});

module.exports = router;

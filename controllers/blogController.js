const lodash = require('lodash');

exports.showBlogs = async function(req, res) {
    try {
        const blogs = req.blog.blogs;
        const totalBlogs = blogs.length;

        const blogWithLongestTitle = lodash.maxBy(blogs, function(blog) {
            return blog.title.length;
        });

        const uniqueBlogTitles = lodash.uniqBy(blogs, 'title').map(function(blog) {
            return blog.title;
        });

        const blogsWithPrivacy = lodash.filter(blogs, function(blog) {
            return lodash.includes(blog.title.toLowerCase(), 'privacy');
        });

        return res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            totalBlogs,
            blogWithLongestTitle,
            uniqueBlogTitles,
            blogsWithPrivacy
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.searchBlogs = async function(req, res) {
    try {
        const blogs = req.blog.blogs;
        const query = req.query.query || '';

        const searchResults = blogs.filter(function(blog) {
            return blog.title.toLowerCase().includes(query.toLowerCase());
        });

        return res.status(200).json({
            success: true,
            message: "Search results fetched successfully",
            query,
            results: searchResults,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

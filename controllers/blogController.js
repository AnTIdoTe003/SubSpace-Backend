import _ from 'lodash';

export const showBlogs = async (req, res) => {
    try {
        const blogs = req.blog.blogs;
        const totalBlogs = blogs.length;
        // console.log(totalBlogs)
        const blogWithLongestTitle = _.maxBy(blogs, blog => blog.title.length);
        const uniqueBlogTitles = _.uniqBy(blogs, 'title').map(blog => blog.title);
        const blogsWithPrivacy = _.filter(blogs, blog => _.includes(blog.title.toLowerCase(), 'privacy'));
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


export const searchBlogs = async (req,res)=>{
    try{
        const {blogs} = req.blog;
        const query = req.query.query || '';


        const searchResults = blogs.filter(blog =>
            blog.title.toLowerCase().includes(query.toLowerCase())
        );

        return res.status(200).json({
            success: true,
            message: "Search results fetched successfully",
            query,
            results: searchResults,
        });
    }catch (error){
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}
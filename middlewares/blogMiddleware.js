const axios = require("axios");
const lodash = require('lodash');

const getBlogs = lodash.memoize(async (req, res, next) => {
    try {
        const config = {
            headers: { 'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6' }
        };
        const { data } = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', config);
        req.blog = data;
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = { getBlogs };

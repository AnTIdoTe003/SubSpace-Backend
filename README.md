# SubSpace-Backend


### Run the code by

```
    npm run server
```
or 

```
    nodemon index.js
```


# Blog API Documentation

## Get Blog Stats

- **Endpoint:** `/api/blog-stats`
- **Method:** `GET`
- **Middleware:** `getBlogs`
- **Controller:** `showBlogs`

### Description
Get statistics related to blogs.

### Example
```bash
curl -X GET http://localhost:5000/api/blog-stats
```



## Search Blogs

- **Endpoint:** `/api/blog-search`
- **Method:** `GET`
- **Middleware:** `getBlogs`
- **Controller:** `searchBlogs`
- **Query Parameters:**

    | Parameter Name | Values                    | Description                               |
        |--------|---------------------------|-------------------------------------------|
    | `query`| `privacy` | `gives the blog output based on the given query which matches with the blog title`

### Description
Search the blog according to the query

### Example
```bash
curl -X GET http://localhost:5000/api/blog-search?query=privacy
```



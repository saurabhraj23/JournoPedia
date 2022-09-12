const myBlogRoute = require("express").Router();
const {myBlog} = require("../controllers/myBlog");
myBlogRoute.route("/myBlog").get(myBlog);
module.exports = {myBlogRoute};

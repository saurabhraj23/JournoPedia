
const myBlog = (req,res) => {
  try{
res.sendFile(__dirname + "/Websites/index.html");
  }
  catch(error){
console.log(error);
  }
}
module.exports = {myBlog};

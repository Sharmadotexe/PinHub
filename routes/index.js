var express = require('express');
var router = express.Router();
const userModel = require('./users')
const postModel = require('./posts')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createUser', async function (req, res, next) {
  let createdUser = await userModel.create({
    username: "vikas",
    password: "abcd",
    posts: [],
    email: "rockvikas200@gmail.com",
    fullName: "vikas Sharma",
  })
  res.send(createdUser)
})


router.get('/createPost', async function (req, res, next) {
  let createdPost = await postModel.create({
    postText: "hello this is second post",
    user:"65c65a666727c3d61ead565d"
  })
  let user= await userModel.findOne({_id:"65c65a666727c3d61ead565d"})
  user.posts.push(createdPost._id)
  await user.save()
  res.send("done")
})


router.get('/allusers', async function (req,res){
  let  allUsers = await userModel.findOne({_id:"65c65a666727c3d61ead565d"})
  .populate('posts')

  res.send(allUsers)
})
  



module.exports = router;

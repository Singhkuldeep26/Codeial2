const Post=require('../models/post');
const User = require('../models/user');

/* module.exports.home=function(req,res){
    //return res.end('<h1>Express is up for Codeial!</h1>');

    // console.log(req.cookies);
    // res.cookie('user_id', 25);
    // return res.render('home',{
    //     title:"Home"
    // });  

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:"Codeial | Home",
    //         posts:posts
    //     });
    // });
    
    //populate the user of each post
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        // return res.render('home',{
        //     title:"Codeial | Home",
        //     posts:posts
        // });
        User.find({},function(err,users){
            return res.render('home',{
                title:"Codeial | Home",
                posts:posts,
                all_users:users
            });
        });
    });
}; */
module.exports.home=async function(req,res){
    //popolate the user of each post
    try{
        // CHANGE ::populate the likes of each post and comments
        let posts=await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            },
            populate:{
                path:'likes'
            }
        }).populate('likes');

        let users=await User.find({});
        
        return res.render('home',{
            title:"Codeial | Home",
            posts:posts,
            all_users:users
        });
    }catch(err){
        console.log('Error',err);
        return;
    }
}
// module.exports.actionName=function(req,res){}

//using then
//Post.find({}).populate('comments').then(function(){});
//let posts=Post.find({}).populate('comments').exec();
//posts.then();
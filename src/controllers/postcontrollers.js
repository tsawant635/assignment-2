const postModel = require("../models/Posts");
const { post } = require("../routes/users");


const createPost = async (req, res) =>{
    
    const {title, body,image} = req.body;

    const newPost = new postModel({
        title: title,
        body : body,
        image: image
        
    });

    try {
        
       const result= await newPost.save();
        res.status(201).json({
            "status":"post created",
            "data":result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
    
}

const updatePost = async (req, res) =>{
    const id = req.params.id;
    const {title, body,image} = req.body;

    const newPost = {
        title : title,
        body: body,
        image:image,
        userId : req.userId
    }

    try {
        await postModel.findByIdAndUpdate(id, newPost, {new : true});
        res.status(200).json({
            "status":"success",
            "data":result
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const deletePost = async (req, res) =>{

    const id = req.params.id;
    try {
        
        const post = await postModel.findByIdAndRemove(id);
        res.status(202).json({
            "status":"successfully deleted"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const getPosts = async (req, res) =>{
    try {
        
        const posts = await postModel.find({userId : req.userId});
        res.status(200).json(posts);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPosts
}
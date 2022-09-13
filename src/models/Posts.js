const mongoose= require("mongoose")

const PostSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true

    },
    image:{
        type:String,
        required:true
      
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "users",
        
        
    }

})

module.exports = mongoose.model("Post",PostSchema)
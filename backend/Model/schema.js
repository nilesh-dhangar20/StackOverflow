const mongoose = require('mongoose');
const schema=new mongoose.Schema(
     {
        question:{
           type:String,
           required:true
        },
        description:{
            type:String,
            
        }
        
    })
    const questionSchema=new mongoose.model("Question",schema);
     module.exports= questionSchema;
const express = require('express');
const app=express();
const port=5000;
const cors=require('cors');
app.use(cors);
const connection=require('./db/connections');
connection();
const QuestionSchema=require("./Model/schema")
app.use(express.json());
app.get('/',async(req,res)=>{
    try{
 console.log("/ page")
   const data=await  QuestionSchema.find({});
   console.log(data);
    res.send(data);
    }
    catch(err)
    {
        console.log(err);
    }
   
})
app.post("/askQuestion",async(req,res)=>{
    try{
 const data=new questionSchema({
       question:req.body.question,
       description:req.body.description
   })
   data.save();
   console.log("successfully saved")
   res.send("successfully saved");
   
    }
    catch(err)
    {
        console.log(err);
    }
  

})
app.listen(port,()=>{
    console.log("listening at port no 5000");
})
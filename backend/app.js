const express = require('express');
const bodyparser=require('body-parser');
const app=express();
const port=5000;
const cors=require('cors');
app.use(cors());
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }));
const connection=require('./db/connections');
connection();
const questionSchema=require("./Model/schema")
app.use(express.json());
app.get('/',async(req,res)=>{
    try{
   console.log('/hoem page')
   const data=await  questionSchema.find({});
   console.log(data);
//    res.send(JSON.stringify(data));
res.json(data);
// res.send("from backend");

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
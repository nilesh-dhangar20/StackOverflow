const mongoose = require('mongoose');
const url="mongodb://localhost:27017/stackOverflow"
const databaseConnection=()=>{
mongoose.connect(url).then(()=>{
    console.log("connection successfully");
}).catch((err)=>{
    console.log(err);
})
}
module.exports = databaseConnection;


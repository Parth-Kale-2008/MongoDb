const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");// till here we made app
}

let chat1 = new Chat({
    from:"krishna",
    to:"Ashwathama",
    msg:"Mai tumse tumhari mrutyu hi chin leta hu mai tumhe amar hone ka abhishrap deta hu",
    created_at:new Date()
});

chat1.save().then((res)=>{
    console.log(res);
});
app.get("/",(req,res)=>{
    res.send("root is working"); //we have created route here 
});

app.listen(8080,()=>{
    console.log("server is started at port 8080"); //here server setup is done 
});
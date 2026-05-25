const mongoose = require("mongoose");
const Chat = require("../models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");// till here we made app
}

let allChats = [
    {
        from:"arjun",
        to:"karn",
        msg:"tum sut putra meri kya barabari karoge",
        created_at: new Date(),
    },

    {
        from:"duryodhan", 
        to:"shakuni",
        msg:"mama shree ye vasudev krishna vapis koi maya chal rha hai",
        created_at: new Date(),
    },

    {
        from: "krishna",
        to: "Ashwathama",
        msg: "Mai tumse tumhari mrutyu hi chin leta hu mai tumhe amar hone ka abhishrap deta hu",
        created_at: new Date(),
    },

];

Chat.insertMany(allChats);


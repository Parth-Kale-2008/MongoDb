const mongoose = require("mongoose");
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("connection succesful");

    const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
    });
    const User = mongoose.model("User",userSchema);
    const User1 = new User({name: "Parth",age:19});
    await User1.save();
    User.findOneAndUpdate({name:"Parth"},{age:40},{new:true}).then(
        (data)=>{
            console.log(data);
        }
    )
}
main();
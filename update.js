const mongoose = require('mongoose');
async function main(){
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("Connection successful");

        const userSchema = new mongoose.Schema({
            name:String,
            age:Number,
        });

        const User = mongoose.model("User",userSchema);
        await User.updateOne(
            {name:"Parth"},
            {
            $set:{
                name:"Nakul",
                age:20
            }
        }
        );

        console.log("user updated");
}
main()
.then(()=>console.log("updated"))
.catch(err=>console.log(err));
const mongoose = require('mongoose');
let users = "https://localhost:8080/users"
mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err=>console.log(err));
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/test');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const User = mongoose.model("User",userSchema);
//const Employee = mongoose.model("Employee",userSchema);

const User1 = new User({name: "Eve",email:"abc@69.com",age:19});
const User2 = new User({name:"Tanishq",email:"muskan@123",age:21});
User1.save();
console.log(User2);
}
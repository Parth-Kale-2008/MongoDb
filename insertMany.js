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
User.find({age:{$gt:19}})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
User.insertMany([
    {name:"Parth",email:"jeet@69.com",age:19},
    {name:"het",email:"het@69.com",age:18},
    {name:"rajvi",email:"rajvi2020@gmail.com",age:22},
]).then(res =>{
    console.log(res);
});
}
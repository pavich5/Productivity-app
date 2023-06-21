const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const express = require("express");

const app = express();
app.use(express.json())


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://pavich5:drvarastat123@cluster0.ddogzo9.mongodb.net/Advanced-node?retryWrites=true&w=majority');
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number }
});
const Users = mongoose.model("Users",userSchema);
// await Users.insertMany([
//     {"name": "Kire", "email": "kiretasev@gmail.com", "age": 21},
//     {"name": "Dac", "email": "dac@gmail.com", "age": 40},
//     {"name": "Kire", "email": "kiretasev@gmail.com", "age": 21},
//     {"name": "Dac", "email": "dac@gmail.com", "age": 40}
// ]);

app.get("/users", async(req,res)=>{
    try {
        const users = await Users.find({});
        return res.json(users)
    } catch (error) {
    }
})

app.get("/users/:id", async(req,res)=>{
    try {
        const foundUser = await Users.findOne({_id:req.params.id})
        return res.json(foundUser);
    } catch (error) {
        console.log(error)
    }
})

app.post("/users", async(req,res)=>{
    try {
        const newUser = await Users.create(req.body);
        await newUser.save()
        return res.json(newUser);
    } catch (error) {
        console.log(error);
    }
});

app.patch("/users/:id", async (req, res) => {
    try {
      const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
      });
      return res.json(updatedUser);
    } catch (error) {
      console.log(error);
    }
  });

  app.delete("/users", async(req,res)=>{
    try {
        await Users.deleteMany({})
        return res.json({msg: `All users are deleted`})
    } catch (error) {
        console.log(error);
    }
  })

  
app.delete("/users/:id",async(req,res)=>{
    try {
    await Users.findByIdAndDelete(req.params.id);
        return res.json({msg: `User is deleted`})
    } catch (error) {
        console.log(error)
    }
})




app.listen(3000,()=>{
    console.log("servers is up at port 3000")
})

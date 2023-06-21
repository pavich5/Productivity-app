import express from "express";
import { getAllUsers, getUserByID, createUser , updateUser, deleteUserByID } from "./functions.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "0.0.0.0";

// 1. Get all users
app.get("/users", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    return res.json(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
});

// 2. Get users by id
app.get("/users/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const foundUser = await getUserByID(userID);
    return res.json(foundUser);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error.message);
  }
});

// 3. Create users
app.post("/users", async (req, res) => {
  try {
    const { name, age, email, phone, city, color, height, weight } = req.body;
    const createrNewUser = await createUser(
      name,
      age,
      email,
      phone,
      city,
      color,
      height,
      weight
    );
    return res.json(createrNewUser);
  } catch (error) {
    console.log(error)
  }
});

// 4. Update users
app.patch("/users/:id", async(req,res)=>{
    try {
        const updatedData = req.body;
        const userID = req.params.id;
        
        if(updatedData.id === userID) throw new Error("fk off no id change");
        const updatedUsers = await updateUser(userID,{...updatedData});
        return res.json(updatedUsers)
    } catch (error) {
        console.log(error)
    }
})

// 5. Delete users
app.delete("/users/:id", async(req,res)=>{
    try {
        const userID = req.params.id;
        await deleteUserByID(userID);
        return res.send(`msg: user with id ${userID} is deleted `)
    } catch (error) {
        console.log(error)
    }
 
})





app.listen(4000, () => {
  console.log("Server is listening at port 4000");
});

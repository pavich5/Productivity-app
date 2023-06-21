import express from "express";
import {
  deleteDogByID,
  addDog,
  getAllDogs,
  getDogByID,
  updateDog,
  //   updateDogs,
  //   deleteAllDogs,
} from "./functions.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// 1. Get all dogs
app.get("/dogs", async (req, res) => {
  try {
    const AllDogs = await getAllDogs();
    return res.json(AllDogs);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
});
// 2. Get dogs by id
app.get("/dogs/:id", async (req, res) => {
  try {
    const dogID = req.params.id;
    const foundDog = await getDogByID(dogID);
    return res.json(foundDog);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error.message);
  }
});
// 3. Create dogs
app.post("/dogs", async (req, res) => {
  try {
    const { name, breed, age, weight, color, vaccinated } = req.body;
    const createNewDog = await addDog(
      name,
      breed,
      age,
      weight,
      color,
      vaccinated
    );
    return res.json(createNewDog);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

// 4. Update dogs
app.patch("/dogs/:id", async (req, res) => {
  try {
    const updatedData = req.body;
    const dogID = req.params.id;

    if (updatedData === dogID) throw new error("fk off mate cant change id");
    const updatedDogs = await updateDog(dogID, updatedData);
    return res.json(updatedDogs);
  } catch (error) {
    console.log(error);
  }
});
// 5. Delete dogs
app.delete("/dogs/:id",async(req,res)=>{
    try {
        const dogID = req.params.id;
        await deleteDogByID(dogID);
        return res.send(`msg: Dog with id ${dogID} is deleted `)
    } catch (error) {
        console.log(error)
    }

})
// 6. Delete all dogs

app.listen(3000, function () {
  console.log(`server is listening at port 3000`);
});

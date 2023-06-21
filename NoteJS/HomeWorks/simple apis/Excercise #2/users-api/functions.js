import path from "node:path";
import { v4 as uuid } from "uuid";
import { fileURLToPath } from "node:url";
import { DataService } from "./services/data.serverice.js";
import { get } from "node:http";
import { error } from "node:console";
import fs from "fs";
import exp from "node:constants"; // Unused import

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const usersPath = path.join(__dirname, "data", "users.json");

const saveUsers = async (users) => {
  await DataService.saveJSONFile(usersPath, users);
};

// 1. Get all users
export const getAllUsers = async () => {
  const users = await DataService.readJSONFile(usersPath);
  return users;
};

// 2. Get users by id
export const getUserByID = async (userID) => {
  const allUsers = await getAllUsers();
  const foundUser = allUsers.find((user) => user.id === userID);
  if (!foundUser) throw new Error("There is no user with this id "); // 
  return foundUser;
};

// 3. Create users
export const createUser = async (
  name,
  age,
  email,
  phone,
  city,
  color,
  height,
  weight
) => {
  const newUser = {
    id: uuid(),
    name,
    age,
    email,
    phone,
    city,
    color,
    height,
    weight,
  };
  const allUsers = await getAllUsers();
  const updatedUsers = [...allUsers, newUser];
  await saveUsers(updatedUsers); 
  return newUser;
};

// 4. Update users
export const updateUser = async (userID, updatedData) => {
  const allUsers = await getAllUsers(); // 
  const userToUpdate = await getUserByID(userID);
  const updatedUser = { ...userToUpdate, ...updatedData }; 

  const updatedUsers = allUsers.map((user) => {
    if (user.id === userID) return updatedUser; // 
    return user;
  });

  await saveUsers(updatedUsers); 
  return updatedUser;
};

//5. Delete user 
export const deleteUserByID = async (userID) =>{
    const allUsers = await getAllUsers();
    const usertToDelte = await getUserByID(userID);

    const updatedUsers = allUsers.filter((user) => user.id !== userID);
    if(allUsers.length === updatedUsers.length) throw new error("user not found");
    await saveUsers(updatedUsers);
}

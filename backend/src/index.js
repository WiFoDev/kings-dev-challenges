const express = require("express");
const app = express();
const { getUserById, getAllUsers } = require("./services/user.service");

module.exports = app;

//Example endpoint
app.get("/foo", (req, res) => {
  res.send(`foo`);
});

//Write your code here
app.get("/users", (req, res) => {
  const { id } = req.query;
  if (!id) {
    const users = getAllUsers();
    return res.json(users);
  }
  const user = getUserById(id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.json(user);
});

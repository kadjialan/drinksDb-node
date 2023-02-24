const express = require('express');
const { getAllDrinks, getOneDrink, createDrink, patchOneDrink, updateOneDrink, deleteOneDrink } = require('./drinks');
const {
  getAllUsers,
  createUser,
  getOneUser,
  updateOneUser,
  patchOnUser,
  deleteOneUser,
} = require("./users");

const app = express();
app.use(express.json())

/* const API_KEYS = ["1", "2", "3", "4", "5"];

app.use(function(req, res, next) {
  console.log(`${new Date().toTimeString()}     ${req.originalUrl}`);
  next();
})

app.use(function (req, res, next) { // this is a middle-ware. read middle wares
  const {apikey}  = req.query;
  const key = req.get("x-api-key");
  if(API_KEYS.includes(apikey) || API_KEYS.includes(key)) { // the second option is to check the x-api-key value on postman header section
    next();
  } else {
    res.sendStatus(403); // this like the res.status(403) error codes
  }
}); */

// SEARCH ON REGISTERING ROUTES, THATS WHAT IS HAPPENNING BELOW

app.get("/users", getAllUsers);
app.post("/users", createUser);
app.get("/users/:id", getOneUser);
app.put("/users/:id", updateOneUser);
app.patch("/users/:id", patchOnUser);
app.delete("/users/:id", deleteOneUser);


app.get("/drinks", getAllDrinks);
app.post("/drinks", createDrink);
app.get("/drinks/:id", getOneDrink);
app.patch("/drinks/:id", patchOneDrink);
app.put("/drinks/:id", updateOneDrink);
app.delete("/drinks/:id", deleteOneDrink);


app.listen(8086, function() {
  console.log("Running on port 8086");
})

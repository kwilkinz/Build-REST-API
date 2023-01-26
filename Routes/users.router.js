import express from "express";
const router = express.Router();

// Fake Data
const users = [
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Charlie",
    lastName: "Doe",
    age: 28,
  },
];

/**
 * router.method(route), callback
 * All routes in users.routers are attached onto index.js so...
 * Ex: (1) localhost:5000/users/
 */

// (1)
router.get("/", (req, res) => {
  res.send("Getting all Users!");
});

// send data to the server - values in forms - for them to be created.
router.post("/", (req, res) => {});

export default router;

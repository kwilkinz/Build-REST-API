import { v4 as uuid } from "uuid";

let users = [];

/**
 * router.method(route), callback
 * All routes in users.routers are attached onto index.js so...
 * Ex: (1) localhost:5000/users/
 */

// Linked with Router, & the one that says this function name
export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);
  res.send(users);
};

// (2) POST send data to the server - values in forms - for them to be created.
// req.body = postman or form whatever you are sending in.
export const createUser = (req, res) => {
  const user = req.body;

  // generating new id's for each time posted
  const userId = uuidv4();

  // spread all properties {firstname, last, age + and are adding userId}
  const userWithId = { ...user, id: userId };

  users.push(userWithId);
  console.log(`User [${user.username}] added to the database.`);
};

// (3) - GET - /users/2 => req.params {id: 2}
// anything after /users we will be using thats what /:id means
export const getUser = (req, res) => {
  // will retrieve anything in the url after /users
  res.send(req.params.id);
};

// (4) - DELETE - /:id
// Only want to remove if the id matches
export const deleteUser = (req, res) => {
  // will retrieve anything in the url after /users
  console.log(`user with id ${req.params.id} has been deleted`);

  users = users.filter((user) => user.id !== req.params.id);
};

// (5) - PATCH - used to partially modifiy something (updates parts)
export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.username = req.body.username;
  user.age = req.body.age;

  console.log(
    `username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`
  );
};

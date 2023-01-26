import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./Routes/users.router.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

/**
 * we will be using our routes paths, to give directions. starting off with
 * app.method(route), (callback) => app.get('/', (req, res) => {})
 * and when people are on the path of /users we will run usersRoutes and whats inside being
 * requested by the user and giving back a response.
 */
// all routes in Index.js are starting with /users
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Homepage Hello");
});

// Allows Dev to listen on port, confirm running
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

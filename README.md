# Build a RESTful API

> With Node JS and Express | CRUD API

### Setup Walkthrough

1. Create a repo and `git clone <SSH>` to your local.
2. open terminal: `npm init -y`
   - this will create an empty package.json
3. `npm install --save express`
   - this will allow us to import express in our index.js file.
4. Create a `index.js` file. add below in file:

```
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
```

- `app.use(bodyParser.json())`: states we will be using json in our whole application

5. Go to `Package.json` file below script of main add below:

```
"main": "index.js",
"type": "module",
```

6. To let the server automatically update when something changes we need to install: `npm install --save-dev nodemon`
   - we used dev because when we build/public this application no one else will need to use nodemon so this installs it on our own dev purpose.
7. In Package.json - we are going to create our own script. `"start": "nodemon index.js"`
8. to run server: `npm start`

---

#### Creating our First Routes getting Started:

under app.use(bodyParser.json()) we will start with a simple "Home" GET request.

> - `app.get('/')` tells us... method: GET | route: '/' | callback function (req, res)
> - `res.send("Homepage")` will show up on the actual page while console.log will appear in the terminal.

---

#### We want to build off REST

> Routes Folder => users.router.js

```
import express from "express";
const router = express.Router();

//router.method(route), callback
router.get("/users", (req, res) => {
  res.send("Getting all Users!");
});

export default router;
```

> Index.js adding `import usersRoute from './routes/users.router.js'`

#### Notes

> Node and Express = all about routing (GET /, POST, etc)

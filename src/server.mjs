import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [
  {
    id: 1,
    name: "John Doe",
    username: "john",
    password: "password",
    tweets: [],
  },
  {
    id: 2,
    name: "Jane Doe",
    username: "jane",
    password: "password",
    tweets: [],
  },
];

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  console.log(username, password);
  const user = users.find(u => u.username === username && u.password === password);
  console.log(user);
  if(!user) {
    res.status(400).send("Invalid username or password");
    return;
  }
  res.send(JSON.stringify(user));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

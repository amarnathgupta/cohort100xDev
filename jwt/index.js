const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { username: "user1", password: "password1", name: "John Doe" },
  { username: "user2", password: "password2", name: "Jane Smith" },
  { username: "user3", password: "password3", name: "Mike Johnson" },
  { username: "user4", password: "password4", name: "Sarah Adams" },
  { username: "user5", password: "password5", name: "David Brown" },
  { username: "user6", password: "password6", name: "Emily Taylor" },
  { username: "user7", password: "password7", name: "Alex Clark" },
  { username: "user8", password: "password8", name: "Olivia White" },
  { username: "user9", password: "password9", name: "Jack Anderson" },
  { username: "user10", password: "password10", name: "Sophia Martin" },
];

function userExist(username, password) {
  return users.some(
    (user) => user.username == username && user.password == password,
  );
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!userExist(username, password)) {
    return res
      .status(403)
      .send(`Invalid username: ${username} or password: ${password}`);
  }
  let token = jwt.sign({ username: username }, jwtPassword);
  res.json({
    jwt: token,
  });
});

app.get("/users", (req, res) => {
  try {
    let token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    if(!users.some(user => user.username == username)) {
        res.status(404).send("Not a valid user token")
    }
    const result = users.filter((user) => user.username != username);
    res.json(result);
  } catch (err) {
    res.status(403).json({
      msg: "Invalid token!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

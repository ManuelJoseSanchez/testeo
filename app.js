const express = require('express');

const UserController = require("./endpoints/user/userController")

const axios = require("./endpoints/helper");

const app = express();

const port = 3030;

app.use(express.json());

const user=UserController(axios);


app.get("/", user.getUser);
app.post("/", user.createdUser)
app.put("/:id",user.updateUser);
app.delete("/:id", user.deleteUser);

app.listen(port, () => {
    console.log("La url del http://localhost:" + port);
});
const express = require('express');
const axio = require("axios");

const app = express();

const url = "https://jsonplaceholder.typicode.com/users";

const port = 3030;

app.use(express.json());

app.get("/", async (req, res) => { 
    const {data} = await axio.get(url);
    res.status(200).send(data);
});
app.post("/", async (req, res) => { 
    const { body } = req;
    console.log(body);
    const { data } = await axio.post(url,body);
    res.status(201).send(data)
})
app.put("/:id",async (req, res) => { 
    const { id } = req.params;
    const { body } = req;
    await axio.put(url + '/' + id, body);
    res.sendStatus(204);
});

app.delete("/:is", async (req, res) => {
    const { id } = req.params;
    await axio.delete(url + '/' + id);
    res.sendStatus(204);
});
app.listen(port, () => {
    console.log("La url del http://localhost:" + port);
});
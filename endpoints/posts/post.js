const { response } = require("express");
const URL_USER = "https://jsonplaceholder.typicode.com/users";
const URL_POST = 'https://jsonplaceholder.typicode.com/posts';
module.exports =  (axios) => ({
    post: async (req, res = response) => {
        const { data: users } = await axios.get(URL_USER);
        const found = users.find(x => x.id === req.body.userId);
        if (found) {
            const { data } = await axios.post(URL_POST, req.body);
            return res.status(201).send(data);
        }
        res.sendStatus(400);
    }
});
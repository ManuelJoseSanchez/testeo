const { response, request } = require('express');
const { getUserServices, createdUserServices, updateUserServices, deleteUserServices } = require('./UserServices');


const UserController = (axios) => ({

    getUser: async (req, res) => {
        const data = await getUserServices(axios);
        res.status(200).send(data);
    },

    createdUser: async (req, res) => {
        const { body } = req;
        const data = await createdUserServices(body, axios);
        res.status(201).send(data);
    },

    updateUser: async (req=request, res=response) => {
        const { id } = req.params;
        const { body } = req;
        const code = await updateUserServices(id, body, axios);
        res.sendStatus(code)
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;
        const code = await deleteUserServices(id, axios);
        res.status(code);
    }

});



module.exports = UserController;
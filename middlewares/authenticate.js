const { response } = require("express");

module.exports = (req,res=response,next) => {
    const userID= req.header('user_id');
    if (userID !== 1) {
        return res.sendStatus(403)
    }
    next();
}
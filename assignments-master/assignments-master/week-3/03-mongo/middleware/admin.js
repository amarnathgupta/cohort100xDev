const { Admin } = require("../db")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username, password} = req.headers;
    Admin.findOne({
        username,
        password
    })
    .then(function(value) {
        if(value) {
            next();
        } else {
            res.status(403).json({
                msg: "admin doesn't exist!"
            })
        }
    })
}

module.exports = adminMiddleware;
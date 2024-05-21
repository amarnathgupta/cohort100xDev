const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;

    try {
        let decoded = jwt.verify(token,jwtSecret);
        if(decoded.username) {
            req.username = decoded.username;
            next();
        } else {
            res.status(403).send({
                "message": "User doesn't exist"
            })
        }
    } catch (error) {
        console.log("JWT verification failed. ", error);
        res.status(500).json({
            "message": "JWT verification failed: Internal error!"
        })
    }
}

module.exports = userMiddleware;
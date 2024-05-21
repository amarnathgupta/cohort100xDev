const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    try {
        let decoded = token.split(" ")[1]
        decoded = jwt.verify(decoded, jwtSecret);
        if(decoded.username) {
            next();
        } else {
            res.status(403).json({
                "message": "Admin doesn't exist"
            })
        }
    } catch (error) {
        console.log("JWT verification failed. ", error);
        res.status(500).json({
            "message": "JWT verification failed: Internal error!"
        })
    }
}

module.exports = adminMiddleware;
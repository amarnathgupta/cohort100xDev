const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db");
const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.headers;
    await Admin.create({username,password})
    res.json({ message: 'Admin created successfully' })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    let { username } = req.headers;
    let user = await Admin.findOne({username})
    console.log(jwtSecret)
    if(user) {
        let response ="Bearer " + jwt.sign({username},jwtSecret);
        res.json({
            "token": response
        })
    } else {
        res.status(403).send("First Sign up!");
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body

    Course.create({
        title,
        description,
        price,
        imageLink
    })
    .then(function(value) {
        if(value) {
            res.status(200).json({
                msg: "course created successfully!",
                courseId: value._id
            })
        }
    })
    .catch((err) => {
        console.log("Something went wron while creating new course!")
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;
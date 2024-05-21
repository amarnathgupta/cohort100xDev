const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");
const { jwtSecret } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username, password} = req.headers;

    await User.create({username, password});

    res.json({ message: 'User created successfully' });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.headers;

    let user = await User.findOne({username,password});
    if(user) {
        let token = jwt.sign({username},jwtSecret);
        res.json({token});
    } else {
        res.status(403).send("You need to signup first!");
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    let result = await Course.find({});
    res.json(result);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    let courseId = req.params.courseId;
    const username = req.username;

    let response = await User.updateOne(
        {username},
        {
            $push: {'purchasedCourses': courseId}
        }
    );
    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    console.log(username);
    const user = await User.findOne({username});
    console.log(user);
    if(user) {
        // Course.find({
        //     _id: {
        //         $in: user.purchasedCourses
        //     }
        // }).then(function(value) {
        //     res.json(value);
        // })
        const response = await Course.find({
            _id: {
                    $in: user.purchasedCourses
                }
        })
        res.json(response);
    } else {
        res.status(404).send("Login first")
    }
    
});

module.exports = router
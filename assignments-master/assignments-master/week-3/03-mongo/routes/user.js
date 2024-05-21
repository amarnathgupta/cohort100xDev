const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username, password} = req.headers;
    await User.create({
        username,
        password
    })
    res.status(200).json({ message: 'User created successfully' })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.status(200).json(response);
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    const username = req.headers.username;
    User.updateOne(
        { "username": username },
        { $push : {"purchasedCourses": id} }
    )
    .then(function() {
        res.json({ message: 'Course purchased successfully' })
    })
    .catch((error) => {
        res.status(500).json("Error while cpurchasing courses")
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const {username} = req.headers;
    User.findOne({username})
    .then((user) => {
        Course.find({
            _id: {
                $in: user.purchasedCourses
            }
        })
        .then((value) => {
            res.json(value);
        })
});
});
module.exports = router
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.headers;
    await Admin.create({
        username,
        password
    })
    res.status(200).json({ msg: 'Admin created successfully' })
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
    Course.find({})
    .then(function(value) {
        res.status(200).json(value);
    })
    .catch(err => {
        console.log("Can't retrieved data!");
    })
});

module.exports = router;
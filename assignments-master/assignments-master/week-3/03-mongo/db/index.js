const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://amarnath2633:c9nz30CmflJOqYZb@cluster0.ckwavhx.mongodb.net/course-ecom');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    Price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
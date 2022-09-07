import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String
    }
})

const Course = mongoose.model('courses', CourseSchema);

export default Course;
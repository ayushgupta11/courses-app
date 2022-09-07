import Course from '../models/course';

export const getCourses = async (req, res) => {
    const courses = await Course.find();
    res.send({
        courses
    });
}
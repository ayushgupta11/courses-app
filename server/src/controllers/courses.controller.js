import Course from '../models/course';

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.send({
            courses
        });
    }
    catch (err) {
        res.status(500).send({
            message: 'error'
        })
    }
}
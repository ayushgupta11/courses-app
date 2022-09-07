import Subject from '../models/subject';

export const getSubjects = async (req, res) => {
    const subjectsArr = await Subject.find({
        courseId: req.params.id
    });
    const subjectPromises = subjectsArr.map(getChapters)
    const subjects = await Promise.all(subjectPromises);
    res.send({
        subjects
    });
}

const getChapters = (item) => {
    return new Promise((resolve) => {
        if (item.hasChapters) {
            (async () => {
                const chapters = await Subject.find({
                    courseId: item._id
                })
                console.log(chapters);
                resolve({
                    ...item._doc,
                    chapters
                })
            })()
        }
        else resolve({ ...item })
    })
}
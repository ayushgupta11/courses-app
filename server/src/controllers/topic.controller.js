import Topic from "../models/topic";

export const getTopics = async (req, res) => {
    const topics = await Topic.find({
        subjectId: req.params.id
    });
    res.send({
        topics
    });
}
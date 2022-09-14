import File from "../models/file";

export const getFiles = async (req, res) => {
    const files = await File.find({
        subjectId: req.params.id
    });
    res.send({
        files
    });
}
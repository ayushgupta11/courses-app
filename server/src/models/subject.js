import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SubjectSchema = new mongoose.Schema({
    courseId: ObjectId,
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    hasChapters: Boolean,
})

const Subject = mongoose.model('subjects', SubjectSchema);

export default Subject;
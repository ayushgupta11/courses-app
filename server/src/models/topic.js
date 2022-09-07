import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TopicSchema = new mongoose.Schema({
    subjectId: ObjectId,
    name: {
        type: String,
        required: true,
    },
    fileName: {
        type: String
    },
    type: String
})

const Topic = mongoose.model('topics', TopicSchema);

export default Topic;
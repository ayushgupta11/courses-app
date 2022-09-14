import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FilesSchema = new mongoose.Schema({
    topicId: ObjectId,
    name: {
        type: String,
        required: true,
    },
    fileName: {
        type: String
    },
    type: String
})

const File = mongoose.model('files', FilesSchema);

export default File;
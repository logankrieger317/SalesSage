const mongoose = require('mongoose');
const { Schema } = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const Profile = new Schema(
    {
        _id: { type: objectId, auto: true },
        name: { type: String, required: true },
        position: { type: String, required: true },
        email: { type: String, required: true },
    },
    { timestamps: true },
)
export default mongoose.model('profile', Profile)
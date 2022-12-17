import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
    peep: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String,
        required: true
    }
})

export default new mongoose.model(`Peep`, peepSchema);
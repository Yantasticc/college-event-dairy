import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
        name: {
            type: String,
            requried: true,
        },
        email: {
            type: String,
            requried: true,
            unique: true,
        },
        password: {
            type: String,
            requried: true,
            minLength: 6,
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema)
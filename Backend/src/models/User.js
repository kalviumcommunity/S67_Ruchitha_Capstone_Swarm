const { Schema, model } = require("mongoose");

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+@.+\..+/
    },

    password: { 
        type: String,
        required: true,
        unique: true,
    },

    profileImage: {
        type: String, 
        default: '',
    },

    role: { 
        type: String,
        default: '',
    },

    about: {
        type: String,
        default: '',
    },

    skills: {
        type: [String],
        default: [],
    },

    experiences: {
        type: [String],
        default: [],
    },

    links: [
        {
          name: { type: String },
          url: { type: String }
        }
    ],

    followers: [
        {
          userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
        }
    ],

    following: [
        {
          userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
        }
    ],

    points: {
        type: Number,
        default: 0,
    },

    helpedOthers: {
        type: Number,
        default: 0,
    },

    postedQuestions: {
        type: Number,
        default: 0,
    }

}, {timestamps: true});

const User = model('User', userSchema);
module.exports = User;
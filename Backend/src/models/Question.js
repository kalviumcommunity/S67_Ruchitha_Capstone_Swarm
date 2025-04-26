const { Schema, model } = require("mongoose");


const commentSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  commentText: {
    type: String,
    required: true,
  }

}, { timestamps: true });



const answerSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  answerText: {
    type: String,
    required: true,
  },

  upvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  
  isAccepted: {
    type: Boolean, 
    default: false 
  }

}, { timestamps: true });



const questionSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  tags: {
    type: [String],
    default: [] 
  },

  answers: [answerSchema], 

  comments: [commentSchema], 

  views: {
    type: Number,
    default: 0
  },

  upvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],

  solved: {
    type: Boolean,
    default: false
  },

  filterOptions: {
    type: String,
    required: true,
    enum: ['Recent', 'Popular', 'Unanswered']
  }

}, { timestamps: true });




const Question = model('Question', questionSchema);
module.exports = Question;
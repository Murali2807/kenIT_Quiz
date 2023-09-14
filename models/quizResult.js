const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
  username: { type: String, required: true },
  answerCount: Number,
  timestamp: { type: Date, default: Date.now },
  timerTime: { type: String, required: true },
});

const QuizResult = mongoose.model("QuizResult", quizResultSchema, "results");
// const QuizResult = mongoose.model("QuizResult", quizResultSchema, "Results");

module.exports = QuizResult;
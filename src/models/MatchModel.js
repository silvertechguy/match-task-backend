const mongoose = require('mongoose');

const matchSchema = mongoose.Schema(
  {
    teamAName: {
      type: String,
      required: true,
    },
    teamBName: {
      type: String,
      required: true,
    },
    teamAHome: {
      type: String,
      required: true,
    },
    teamBHome: {
      type: String,
      required: true,
    },
    teamAAway: {
      type: String,
      required: true,
    },
    teamBAway: {
      type: String,
      required: true,
    },
    teamAScore: {
      type: Number,
      required: true,
    },
    teamBScore: {
      type: Number,
      required: true,
    },
    leauge: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;

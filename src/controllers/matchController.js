const asyncHandler = require('express-async-handler');
const Match = require('../models/MatchModel');

// @desc    Create a match
// @route   POST /api/matches
// @access  Public
const createMatch = asyncHandler(async (req, res) => {
  const teamAName = req.body.teamAName;
  const teamBName = req.body.teamBName;
  const teamAHome = req.body.teamAHome;
  const teamBHome = req.body.teamBHome;
  const teamAAway = req.body.teamBHome;
  const teamBAway = req.body.teamAHome;
  const teamAScore = req.body.teamAScore;
  const teamBScore = req.body.teamBScore;
  const leauge = req.body.leauge;
  const date = req.body.date;

  const match = new Match({
    teamAName,
    teamBName,
    teamAHome,
    teamBHome,
    teamAAway,
    teamBAway,
    teamAScore,
    teamBScore,
    leauge,
    date,
  });

  const createdMatch = await match.save();
  res.status(201).json(createdMatch);
});

// @desc    Fetch all matches
// @route   GET /api/matches
// @access  Public
const getMatches = asyncHandler(async (req, res) => {
  const matches = await Match.find({});

  res.json({ matches });
});

// @desc    Fetch single match
// @route   GET /api/matches/:id
// @access  Public
const getMatchById = asyncHandler(async (req, res) => {
  const match = await Match.findById(req.params.id);

  if (match) {
    res.json(match);
  } else {
    res.status(404);
    throw new Error('Match not found');
  }
});

// @desc    Update a match
// @route   PUT /api/matches/:id
// @access  Public
const updateMatch = asyncHandler(async (req, res) => {
  const match = await Match.findById(req.params.id);

  if (match) {
    match.active = !match.active;
    const updatedMatch = await match.save();
    res.json(updatedMatch);
  } else {
    res.status(404);
    throw new Error('Match not found');
  }
});

// @desc    Delete a match
// @route   DELETE /api/matches/:id
// @access  Public
const deleteMatch = asyncHandler(async (req, res) => {
  const match = await Match.findById(req.params.id);

  if (match) {
    await match.remove();
    res.json({ message: 'Match removed' });
  } else {
    res.status(404);
    throw new Error('Match not found');
  }
});

module.exports = {
  createMatch,
  getMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
};

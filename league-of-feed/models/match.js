var mongoose = require ("mongoose");
var Schema = mongoose.Schema;
var MatchSchema = new Schema({
  matchVersion: {
    type: String
  },
  region: {
    type: String
  },
  matchId: {
    type: Number
  },
  matchMode: {
    type: String
  },
  matchType:{
    type: String
  },
  matchDuration:{
    type: String
  },
  queueType: {
    type: String
  },
  mapId: {
    type: Number
  },
  season: {
    type: String
  },
  participantIdentities : {},
  participants : {},
  teams : {},
  timeline: {},
  players: {},
  analysis: {} 
}, {strict: false});


var Match = mongoose.model("Match", MatchSchema);

// Export the model so the server can use it
module.exports = Match;

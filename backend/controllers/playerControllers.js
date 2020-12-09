import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);
const ObjectId = mongoose.Types.ObjectId;

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((err, player) => {
    if (err) {
      res.send(err);
    }
    res.json(player);
  });
};

export const getPlayers = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      res.send(err);
    }
    res.json(players);
  });
};

export const getPlayerById = (req, res) => {
  Player.findById(req.params.playerId, (err, player) => {
    if (err) {
      res.send(err);
    }
    res.json(player);
  });
};

export const updatePlayer = (req, res) => {
  // The {new: true} object below means that the player we get back
  // from this call is going to be the new updated player, rather than
  // the default of old pre-existing player.
  // Also, note that we get the playerId from the parameters, yet the
  // actual fields to be updated from the body.
  Player.findOneAndUpdate(
    {_id: req.params.playerId}, req.body, {new: true}, (err, player) => {
      if (err) {
        res.send(err);
      }
      res.json(player);
    });
};
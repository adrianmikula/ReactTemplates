const express = require("express");
const router = express.Router();

// load the dummy backend database
let players = require("../data/dummyDatabase");

// respond to a GET request with a list of player details
router.get("/all", async (req, res) => {
    try {
      res.status(200).json({
        data: players
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

// respond to a GET request with details of a single player
  router.get("/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
      let player = players.find(player => player._id === id);
      res.status(200).json({
        data: player
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

module.exports = router;
const Board = require('../models/board');


 const getBoards = async (req, res) => {
  await Board.find()
    .then(boards => res.send(boards))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

const addBoard = async  (req, res) => {
  const newBoard = await new Board(req.body);
  newBoard.save()
    .then(board => res.send(board))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

module.exports = {
  getBoards,
  addBoard
};

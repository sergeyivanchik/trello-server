const Board = require('../models/board');
const List = require('../models/list');
const Task = require('../models/task');


 const getBoards = async (req, res) => {
  await Board.find()
    .then(boards => res.send(boards))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

const getBoardsByUser = async (req, res) => {
  await Board.find({ user: req.params.userId})
    .then(boards => res.send(boards))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

const getBoardById = async (req, res) => {
  await Board.findById(req.params.id)
    .then(board => res.send(board))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
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

const deleteBoard = async (req, res) => {
  await Board.findByIdAndDelete(req.params.id)
    .then(async board => {
      res.send(board);
      console.log('deleted board ' + board);
      await List.find({ board: board.id })
        .then(lists => {
          lists.forEach(async elem => {
            await Task.deleteMany({ list: elem.id })
              .then(tasks => console.log('deleted tasks' + tasks))
              .catch(error => {
                res.status(500).send({
                  message: error.message
                });
                res.send(error);
              });
          });
        })
        .catch(error => {
          res.status(500).send({
            message: error.message
          });
          res.send(error);
        });

      await List.deleteMany({ board: board.id })
        .then(lists => console.log('deleted lists ' + lists))
        .catch(error => {
          res.status(500).send({
            message: error.message
          });
          res.send(error);
        });
    })
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

module.exports = {
  getBoards,
  addBoard,
  getBoardById,
  getBoardsByUser,
  deleteBoard
};

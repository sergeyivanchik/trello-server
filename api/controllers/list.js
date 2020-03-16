const List = require('../models/list');
const Task = require('../models/task');


const getLists = async (req, res) => {
  await List.find()
    .then(lists => res.send(lists))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

const addList = async (req, res) => {
  const newList = await new List(req.body);
  newList.save()
    .then(list => res.send(list))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

const getListsByBoard = async (req, res) => {
  await List.find({board: req.params.boardId})
  .then(lists => res.send(lists))
  .catch(error => {
    res.status(500).send({
      message: error.message
    });
  });
};

const deleteList = async (req, res) => {
  await List.findByIdAndDelete(req.params.id)
    .then(async list => {
      res.send(list);
      console.log('deleted list ' + list);
      await Task.deleteMany({list: list.id})
        .then(tasks => console.log('deleted tasks ' + tasks))
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
  getLists,
  addList,
  getListsByBoard,
  deleteList
};

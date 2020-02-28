const List = require('../models/list');


async function getLists(req, res) {
  await List.find()
    .then(lists => res.send(lists))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

async function addList(req, res) {
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

async function getListsByBoard(req, res) {
  await List.find({board: req.params.boardId})
  .then(lists => res.send(lists))
  .catch(error => {
    res.status(500).send({
      message: error.message
    });
  });
}

module.exports = {
  getLists,
  addList,
  getListsByBoard
};

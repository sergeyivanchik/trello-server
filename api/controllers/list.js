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

module.exports = {
  getLists,
  addList
};

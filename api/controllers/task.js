const Task = require('../models/task');


const getTasks = async (req, res) => {
  await Task.find()
    .then(tasks => res.send(tasks))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

const addTask = async (req, res) => {
  const newTask = await new Task(req.body);
  newTask.save()
    .then(task => res.send(task))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

const getTasksByList = async (req, res) => {
  await Task.find({list: req.params.listId})
  .then(tasks => res.send(tasks))
  .catch(error => {
    res.status(500).send({
      message: error.message
    });
  });
};

const changeTaskComplete = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body)
    .then(task => res.send(task))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

module.exports = {
  getTasks,
  addTask,
  getTasksByList,
  changeTaskComplete
};

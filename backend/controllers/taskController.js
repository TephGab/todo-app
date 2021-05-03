const taskModel = require("../models/taskModel");

const ObjectID = require("mongoose").Types.ObjectId;


module.exports.readTask = (req, res) => {
  taskModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
};

module.exports.createTask = async (req, res) => {
  const newTask = new taskModel({
    text: req.body.text,
    checked: false
  });

  try {
    const task = await newTask.save();
    return res.status(201).json(task);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updateTask = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedRecord = {
    text: req.body.text,
    checked: req.body.checked,
    id: req.body._id
  };

  taskModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};

module.exports.deleteTask = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  taskModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};
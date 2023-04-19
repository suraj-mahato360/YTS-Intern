const asyncHandler = require("express-async-handler");
const Task = require("../model/taskSchema")

//@desc Get all tasks
//@route GET /api/tasks
//@access private

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user_id: req.user.id});
  res.status(200).json(tasks);
});

//@desc Create all tasks
//@route POST /api/tasks
//@access private

const createTask = asyncHandler(async (req, res) => {
  console.log("the rquest body is :", req.body);
  const {tag, task} = req.body;
  if(!task || !tag){
    res.status(400);
    throw new Error("Field is mandatory")
  }
  const tasks = await Task.create({
    tag, task, user_id: req.user.id,
  })
  res.status(201).json(tasks);
});

//@desc Update tasks
//@route PUT /api/tasks
//@access private

// const updateTask = asyncHandler(async (req, res) => {
//   res.status(200).json({ message: `Update task for ${req.params.id}` });
// });

//@desc get all tasks
//@route GET /api/tasks/:id
//@access private

const getTask = asyncHandler(async (req, res) => {
  const tasks = await Task.findById(req.params.id);
  if(!tasks) {
    res.status(404);
    throw new Error("Task not found");
  }
  res.status(200).json(tasks);
});

//@desc delete task
//@route DELETE /api/tasks/:id
//@access private

const deleteTask = asyncHandler(async (req, res) => {
  const tasks = await Task.findByIdAndRemove(req.params.id);
  if(!tasks) {
    res.status(404);
    throw new Error("Task not found");
  }
  if(tasks.user_id.toString() !== req.user.id ) {
    res.status(403);
    throw new Error("User don't have permission to delete other user task")
  }
  res.status(200).json(tasks);
});



module.exports = { getTask, getTasks , createTask, deleteTask };

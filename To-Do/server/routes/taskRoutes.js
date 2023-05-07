const express = require("express");
const router = express.Router();
const { getTasks, getTask, createTask, deleteTask } = require("../controllers/taskController");
const validateToken = require("../middleware/validateTokenHandler");


// router.route("/tag/:id").put(updateTask);
router.use(validateToken)

router.route("/").post(createTask).get(getTasks);

router.route("/:id").get(getTask);

router.delete("/:id", deleteTask);



module.exports = router;
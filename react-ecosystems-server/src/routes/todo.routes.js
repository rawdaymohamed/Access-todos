import express from "express";
import {
  createTodo,
  getAll,
  deleteTodo,
  markCompleted,
  todoDelay,
} from "../controllers/todo.controller";
const router = express.Router();
router.route("/todos").get(getAll).post(createTodo);
router.route("/todos-delay").get(todoDelay);
router.route("/todos/:id/completed").post(markCompleted);
router.route("/todos/:id").delete(deleteTodo);

export default router;

import Todo from "../models/todo.model";
export const getAll = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.json(todos);
  } catch (err) {
    return res.json({ message: "Sorry cannot get todos" });
  }
};

export const createTodo = async (req, res) => {
  const { text } = req.body;
  if (text) {
    const insertedTodo = new Todo(req.body);
    await insertedTodo.save();
    res.status(200).json(insertedTodo);
  } else {
    res
      .status(400)
      .json({ message: "Request body should have a text property" });
  }
};
export const markCompleted = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Todo.findByIdAndUpdate(
      id,
      { isCompleted: true },
      { new: true }
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: "There is no todo with that id" });
  }
};
export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findById(id);
    await Todo.findByIdAndDelete(id);
    res.status(200).json(deletedTodo);
  } catch (err) {
    res.status(400).json({ message: "There is no todo with that id" });
  }
};
export const todoDelay = async (req, res) => {
  const result = await Todo.find({});
  setTimeout(() => res.status(200).json(result), 2000);
};

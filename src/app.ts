import express, { type Express, type Request, type Response } from "express";

import swaggerUi from "swagger-ui-express";
import openapiSpecification from "./openapi.js";



const app: Express = express();

const tasks = [
  { id: 1, title: "Task 1", done: false },
  { id: 2, title: "Task 2", done: true },
  { id: 3, title: "Task 3", done: false },
];

app.get("/", (req: Request, res: Response) => {
  res.json({
    name: "Task API",
    version: "1.0.0",
    endpoints: ["/tasks"],
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.get("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((task) => task.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});


app.get("/tasks", (req: Request, res: Response) => {
  res.json(tasks);
});


app.use(express.json());
app.post("/tasks", (req: Request, res: Response) => {
  const Newtitle = req.body.title;

  if (!Newtitle) {
    res.status(400).json({ error: "Title is required" });
    return;
  }

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title: Newtitle,
    done: false,
  };
  console.log("Received task:", newTask);
  console.log("Current tasks:", tasks);

  tasks.push(newTask);

  res.status(201).json("task added successfully");
  console.log("task added successfully:", newTask);
});


app.put("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const newTask = tasks.find((task) => task.id === taskId);

  if (!newTask) {
    res.status(404).json({ error: "Task not found" });
    return;
  }

  const newTitle = req.body.title;

  if(!newTitle && req.body.done === undefined) {
    res.status(400).json({ error: "Title or done status is required" });
    return;
  }

  if (req.body.title) {
    newTask.title = req.body.title;
  }
  if (req.body.done !== undefined) {
    newTask.done = req.body.done;
  }

  res.json(newTask);
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id ===taskId);
  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
    return;
  }

  tasks.splice(taskIndex, 1);

  res.status(204).json("task deleted successfully");
});


app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(openapiSpecification)
);

app.listen(3000);

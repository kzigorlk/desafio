import { Request, Response } from "express";
import { tasks } from "../../models/Task";

export function createTask(req: Request, res: Response) {
  try {
    let maxId = 0;

    for (const task of tasks) {
      if (task.id > maxId) {
        maxId = task.id;
      }
    }

    const { titulo } = req.body;
    const concluida = false;
    const id = ++maxId;

    const existingTask = tasks.find((task) => task.id === id);
    if (existingTask) {
      return res.status(400).json({
        error: "ID alredy exist.",
      });
    }

    const newTask = { id: id, titulo, concluida };
    tasks.push(newTask);

    res.json(newTask);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

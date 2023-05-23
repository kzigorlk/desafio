import { Request, Response } from "express";
import { tasks } from "../../models/Task";

export function createTask(req: Request, res: Response) {
  try {
    const { id, titulo, concluida } = req.body;
    const newId = Number(id);

    const existingTask = tasks.find((task) => task.id === newId);
    if (existingTask) {
      return res.status(400).json({
        error: "ID alredy exist.",
      });
    }

    const newTask = { id: newId, titulo, concluida };
    tasks.push(newTask);

    res.json(newTask);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

import { Request, Response } from "express";
import { tasks } from "../../models/Task";
import { findIndexById } from "../../functions/findIndexById";

export function changeTask(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const statusUpdate = req.body;

    const index = findIndexById(id);

    if (index !== -1) {
      const task = tasks[index];

      if (statusUpdate.concluida !== undefined) {
        task.concluida = JSON.parse(statusUpdate.concluida);
      }

      res.json({
        tasks,
      });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
}

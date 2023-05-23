import { Request, Response } from "express";

import { tasks } from "../../models/Task";

export function listTasks(req: Request, res: Response) {
  try {
    const newTasks = tasks;
    res.json(newTasks);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

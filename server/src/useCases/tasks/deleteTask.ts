import { Request, Response } from "express";

import { tasks } from "../../models/Task";

import { findIndexById } from "../../functions/findIndexById";

export function deleteTask(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const indice = findIndexById(id);

    if (indice !== -1) {
      tasks.splice(indice, 1);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
}

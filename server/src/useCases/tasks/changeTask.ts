import { Request, Response } from "express";

import { tasks } from "../../models/Task";

import { findIndexById } from "../../functions/findIndexById";

export function changeTask(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const atualizacao = req.body;

    const index = findIndexById(id);

    if (index !== -1) {
      const task = tasks[index];

      if (atualizacao.titulo) {
        task.titulo = atualizacao.titulo;
      }

      if (atualizacao.concluida !== undefined) {
        task.concluida = atualizacao.concluida;
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

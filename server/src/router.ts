import { Router } from "express";
import { listTasks } from "./useCases/tasks/listTask";
import { createTask } from "./useCases/tasks/createTask";
import { changeTask } from "./useCases/tasks/changeTask";
import { deleteTask } from "./useCases/tasks/deleteTask";

export const router = Router();

//Retorna um array de objetos de tarefa no formato JSON.
router.get("/tasks", listTasks);

//Aceita um objeto de tarefa no corpo da requisição (formato JSON) e adiciona-o ao array de tarefas.
router.post("/tasks", createTask);

//Aceita um id de uma tarefa e um objeto de tarefa no corpo da requisição (formato JSON) e atualiza a tarefa no array.
router.patch("/tasks/:id", changeTask);

//Aceita um id de uma tarefa e remove a tarefa do array
router.delete("/tasks/:id", deleteTask);

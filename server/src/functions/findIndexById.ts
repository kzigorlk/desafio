import { tasks } from "../models/Task";

export function findIndexById(id: number): number {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      return i;
    }
  }
  return -1;
}

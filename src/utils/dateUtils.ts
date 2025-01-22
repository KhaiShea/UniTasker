import { Task } from '../models/Task';

export function groupTasksByClass(tasks: Task[]): { [key: string]: Task[] } {
  return tasks.reduce((grouped, task) => {
    if (!grouped[task.className]) {
      grouped[task.className] = [];
    }
    grouped[task.className].push(task);
    return grouped;
  }, {} as { [key: string]: Task[] });
}

export function sortTasksByDueDate(tasks: Task[]): Task[] {
  return tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
}

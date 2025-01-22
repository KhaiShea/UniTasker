import { Task } from './models/Task';
import { Class } from './models/Class';
import { groupTasksByClass, sortTasksByDueDate } from './utils/dateUtils';

const tasks: Task[] = [
  { title: "Complete SWEN221 Assignment", description: "Finish the coding assignment.", dueDate: new Date("2025-02-01"), className: "SWEN221", priority: "high", completed: false },
  { title: "AI 101 Midterm Preparation", description: "Study for midterm exam.", dueDate: new Date("2025-01-30"), className: "AI 101", priority: "medium", completed: false },
  { title: "SWEN221 Quiz", description: "Prepare for SWEN221 quiz.", dueDate: new Date("2025-02-05"), className: "SWEN221", priority: "low", completed: false },
];

const groupedTasks = groupTasksByClass(tasks);
const sortedTasks = sortTasksByDueDate(tasks);

console.log("Grouped Tasks:", groupedTasks);
console.log("Sorted Tasks by Due Date:", sortedTasks);

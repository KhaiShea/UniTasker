export interface Task {
    title: string;
    description: string;
    dueDate: Date;
    className: string;
    priority: "low" | "medium" | "high";
    completed: boolean;
  }
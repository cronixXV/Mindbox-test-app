export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

export type Filter = "all" | "completed" | "active";

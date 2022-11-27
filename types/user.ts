import { Task } from "./task";

export type User  = {
  id: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  tasks: Task[];
}
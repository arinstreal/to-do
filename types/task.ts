import { User } from "./user";

export type Task  = {
  id?: string;
  title: string;
  content?: string;
  isDone?: boolean;
  author?: User;
  authorId?: string;
}
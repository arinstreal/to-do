import { User } from "./user";

export type TTask  = {
  id?: string;
  title: string;
  content?: string;
  isDone?: boolean;
  author?: User;
  authorId?: string;
}
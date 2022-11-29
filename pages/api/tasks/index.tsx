import { NextApiRequest, NextApiResponse } from "next";
import { TTask } from "../../../types/task";
import prisma from "../../../lib/prisma";

//api/tasks
// Required fields in body: title
// Optional fields in body: content

export default async function
  handle(req: NextApiRequest,
         res: NextApiResponse<TTask | TTask[] | {error: string}>) {
  const { title, content, authorId } = req.body;

  if (req.method === 'POST') {
    console.log("Create new user");
    const task = await prisma.task.create({
      data: {
        content: content,
        title: title,
        author: { connect: { id: authorId } }
      }
    })
    // @ts-ignore
    res.status(200).json(task);
    return { props: { task } };
  } else if (req.method === 'GET') {
    console.log("GET all task lists")
    try {
      const tasks = await prisma.task.findMany();
      // @ts-ignore
      res.status(200).json(tasks);
      return {
        props: { tasks }
      }
    } catch (e) {
      res.status(500).json({ error: 'failed to load data' })
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
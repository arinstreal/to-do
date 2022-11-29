import { NextApiRequest, NextApiResponse } from "next";
import { TTask } from "../../../../../types/task";
import prisma from "../../../../../lib/prisma";

// /api/tasks/:taskId/[action]
// Required fields in body: title
// Optional fields in body: content
export default async function
  handler(req: NextApiRequest,
          res: NextApiResponse<TTask>) {
  const { taskId } = req.query;
  const { title, content, authorId } = req.body;
  // const taskId = req.query.id;

  switch (req.method) {
    case 'PATCH':
      console.log('patch');
      try {
        const task = await prisma.task.update({
          where: {
            // @ts-ignore
            id: taskId
          },
          data: {isDone: true}
        })        // @ts-ignore
        res.status(200).json(task);
        return {
          props: { task }
        }
      } catch (e) {
        // @ts-ignore
        res.status(500).json({ error: 'failed to load data' })
      }
      break;
    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
  }
}
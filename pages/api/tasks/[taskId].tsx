import { NextApiRequest, NextApiResponse } from "next";
import { Task } from "../../../types/task";
import prisma from "../../../lib/prisma";

// POST /api/tasks/:taskId
// Required fields in body: title
// Optional fields in body: content
export default async function
  handler(req: NextApiRequest,
         res: NextApiResponse<Task>) {
  const { taskId } = req.query;
  const { title, content, authorId } = req.body;

  switch (req.method) {
    case 'PUT':
      console.log('Edit task');
      const params = req.body;
    type Params = { taskId: string | number };
    // const result = await prisma.task.update({
    // where: { taskId: Number(taskId) },
    // data: { ...params }
    // });
      break;
    case 'GET':
      console.log('Get task');
    // const task = await prisma.task.findFirst({
    //   where: {
    //     taskId: taskId
    //   }
    // })
    // return { params: { task } };
      break;
    case 'DELETE':
    // `/tasks/:taskId`

    //   // const post = await prisma.task.delete({
    //   //   where: { taskId: postId },
    //   // });
    // res.json(post);
      break;
    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
  }
}
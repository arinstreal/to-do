import { NextApiRequest, NextApiResponse } from "next";
import { TTask } from "../../../../types/task";
import prisma from "../../../../lib/prisma";

// /api/tasks/:taskId
// Required fields in body: title
// Optional fields in body: content
export default async function
  handler(req: NextApiRequest,
          res: NextApiResponse<TTask>) {
  const { taskId } = req.query;
  const { title, content, authorId } = req.body;
  // const taskId = req.query.id;

  switch (req.method) {
    case 'PUT':
      console.log('Edit task');
      // const params = req.body;
      // type Params = { taskId: string | number };
      // const result = await prisma.task.update({
      // where: { taskId: Number(taskId) },
      // data: { ...params }
      // });
      break;
    case 'GET':
      console.log('Get task');
      console.log(req)
      try {
        const task = await prisma.task.findFirst({
          where: {
            // @ts-ignore
            id: taskId
          }
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
    case 'PATCH':
      console.log('patch');
      const params = req.body;
    type Params = { taskId: string | number };
      // const result = await prisma.task.update({
      // where: { taskId: Number(taskId) },
      // data: { ...params }
      // });
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
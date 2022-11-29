import { useFetch } from "../../hooks/useFetch";
import { TTask } from "../../types/task";
import { FC } from "react";

export const Task: FC<TTask> = ({ id, content, authorId, author, title, isDone }: TTask) => {
  const { sendApi: setDone } = useFetch({ url: `tasks/${id}/done`, method: 'PATCH' });
  const handleOnClickDone = () => {
    setDone();
  }
  return (
    <div>
      <input type="checkbox" checked={isDone} onClick={handleOnClickDone} disabled={isDone}/>
      {title} - {content}</div>
  )
}
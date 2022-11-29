import prisma from '../lib/prisma';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { TTask } from "../types/task";
import { Task } from '../components/Task/Task';

const initialState = {
  title: "",
  content: ""
}
export default function Home() {
  const [values, setValues] = useState(initialState);
  const { data: tasks = [], sendApi: getTaskList } = useFetch({ url: 'tasks', method: 'GET' });
  // const { isSuccess: isSuccessPublishTask } = useFetch({ url: 'tasks', method: 'POST' });

  useEffect(() => {
      getTaskList();
  }, []);

  async function publishTask(task: TTask): Promise<void> {
    try {
      const test = await fetch(`/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      }).then();
      getTaskList();
      console.log(test)
    } catch (error) {
      alert(error);
    }
  }

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newValues = {
      authorId: '1',
      ...values
    }
    publishTask(newValues);
  }

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: newValue });
  }

  return (
    <div>
      <div>
        <form onSubmit={handleAddTask}>
          <label>
            Tytuł
            <input type="text" name="title" onChange={onChangeInput}/>
          </label>
          <label>
            Treść:
            <input type="text" name="content" onChange={onChangeInput}/>
          </label>
          <button type="submit">Dodaj zadanie</button>
        </form>
      </div>
      <div>
        Twoje zadania: <span>{tasks?.length || 0} </span>
        <div>
          {tasks?.map(item => <Task key={item.id} id={item.id} title={item.title} isDone={item.isDone} content={item.content}/>)}
        </div>
      </div>
    </div>
  )
}

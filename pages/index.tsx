import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Task } from "../types/task";
import { useFetch } from "../hooks/useFetch";

const initialState = {
  title: "",
  content: ""
}
export default function Home() {
  const [values, setValues] = useState(initialState);
  const { data: tasks = [], sendApi: getTaskList } = useFetch({ url: 'tasks', method: 'GET' });
  useEffect(() => {
    getTaskList();
  }, []);

  async function publishTask(task: Task): Promise<void> {
    try {
      const test = await fetch(`/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      console.log(test)
      getTaskList();

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
  console.log(tasks)
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
          {tasks?.map(item => <div key={item.id}>{item.title} - {item.content}</div>)}
        </div>
      </div>
    </div>
  )
}

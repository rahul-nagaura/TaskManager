import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TaskList = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const fetchAllTask = async () => {
      try {
        const res = await axios.get("/tasks/");
        setTask(res.data.task);
        console.log(res.data.task);  // Log the data to see what is returned
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    }
    fetchAllTask();
  },[])
  return (
    <>
      <div className=''>
        <h1 className="text-4xl font-bold mb-4">Task List</h1>
        <ul className="list-disc pl-5">
            {Array.isArray(tasks) && tasks.map((task, index) => (
                <li key={index} className="mb-2">
                    <h2 className="text-2xl">{task.title}</h2>
                    <p>{task.description}</p>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default TaskList

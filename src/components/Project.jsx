import React, { useRef, useState } from "react";
import Button from "../UI/Button";

function Project({ projects, onAddTask, onDeleteProject, onDeleteTask }) {
  // console.log(projects);
  const taskRef = useRef();

  const addTaskHandler = () => {
    onAddTask(projects[0].id, taskRef.current.value);

    taskRef.current.value = "";
  };

  const date = `${projects[0].date.day} ${projects[0].date.month} ${projects[0].date.year}`;

  return (
    <div className="mt-36 flex flex-col md:w-2/4 px-4 w-full mx-auto max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {projects[0].title}
        </h1>
        <Button
          styles="text-stone-700 hover:text-red-500 px-6 py-2"
          onClick={() => onDeleteProject(projects[0].id)}
        >
          Delete
        </Button>
      </div>

      <p className="mb-4 text-stone-400">{date}</p>
      <p className="text-stone-600 whitespace-pre-wrap">
        {projects[0].description}
      </p>

      <div className="my-4 h-1 bg-stone-300 rounded-full"></div>

      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      <div className="flex items-center gap-4">
        <input className="px-2 py-1 rounded-sm bg-stone-200" ref={taskRef} />
        <Button
          className="text-stone-700 hover:text-stone-950 px-3 py-1"
          onClick={addTaskHandler}
        >
          Add Task
        </Button>
      </div>
      {projects[0].tasks.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projects[0].tasks.map((task) => (
            <li className="flex justify-between my-4" key={task.id}>
              <p>{task.task}</p>
              <Button
                styles="text-stone-700 hover:text-red-500 px-3 py-1"
                onClick={() => onDeleteTask(projects[0].id, task.id)}
              >
                Clear
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 mt-10">
          This project does not have a task yet
        </p>
      )}
    </div>
  );
}

export default Project;

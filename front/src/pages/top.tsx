import {v4 as uuidv4} from "uuid";
import {Task} from "@/types";
import { useContext, useState } from "react";
import { TaskContext } from "@/providers/task";
import {Link} from "react-router-dom";

export function Top() {
  const { tasks, setTasks} = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = ev => {
    setTitle(ev.target.value);
  };

  const handleFormSubmit: React.FormEventHandler<
    HTMLFormElement
  > = async ev => {
    ev.preventDefault();
    if (title === "") {
      return;
    }
    const newTask: Task = {id: uuidv4(), title, status: "todo"};
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const handleClearButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setTasks(tasks.filter(task => task.status !== "done"));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex">
          <input
            name="title"
            value={title}
            className="grow h-12 p-4 border-solid border border-gray-300"
            data-test="input-title"
            placeholder="Add your new todo"
            onChange={handleTitleChange}
          />
          <button
            data-test="button-submit"
            className="ml-4 h-12 w-12 bg-violet-500 text-white text-2xl"
          >
            +
          </button>
         
        </div>
        </form>
        <TaskList tasks={tasks} />
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={handleClearButtonClick}
            data-test="button-clear"
            className="text-lg hover:text-gray-500"
          >
            clear all done tasks
          </button>
        </div>
    </div>
  );
}

function TaskList({tasks}: {tasks: Task[]}) {
  return (
    <ul data-test="task-list">
    {tasks.map(task => (
      <li key={task.id}>
        <TaskItem task={task} />
      </li>
    ))}
  </ul>
  )
}

function TaskItem({task}: {task: Task}) {
  const {tasks, setTasks} = useContext(TaskContext);
  const handleButtonClick = () => {
    setTasks(tasks.map(t => (t.id === task.id ? {...t, status: "done"} :t))); 
  };
  return (
    <div className="flex items-center border-b p-6" data-test="task-item">
      {task.status === "todo" ? (
        <button
          className="inline-flex justify-center text-white w-6 h-6 bg-slate-300 rounded-full"
          data-test="button-todo"
          onClick={() => handleButtonClick()}
        >
          ✓
        </button>
      ) : (
        <button 
          className="inline-flex justify-center text-white w-6 h-6 bg-orange-300 rounded-full"
          data-test="button-done"
        >
          ✓
        </button>
      )}
      <div
        className={`text-2xl ml-8 ${
          task.status == "done" ? "text-slate-400" : null
        }`}
        data-test="task-title"
      >
        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
      </div>
    </div>
  );
}


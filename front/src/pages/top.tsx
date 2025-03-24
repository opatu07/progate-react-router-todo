import { useContext } from "react";
import { TaskContext } from "@/providers/task";


export function Top() {
  const { tasks } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

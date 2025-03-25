import {useContext} from "react";
import {useParams} from "react-router-dom";
import {TaskContext} from "@/providers/task";

export function TaskPage() {
    const {id} = useParams<{id: string}>();
    const {tasks} = useContext(TaskContext);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        throw new Error("Task not found");
    }
    return (
        <div>
            <h2 className="text-4xl mt-8" data-test="task-title">
                {task.title}
            </h2>
            <div className="grid grid-cols-3 mt-5 border-b">
                <div className="col-span-1 font-bold border-t p-4">ID</div>
                <div className="col-span-2 border-5 p-4" data-test="task-id">
                    {task.id}
                </div>
                <div className="col-span-1 border-t font-bold p-4">STATUS</div>
                <div className="col-span-2 border-5 p-4" data-test="task-status">
                    {task.status === "done" ? "DONE" : "TODO"}
                </div>
            </div>
        </div>
    );
}

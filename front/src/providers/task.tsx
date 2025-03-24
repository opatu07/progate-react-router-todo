import {Task} from "@/types";
import {Dispatch, SetStateAction,} from "react";

type TaskContextType = {
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
};

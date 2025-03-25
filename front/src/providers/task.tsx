import {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";
import {Task} from "@/types";

type TaskContextType = {
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
};

export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    setTasks: () => {

    },
});

export const TaskProvider = ({children}: {children: ReactNode}) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
      <TaskContext.Provider value={{tasks, setTasks}}>
          {children}
      </TaskContext.Provider>
    );
};



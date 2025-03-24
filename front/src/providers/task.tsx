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
    setTasks: (): void => {

    },
});

export const TaskProvider = ({children}: {children: ReactNode}) => {
    const [tasks, setTasks] = useState<Task[]>([
        {id: "1", title: "test1", status: "todo"},
        {id: "2", title: "test2", status: "todo"},
        {id: "3", title: "test3", status: "todo"},
    ]);

    return (
      <TaskContext.Provider value={{tasks, setTasks}}>
          {children}
      </TaskContext.Provider>
    );
};



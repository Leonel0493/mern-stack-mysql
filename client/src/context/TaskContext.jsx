import { createContext, useContext, useState } from "react";
import { getTasksRequest, deleteTaskRequest } from "../api/tasks.api";
import swal from 'sweetalert'

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTask() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      swal({
        title: "Error on delete",
        text: `Sorry we do not delete the element ${error}`,
        icon: "error",
      });
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, loadTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TaskPage() {

  const {tasks, loadTask} = useTasks();

  useEffect(() => {

    loadTask();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No task yet</h1>;
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  }

  return (
    <div className="container mx-auto">
      <h1>Tasks</h1>
      <div className="grid grid-cols-2">{renderMain()}</div>
    </div>
  );
}

export default TaskPage;

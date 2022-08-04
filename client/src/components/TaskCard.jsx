import React from "react";
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div class="p-6 max-w-sm mb-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {task.title}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {task.description}
      </p>
      <p>{task.done == 1 ? "Task completed ✅" : "Task pending ❌"}</p>
      <p>{task.createAt}</p>
      <button class="inline-flex items-center py-2 px-3 mr-2 mt-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Edit
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;

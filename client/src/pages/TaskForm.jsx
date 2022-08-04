import React from "react";
import { createTaskRequest } from "../api/tasks.api";
import { Form, Formik } from "formik";
import swal from "sweetalert";

function TaskForm() {

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createTaskRequest(values);
          console.log(response);
          actions.resetForm();
          swal({
            title: "All is done!",
            text: "Task was added",
            icon: "success"
          })
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <div className="container mx-auto">
          <Form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Title
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="title"
                placeholder="Write a title"
                onChange={handleChange}
                value={values.title}
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Task Description
              </label>
              <textarea
                name="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write a description"
                onChange={handleChange}
                value={values.description}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default TaskForm;

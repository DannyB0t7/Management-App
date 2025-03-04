import React, { useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

function AddProject({ onAddProject, onProjects }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  const addProjectHandler = (e) => {
    e.preventDefault();

    if (
      titleRef.current.value === "" ||
      descRef.current.value === "" ||
      dateRef.current.value === ""
    ) {
      return;
    }

    const title =
      titleRef.current.value[0].toUpperCase() + titleRef.current.value.slice(1);

    const d = new Date(dateRef.current.value);
    const formattedDate = {
      day: d.getDate(),
      month: d.toLocaleString("default", { month: "short" }),
      year: d.getFullYear(),
    };

    const newProject = {
      id: Math.random(),
      title: title,
      description: descRef.current.value,
      date: formattedDate,
      tasks: [],
    };

    onAddProject(newProject);

    titleRef.current.value = "";
    descRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <div className="mt-24 flex flex-col md:w-2/4 px-2 w-full">
      <form onSubmit={addProjectHandler}>
        <div className="flex items-center justify-end gap-2 my-4">
          <Button
            styles="px-6 py-2 text-stone-800 hover:text-stone-950"
            type="button"
            onClick={() => {
              onProjects((prevState) => {
                return {
                  ...prevState,
                  addProject: false,
                };
              });
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            styles="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <Input label="title" type="text" input ref={titleRef} />
          <Input label="description" ref={descRef} />
          <Input label="due date" type="date" input ref={dateRef} />
        </div>
      </form>
    </div>
  );
}

export default AddProject;

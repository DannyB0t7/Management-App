import React from "react";
import noProjectImg from "../assets/no-projects.png";
import Button from "../UI/Button";

function NoProject({ onAddProject }) {
  return (
    <div className="mt-36 flex flex-col items-center w-full gap-5 px-4 md:w-2/4 mx-auto max-w-3xl">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectImg} />
      <h2 className="text-xl font-bold text-stone-500">
        No Project Selected
      </h2>
      <p className="text-stone-400">
        Select a project or get started with a new one
      </p>
      <Button
        styles="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 "
        onClick={() =>
          onAddProject((prevState) => {
            return {
              ...prevState,
              addProject: true,
            };
          })
        }
      >
        <span className="material-icons">add</span> Create New Project
      </Button>
    </div>
  );
}

export default NoProject;

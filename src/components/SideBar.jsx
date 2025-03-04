import React, { useState } from "react";
import Button from "../UI/Button";
import ProjectsButton from "./ProjectsButton";

function SideBar({ onAddProject, projects, onSelectProject }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <DestopSideBar
        onAddProject={onAddProject}
        showMenu={showMenu}
        onShowMenu={setShowMenu}
        projects={projects}
        onSelectProject={onSelectProject}
      />
      <MobileSideBar onShowMenu={setShowMenu} />
    </>
  );
}

export default SideBar;

function DestopSideBar({
  onAddProject,
  showMenu,
  onShowMenu,
  projects,
  onSelectProject,
}) {
  return (
    <div
      className={` bg-stone-900 text-stone-50 min-h-full absolute -left-full w-3/4 z-10 px-5 py-10 ${
        showMenu && "left-0"
      } sm:w-72 sm:relative sm:left-0 sm:top-0 sm:px-8 sm:py-16`}
    >
      {showMenu && (
        <span
          className="material-icons p-2 text-4xl"
          onClick={() => onShowMenu((prevState) => !prevState)}
        >
          close
        </span>
      )}

      <h2 className="my-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button
        styles="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 "
        onClick={() =>
          onAddProject((prevState) => {
            if (prevState.selectedProject === true) {
              return {
                ...prevState,
                selectedProject: false,
                addProject: true,
              };
            }

            return {
              ...prevState,
              addProject: true,
            };
          })
        }
      >
        <span className="material-icons">add</span>Add Project
      </Button>

      <div className="mt-5">
        {projects.projects.map((project) => (
          <ProjectsButton
            key={project.id}
            onClick={() => onSelectProject(project.id)}
          >
            {project.title}
          </ProjectsButton>
        ))}
      </div>
    </div>
  );
}

function MobileSideBar({ onShowMenu }) {
  return (
    <div
      className="absolute top-2 py-8 sm:hidden h-full"
      onClick={() => onShowMenu((prevState) => !prevState)}
    >
      <span className="material-icons p-2 text-4xl">menu</span>
    </div>
  );
}

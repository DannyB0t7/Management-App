import React, { useState } from "react";
import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";
import AddProject from "./components/AddProject";
import Project from "./components/Project";

function App() {
  const [project, setProjects] = useState({
    selectedProjectId: null,
    selectedProject: false,
    addProject: false,
    projects: [
      // {
      //   id: undefined,
      //   title: undefined,
      //   description: undefined,
      //   date: undefined,
      //   tasks: [],
      // },
    ],
  });

  const addProjectHandler = (newProject) => {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        projects: [
          ...prevProjects.projects,
          {
            ...newProject,
          },
        ],
      };
    });
  };

  const selectedProjectHandler = (id) => {
    setProjects((prevState) => {
      if (prevState.addProject === true) {
        return {
          ...prevState,
          addProject: false,
          selectedProject: true,
          selectedProjectId: id,
        };
      }

      return {
        ...prevState,
        selectedProject: true,
        selectedProjectId: id,
      };
    });
  };

  const addTaskHandler = (id, newTask) => {
    if (newTask === "") return;

    const projectIndex = project.projects.findIndex(
      (projectObj) => projectObj.id == id
    );

    setProjects((prevState) => {
      const newTasks = [
        ...prevState.projects[projectIndex].tasks,
        {
          id: Math.random(),
          task: newTask,
        },
      ];

      const existingProjects = prevState.projects.filter(
        (_, i) => i !== projectIndex
      );

      return {
        ...prevState,
        projects: [
          ...existingProjects,
          {
            ...prevState.projects[projectIndex],
            tasks: newTasks,
          },
        ],
      };
    });
  };

  const deleteProjectHandler = (id) => {
    const exsistingProjects = project.projects.filter(
      (projectObj) => projectObj.id !== id
    );

    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: false,
        selectedProjectId: null,
        projects: exsistingProjects,
      };
    });
  };

  const deleteTaskHandler = (projectID, taskID) => {
    const exsistingProjects = project.projects.filter((projectObj) => {
      return projectObj.id != projectID;
    });

    const projectIndex = project.projects.findIndex(
      (projectObj) => projectObj.id == projectID
    );

    const filteredProjectTasks = project.projects[projectIndex].tasks.filter(
      (task) => task.id !== taskID
    );

    setProjects((prevState) => {
      const updatedProject = {
        ...prevState.projects[projectIndex],
        tasks: filteredProjectTasks,
      };

      return {
        ...prevState,
        projects: [...exsistingProjects, updatedProject],
      };
    });
  };

  let content = <NoProject onAddProject={setProjects} />;

  if (project.addProject) {
    content = (
      <AddProject onAddProject={addProjectHandler} onProjects={setProjects} />
    );
  }

  let filteredProject = [];

  if (project.selectedProject) {
    filteredProject = project.projects.filter((projectObj) => {
      return projectObj.id == project.selectedProjectId;
    });

    content = (
      <Project
        projects={filteredProject}
        onAddTask={addTaskHandler}
        onDeleteProject={deleteProjectHandler}
        onDeleteTask={deleteTaskHandler}
      />
    );
  }

  return (
    <div className="w-full min-h-screen flex gap-3 md:gap-8 relative">
      <SideBar
        onAddProject={setProjects}
        projects={project}
        onSelectProject={selectedProjectHandler}
      />
      {content}
    </div>
  );
}

export default App;

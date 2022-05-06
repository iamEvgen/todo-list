import './style.css';
import './img/menu.png';
import './img/home.png';
import './img/GitHub.png';
import closeBtn from './icons/del.png';
import starOn from './icons/starOn.png';
import starOff from './icons/starOff.png'


class toDo {
  constructor(toDoId, projectId, title, notes, date, important) {
    this.toDoId = toDoId,
    this.projectId = projectId;
    this.title = title,
    this.notes = notes,
    this.dste = date,
    this.important = important
  }
}

class project {
  constructor(projectId, name) {
    this.projectId = projectId,
    this.name = name
  }
}


const projectsManager = (function() {
  let projectIdCounter = 0;
  let toDoIdCounter = 0;
  let activeProjectId = 0;
  const projectList = [];
  const toDoList = [];

  function getActiveProjectId() {
    return activeProjectId || 0;
  }

  function getActiveTitle() {
    return document.querySelector('.active').textContent;
  }

  function createProject(name) {
    const newProject = new project(projectIdCounter, name);
    projectIdCounter++;
    projectList.push(newProject);
  }

  function deleteProject(projectId) {
    projectList.forEach(function(item, index, object) {
      if (+projectId === item.projectId) {
        object.splice(index, 1);
      }
    })
  }

  function createToDo(title, notes, date, important) {
    const newToDo = new toDo(toDoIdCounter, activeProjectId, title, notes, date, important);
    toDoIdCounter++;
    toDoList.push(newToDo);
  }

  function deleteToDo(toDoId) {
    toDoList.forEach(function(toDo, index, object) {
      if (toDo.toDoId === toDoId) {
        object.splice(index, 1);
      }
    })
  }

  createProject('Project1');
  createProject('Project2');
  createToDo('Text of note 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '28-01-2009', false);
  createToDo('Text of note 2','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '28-01-2009', true);

  return {projectList, toDoList, createProject, deleteProject, createToDo, deleteToDo, getActiveProjectId, getActiveTitle};

})();


const domManipulation = (function() {
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  const menuBtn = document.querySelector('.menu');
  const homeBtn = document.querySelector('.home');
  const addProjectBtn = document.querySelector('.addProjectBtn');
  const addProjectForm = document.querySelector('#addProjectForm');
  const addProjectInput = document.querySelector('#addProjectInput');
  const projectsList = document.querySelector('.projectsList');
  const title = document.querySelector('#title');
  const toDoField = document.querySelector('#toDoField');
  let sidebarShow = true;

  function hideShowSidebar() {
    if (sidebarShow) {
      sidebarShow = false;
      sidebar.classList.add('hidden');
      content.classList.add('extend');
    } else {
      sidebarShow = true;
      sidebar.classList.remove('hidden');
      content.classList.remove('extend');
    }
  }

  function showAddProjectForm() {
    addProjectForm.classList.remove('hidden');
    addProjectInput.focus();
    addProjectInput.value = '';
  }

  function addProject(event) {
    event.preventDefault();
    const action = event.submitter.classList[0];
    if (action === 'submitNewProject') {
      addProjectForm.classList.add('hidden');
      const name = addProjectInput.value.charAt(0).toUpperCase() + addProjectInput.value.slice(1).toLowerCase();
      projectsManager.createProject(name);
      renderProjects();
    } else if (action === 'cancelNewProject') {
      addProjectForm.classList.add('hidden');
    }
  }

  function delProject(event) {
    const id = event.path[1].classList[1].split('-')[1];
    projectsManager.deleteProject(id);
    renderProjects();
  }

  function colorActiveProject(id) {
    const allProjects = document.querySelectorAll('.projectItem');
    if (allProjects.length > 0) {
      allProjects.forEach(project => {
        project.classList.remove('active');
      })
    }
    
    const activeProject = document.querySelector(`.projectItem.id-${id}`);
    activeProject.classList.add('active');
  }

  function selectProject() {
    const id = this.classList[1].split('-')[1];
    colorActiveProject(id);
    projectsManager.activeProjectId = id;
    renderToDos();
  }

  function renderProjects() {
    const projectItems = document.querySelectorAll('.projectItem');
    if (projectItems.length > 0) {
      projectItems.forEach(projectItem => {
        projectItem.removeEventListener('click', selectProject);
      })
    }
    
    projectsList.innerHTML = '';
    projectsManager.projectList.forEach(project => {
      const newProject = document.createElement('div');
      const projectName = document.createElement('div');
      newProject.classList.add('projectItem');
      newProject.classList.add(`id-${project.projectId}`);
      projectName.textContent = project.name;
      newProject.appendChild(projectName);

      const delIcon = new Image();
      delIcon.src = closeBtn;
      delIcon.classList.add('delBtn');
      newProject.appendChild(delIcon);

      projectsList.appendChild(newProject);
    })

    const closeBtns = document.querySelectorAll('.delBtn');
    closeBtns.forEach(closeBtn => {
      closeBtn.addEventListener('click', delProject, {once: true});
    })

    const projectItemsUpdated = document.querySelectorAll('.projectItem');
    projectItemsUpdated.forEach(projectItem => {
      projectItem.addEventListener('click', selectProject);
    })

    colorActiveProject(projectsManager.getActiveProjectId()); 
  }

  function renderToDos(toDoList) {
    title.textContent = projectsManager.getActiveTitle();
    const ActualToDoList = toDoList || projectsManager.toDoList;

    toDoField.innerHTML = '';

    ActualToDoList.forEach(toDo => {
      const ToDoItem = document.createElement('div');
      ToDoItem.classList.add('ToDoItem');

      const checkBox = document.createElement('input');
      checkBox.type = "checkbox";

      const toDoTitle = document.createElement('div');
      toDoTitle.textContent = toDo.title;

      const toDoDate = document.createElement('div');
      toDoDate.textContent = toDo.date;

      const importantIcon = new Image();
      if (toDo.important) {
        importantIcon.src = starOn;
      } else {
        importantIcon.src = starOff;
      }
      importantIcon.classList.add('importantIcon');

      ToDoItem.appendChild(checkBox);
      ToDoItem.appendChild(toDoTitle);
      ToDoItem.appendChild(toDoDate);
      ToDoItem.appendChild(importantIcon);

      toDoField.appendChild(ToDoItem);
    })
  }

  addProjectForm.addEventListener('submit', addProject);
  menuBtn.addEventListener('click', hideShowSidebar);
  addProjectBtn.addEventListener('click', showAddProjectForm);

  renderProjects();
  renderToDos();
  
})();
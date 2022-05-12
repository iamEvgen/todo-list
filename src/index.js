import './style.css';
import './img/menu.png';
import './img/home.png';
import './img/GitHub.png';
import closeBtn from './icons/del.png';
import starOn from './icons/starOn.png';
import starOff from './icons/starOff.png';
import editToDoIcon from './icons/editToDo.png';
import delToDoIcon from './icons/delToDo.png';


class toDo {
  constructor(toDoId, projectId, title, notes, date, important) {
    this.toDoId = toDoId,
    this.projectId = projectId;
    this.title = title,
    this.notes = notes,
    this.date = date,
    this.important = important,
    this.ready = false
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
    return activeProjectId;
  }

  function setActiveProjectId(id) {
    activeProjectId = +id;
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
    let needToRenderToDos = false;
    projectList.forEach(function(item, index, object) {
      if (+projectId === item.projectId) {
        object.splice(index, 1);
        if (item.projectId === projectsManager.getActiveProjectId()) {
          projectsManager.setActiveProjectId(0);
          needToRenderToDos = true;
        }
      }
    })
    return needToRenderToDos;
  }

  function getToDoNumberInList(id) {
    let index = -1;
    toDoList.forEach(function(toDo, i) {
      if (toDo.toDoId === +id) index = i;
    })
    return index;
  }

  function getProjectIdbyName(name) {
    let projectId;
    projectList.forEach(project => {
      if (project.name === name) projectId = project.projectId;
    })
    return projectId;
  }

  function getProjectNameById(id) {
    let projectName;
    projectList.forEach(project => {
      if (project.projectId === id) {
        projectName = project.name;
      }
    })
    return projectName;
  }

  function editToDo(title, notes, dateToSave, projectName, important, editToDoId) {
    toDoList.forEach(toDo => {
      if (toDo.toDoId === editToDoId) {
        toDo.title = title;
        toDo.notes = notes;
        toDo.date = dateToSave;
        toDo.projectId = getProjectIdbyName(projectName);
        toDo.important = important;
      }
    })
  }

  function createToDo(title, notes, date, projectName, important) {
    const projectId = getProjectIdbyName(projectName);
    const newToDo = new toDo(toDoIdCounter, projectId, title, notes, date, important);
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

  createProject('Inbox');
  createProject('Project1');
  createProject('Project2');
  createToDo('Text of note 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '28-01-2022', 'Inbox', false);
  createToDo('Text of note 2','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '28-01-2022', 'Inbox', true);

  return {projectList, toDoList, createProject, deleteProject, createToDo, deleteToDo, getActiveProjectId, setActiveProjectId, getActiveTitle, getToDoNumberInList, getProjectNameById, editToDo};

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
  const addToDoBtn = document.querySelector('#newToDo');
  const warningUniqueName = document.querySelector('.warningUniqueName');
  let editMode = {
    enabled: false,
    editToDoId: null
  };
  

  // PopupForm
  const popupFill = document.querySelector('.popupFill');

  const addToDoTitle = document.querySelector('#addToDoTitle');
  const description = document.querySelector('#description');
  const dueDate = document.querySelector('#dueDate');
  const selectProjectInForm = document.querySelector('#selectProject');
  const isImportant = document.querySelector('#isImportant');

  const saveButton = document.querySelector('#saveButton');

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

  function checkUniqueName(name) {
    let nameIsUnique = true;
    projectsManager.projectList.forEach(project => {
      if (project.name === name) nameIsUnique = false;
    })
    return nameIsUnique;
  }

  function addProject(event) {
    event.preventDefault();
    const action = event.submitter.classList[0];
    if (action === 'submitNewProject') {
      const name = addProjectInput.value.charAt(0).toUpperCase() + addProjectInput.value.slice(1).toLowerCase();
      if (checkUniqueName(name)) {
        projectsManager.createProject(name);
        renderProjects();
        addProjectForm.classList.add('hidden');
        warningUniqueName.classList.add('hideWarning');
      } else {
        warningUniqueName.classList.remove('hideWarning');
      }
    } else if (action === 'cancelNewProject') {
      addProjectForm.classList.add('hidden');
      warningUniqueName.classList.add('hideWarning');
    }
  }

  function delProject(event) {
    const id = event.path[1].classList[1].split('-')[1];
    const needToRenderToDos = projectsManager.deleteProject(id);
    renderProjects();
    if (needToRenderToDos) renderToDos();
  }

  function resetActiveColor() {
    const allProjects = document.querySelectorAll('.projectItem');
    const allFilters = document.querySelectorAll('.filter');
    allProjects.forEach(project => project.classList.remove('active'));
    allFilters.forEach(filter => filter.classList.remove('active'));
  }

  function colorActiveProject(id) {
    if (id > -1) {
      resetActiveColor();
      const activeProject = document.querySelector(`.projectItem.id-${id}`);
      activeProject.classList.add('active');
    } 
  }

  function colorActiveFilter(id) {
    resetActiveColor();
    const activeFilter = document.querySelector(`.filter.id-${id}`);
    activeFilter.classList.add('active');
  }

  function selectProject() {
    const id = this.classList[1].split('-')[1];
    colorActiveProject(id);
    projectsManager.setActiveProjectId(id);
    renderToDos();
  }

  function selectFilter() {
    const id = this.classList[2].split('-')[1];
    colorActiveFilter(id);
    projectsManager.setActiveProjectId(-1);
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
      
      if (project.projectId !== 0) {
        const delIcon = new Image();
        delIcon.src = closeBtn;
        delIcon.classList.add('delBtn');
        newProject.appendChild(delIcon);
      }
      
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

    const activeProjectId = projectsManager.getActiveProjectId();
    colorActiveProject(activeProjectId); 
  }

  const allFilters = document.querySelectorAll('.filter');
  allFilters.forEach(filter => filter.addEventListener('click', selectFilter));

  function addSelectProjectToForm() {
    selectProjectInForm.innerHTML = '';
    projectsManager.projectList.forEach(project => {
      const newSelector = document.createElement('option');
      newSelector.textContent = project.name;
      if (project.projectId === projectsManager.getActiveProjectId()) {
        newSelector.selected = true;
      }
      selectProjectInForm.appendChild(newSelector);
    })
  }

  function getToDoObject(toDoId) {
    let toDoObject;
    projectsManager.toDoList.forEach(toDo => {
      if (toDo.toDoId === +toDoId) toDoObject = toDo;
    })
    return toDoObject;
  }

  function switchEditMode(toDoId) {
    if (toDoId) {
      editMode.enabled = true;
      editMode.editToDoId = +toDoId;
    } else {
      editMode.enabled = false;
      editMode.editToDoId = null;
    }
  }

  function fillFormForEdit(event) {
    const toDoId = event.path[1].classList[1].split('-')[1];
    const toDoObject = getToDoObject(toDoId);
    addToDoTitle.value = toDoObject.title;
    description.value = toDoObject.notes;
    dueDate.value = invertDateFormat(toDoObject.date);
    const projectName = projectsManager.getProjectNameById(toDoObject.projectId);
    selectProjectInForm.value = projectName;
    isImportant.checked = toDoObject.important;

    switchEditMode(toDoId);
  }

  function showForm(event) {
    addSelectProjectToForm();
    popupFill.classList.remove('hidePopup');
    popupFill.classList.add('showPopup');
    if (event.target === addToDoBtn) {
      document.querySelector('.popup h2').textContent = 'Add new ToDo:';
      clearNewToDoForm();
    } else {
      document.querySelector('.popup h2').textContent = 'Edit ToDo:';
      fillFormForEdit(event);
    }
  }

  function hideForm(event, onSave) {
    if (onSave || event.target == popupFill) {
      popupFill.classList.remove('showPopup');
      popupFill.classList.add('hidePopup');
      switchEditMode();
    }
  }

  function changeImportant(event) {
    const toDoId = +event.path[1].classList[1].split('-')[1];
    const toDoNumber = projectsManager.getToDoNumberInList(toDoId);
    projectsManager.toDoList[toDoNumber].important = !projectsManager.toDoList[toDoNumber].important;
    renderToDos();
  }

  function changeReady(event) {
    const toDoId = +event.path[1].classList[1].split('-')[1];
    const toDoNumber = projectsManager.getToDoNumberInList(toDoId);
    projectsManager.toDoList[toDoNumber].ready = !projectsManager.toDoList[toDoNumber].ready;
    renderToDos();
  }

  function delToDo(event) {
    const toDoId = +event.path[1].classList[1].split('-')[1];
    projectsManager.deleteToDo(toDoId);
    renderToDos();
  }

  function makeVisibleToDoNote(event) {
    const toDoId = event.path[1].classList[1].split('-')[1];
    const toDoNote = document.querySelector(`div.ToDoItem.id-${toDoId} .toDoNotes`);
    toDoNote.classList.add('makeVisibleToDoNotes');
  }

  function makeUnvisibleToDoNote() {
    const toDoNotes = document.querySelectorAll('.toDoNotes');
    toDoNotes.forEach(toDoNote => {
      toDoNote.classList.remove('makeVisibleToDoNotes');
    })
  }

  function renderToDos(toDoList) {
    title.textContent = projectsManager.getActiveTitle();
    const ActualToDoList = toDoList || projectsManager.toDoList;

    toDoField.innerHTML = '';

    ActualToDoList.forEach(toDo => {
      const ToDoItem = document.createElement('div');
      ToDoItem.classList.add('ToDoItem');
      ToDoItem.classList.add(`id-${toDo.toDoId}`);

      const checkBox = document.createElement('input');
      checkBox.type = "checkbox";
      checkBox.classList.add('toDoCheckbox');
      if (toDo.ready) {checkBox.checked = true};
      checkBox.addEventListener('click', changeReady);

      const toDoTitle = document.createElement('div');
      toDoTitle.classList.add('toDoTitle');
      toDoTitle.textContent = toDo.title;
      if (toDo.ready) {toDoTitle.classList.add('done')};
      toDoTitle.addEventListener('mouseover', makeVisibleToDoNote);
      toDoTitle.addEventListener('mouseleave', makeUnvisibleToDoNote);

      const toDoDate = document.createElement('div');
      toDoDate.textContent = toDo.date;
      toDoDate.classList.add('toDoDate');

      const importantIcon = new Image();
      if (toDo.important) {
        importantIcon.src = starOn;
      } else {
        importantIcon.src = starOff;
      }
      importantIcon.classList.add('importantIcon');
      importantIcon.addEventListener('click', changeImportant);

      const editToDoBtn = new Image();
      editToDoBtn.src = editToDoIcon;
      editToDoBtn.classList.add('editToDoBtn');
      editToDoBtn.addEventListener('click', showForm)

      const delToDoBtn = new Image();
      delToDoBtn.src = delToDoIcon;
      delToDoBtn.classList.add('delToDoBtn');
      delToDoBtn.addEventListener('click', delToDo, {once: true});

      const toDoNotes = document.createElement('div');
      toDoNotes.classList.add('toDoNotes');
      toDoNotes.textContent = toDo.notes;

      ToDoItem.appendChild(checkBox);
      ToDoItem.appendChild(toDoTitle);
      ToDoItem.appendChild(toDoDate);
      ToDoItem.appendChild(importantIcon);
      ToDoItem.appendChild(editToDoBtn);
      ToDoItem.appendChild(delToDoBtn);
      ToDoItem.appendChild(toDoNotes);

      toDoField.appendChild(ToDoItem);
    })
  }

  function clearNewToDoForm() {
    addToDoTitle.value = '';
    description.value = '';
    dueDate.value = '';
    isImportant.checked = false;
  }

  function invertDateFormat(date) {
    const tmpDate = date.split('-');
    return tmpDate[2] + '-' + tmpDate[1] + '-' + tmpDate[0];
  }

  function submitNewToDoForm(event) {
    event.preventDefault();

    const title = addToDoTitle.value;
    const notes = description.value;
    const date = dueDate.value;
    const projectName = selectProjectInForm.value;
    const important = isImportant.checked;
    const dateToSave = invertDateFormat(date)
    if (editMode.enabled) {
      projectsManager.editToDo(title, notes, dateToSave, projectName, important, editMode.editToDoId);
      switchEditMode();
    } else {
      projectsManager.createToDo(title, notes, dateToSave, projectName, important);
    }
    hideForm(undefined, true);
    renderToDos();
    clearNewToDoForm();
  }

  addProjectForm.addEventListener('submit', addProject);
  menuBtn.addEventListener('click', hideShowSidebar);
  addProjectBtn.addEventListener('click', showAddProjectForm);
  addToDoBtn.addEventListener('click', showForm);
  popupFill.addEventListener('click', hideForm)
  saveButton.addEventListener('click', submitNewToDoForm);

  renderProjects();
  renderToDos();
  
})();
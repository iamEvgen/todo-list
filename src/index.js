import './style.css';
import './img/menu.png'
import './img/home.png'
import './img/GitHub.png'
import closeBtn from './icons/del.png'


const domManipulation = (function() {
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  const menuBtn = document.querySelector('.menu');
  const homeBtn = document.querySelector('.home');
  const addProjectBtn = document.querySelector('.addProjectBtn');
  const addProjectForm = document.querySelector('#addProjectForm');
  const addProjectInput = document.querySelector('#addProjectInput');
  const projectsList = document.querySelector('.projectsList');
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
      const newProject = document.createElement('div');
      const projectName = document.createElement('div');
      newProject.classList.add('projectItem');
      const text = addProjectInput.value.charAt(0).toUpperCase() + addProjectInput.value.slice(1).toLowerCase();
      projectName.textContent = text;
      newProject.appendChild(projectName);

      const delIcon = new Image();
      delIcon.src = closeBtn;
      delIcon.classList.add('delBtn');
      newProject.appendChild(delIcon);

      projectsList.appendChild(newProject);
    } else if (action === 'cancelNewProject') {
      addProjectForm.classList.add('hidden');
    }
  }

  addProjectForm.addEventListener('submit', addProject);
  menuBtn.addEventListener('click', hideShowSidebar);
  addProjectBtn.addEventListener('click', showAddProjectForm);
})();
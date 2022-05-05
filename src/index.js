import './style.css';
import './img/menu.png'
import './img/home.png'
import './img/GitHub.png'


const domManipulation = (function() {
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  const menuBtn = document.querySelector('.menu');
  const homeBtn = document.querySelector('.home');
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


  menuBtn.addEventListener('click', hideShowSidebar);
})();
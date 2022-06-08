const menuIcon = document.getElelementById('menu-icon');
const menu = document.getElelementById('menu');

menuIcon.addEventListener('click', () =>{
  if(menu.className ==='hidden'){
    menu.classList.remove('hidden');
  }else{
    menu.classList.add('hidden');
  }
});
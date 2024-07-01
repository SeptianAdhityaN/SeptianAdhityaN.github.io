function Menu(e) {
  let list = document.querySelector(".dropdown-menu");

  e.name === "menu-outline"
    ? ((e.name = "close-outline"), list.classList.add('top-[100px]'), list.classList.add('opacity-100'))
    : ((e.name = "menu-outline"), list.classList.remove('top-[100px]'), list.classList.remove('opacity-100'));
}

document.addEventListener('scroll',  ()=> {
  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 0){
    navbar.classList.add('lg:bg-primary')
  } else {
    navbar.classList.remove('lg:bg-primary')
  }
});

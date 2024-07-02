function Menu(e) {
  let list = document.querySelector(".dropdown-menu");

  e.name === "menu-outline"
    ? ((e.name = "close-outline"), list.classList.remove('mt-[-1000px]'), list.classList.remove('opacity-0'), list.classList.add('mt-[100px]'), list.classList.add('opacity-100'))
    : ((e.name = "menu-outline"), list.classList.remove('mt-[100px]'), list.classList.remove('opacity-100'), list.classList.add('mt-[-1000px]'), list.classList.add('opacity-0'))
}

function Dropdown(e) {
  let list = document.querySelector(".dropdown-menu");
  let icon = document.querySelector("#icon");

    e = ((icon.name = "menu-outline"), list.classList.remove('mt-[100px]'), list.classList.remove('opacity-100'), list.classList.add('mt-[-1000px]'), list.classList.add('opacity-0'))
}

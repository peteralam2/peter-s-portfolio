function showSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "flex"
}

function hideSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "none"
}

//dark mode enable/disable

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')
const sideThemeSwitch = document.getElementById('side-theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

if(darkmode === "active") enableDarkmode()

  sideThemeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
  })


const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-l');
const hiddenElementsRight = document.querySelectorAll('.hidden-r');
const hiddenElementsBack = document.querySelectorAll('.hidden-b');


hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));
hiddenElementsBack.forEach((el) => observer.observe(el));

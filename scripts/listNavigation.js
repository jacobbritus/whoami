const navList = document.querySelector(".navigation-list")
const listToggle = document.querySelector(".open-navigation-button");

const dropdown = document.querySelector(".navigation.dropdown");

const closeButton = document.querySelector(".close-navigation-button");

document.addEventListener("click", (e) => {
  // e.preventDefault()
  if (!navList.classList.contains("active")) return;

  // if (!dropdown.contains(e.target)) {
  //   listToggle.className = "navigation-list"
  // }
});

listToggle.addEventListener(
  "click",
  () => {
    // if (listToggle.classList.contains("active")) return;
    


    (navList.className = "navigation-list active")},
);

closeButton.addEventListener(
  "click",
  (e) => {
    
    (navList.className = "navigation-list")},
);

// if (ref.current && !ref.current.contains(e.target)) {

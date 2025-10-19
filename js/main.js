console.log("I'm the main.js file")
const homeButton = document.getElementById('home-button');
const libraryButton = document.getElementById('show-library-button');
function navigateTo(page) {
  window.location.href = page;
}

if (homeButton != null) {

  homeButton.onclick = () => navigateTo('home.html');
}
if (libraryButton != null) {
  libraryButton.onclick = () => navigateTo('library.html');
}
window.onload = () => {

}


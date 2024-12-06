document.getElementById("home").addEventListener("click", () => showContent('home'));
const courses=document.getElementById("courses").addEventListener("click", () => showContent('courses'));
document.getElementById("archive").addEventListener("click", () => showContent('archive'));
document.getElementById("institute").addEventListener("click", () => showContent('institute'));
document.getElementById("profile").addEventListener("click", () => showContent('profile'));
document.getElementById("settings").addEventListener("click", () => showContent('settings'));
document.getElementById("logout").addEventListener("click", () => showContent('logout'));


const Chapters =document.getElementById("card1");
const mainContent = document.getElementById("mainContent");
const dashboardCards = document.getElementById("dashboardCards");
const coursesContent = document.getElementById("courses-content");


Chapters.addEventListener('click', addChapters)

function addChapters(){
  dashboardCards.style.display="none";
  coursesContent.innerHTML=
          `<div class="dashboard-cards">
          <div class="cardChapters" id="chap1">
            <h3>Chapter 1</h3>
            <div class="chapterIcons">
              <i class="fa-solid fa-file-pdf"></i>
              <i class="fa-solid fa-image"></i>
              <i class="fa-solid fa-link"></i>
            </div>
          </div> 
          <div class="cardChapters">
            <h3>Chapter 2</h3>
            <div class="chapterIcons">
              <i class="fa-solid fa-file-pdf"></i>
              <i class="fa-solid fa-image"></i>
              <i class="fa-solid fa-link"></i>
            </div>
          </div>
          <div class="cardChapters">
            <h3>Chapter 3</h3>
            <div class="chapterIcons">
              <i class="fa-solid fa-file-pdf"></i>
              <i class="fa-solid fa-image"></i>
              <i class="fa-solid fa-link"></i>
            </div>
          </div>
          <div class="cardChapters" id="card1">
            <h3>Chapter 4</h3>
            <div class="chapterIcons">
              <i class="fa-solid fa-file-pdf"></i>
              <i class="fa-solid fa-image"></i>
              <i class="fa-solid fa-link"></i>
            </div>
          </div>
          <div class="cardChapters">
            <h3>Chapter 5</h3>
            <div class="chapterIcons">
              <i class="fa-solid fa-file-pdf"></i>
              <i class="fa-solid fa-image"></i>
              <i class="fa-solid fa-link"></i>
            </div>
          </div>
          <div class="cardChapters">
            <h3>Chapter 6</h3>
            <div class="chapterIcons">
              <i class="fa-solid fa-file-pdf"></i>
              <i class="fa-solid fa-image"></i>
              <i class="fa-solid fa-link"></i>
            </div>
          </div>
          </div>`;

          selectedChapter=document.getElementById("chap1");
selectedChapter.addEventListener("click",showtoggle)
function showtoggle(){
        coursesContent.insertAdjacentHTML('afterbegin', `
      <div class="chapterSelection">
          <select class="chapterSelectonButton">
            <option value="option1">Chapter 1</option>
            <option value="option2">Chapter 2</option>
            <option value="option3">Chapter 3</option>
          </select>
          <div class="chapterIcons">
            <i class="fa-solid fa-file-pdf"></i>
            <i class="fa-solid fa-image"></i>
            <i class="fa-solid fa-link"></i>
          </div>
      </div>
        `);
}

}
document.querySelector(".profile-img").addEventListener("click", goToProfileAndToggleDropdown);

function showContent(contentId) {
  const contentSections = document.querySelectorAll('[id$="-content"]');
  contentSections.forEach((section) => (section.style.display = "none"));
  document.getElementById(contentId + "-content").style.display = "block";

  if(contentId=="courses"){
    mainContent.style.cssText = "border: none; padding: 15px; padding-top: 0px";
  }else{
    mainContent.style.cssText= "border: solid; padding: 30px;";

  }
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach((item) => item.classList.remove("active"));
  document.getElementById(contentId).classList.add("active");
}

function toggleDropdown() {
  const userInfo = document.querySelector(".user-info");
  userInfo.classList.toggle("active");
}
function goToProfileAndToggleDropdown() {
const userInfo = document.querySelector(".user-info");
const dropdown = userInfo.querySelector(".dropdown");
if (dropdown && dropdown.style.display === "block") {
dropdown.style.display = "none";
}
window.location.href = "profile.html";
}
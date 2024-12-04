document.getElementById("home").addEventListener("click", () => showContent('home'));
const courses=document.getElementById("courses").addEventListener("click", () => showContent('courses'));
document.getElementById("archive").addEventListener("click", () => showContent('archive'));
document.getElementById("institute").addEventListener("click", () => showContent('institute'));
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
          <div class="cardChapters" id="card1">
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
}


document.querySelector(".profile-img").addEventListener("click", goToProfileAndToggleDropdown);
document.getElementById("selectInstituteBtn").addEventListener("click", selectInstitute);
document.getElementById("launchBtn").addEventListener("click", launch);

function showContent(contentId) {
  const contentSections = document.querySelectorAll('[id$="-content"]');
  contentSections.forEach((section) => (section.style.display = "none"));
  document.getElementById(contentId + "-content").style.display = "block";

  if(contentId=="courses"){
    mainContent.style.border="none";
  }else{
    mainContent.style.border="solid"
  }
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach((item) => item.classList.remove("active"));
  document.getElementById(contentId).classList.add("active");
}

function toggleDropdown() {
  const userInfo = document.querySelector(".user-info");
  userInfo.classList.toggle("active");
}
function selectInstitute() {
  const firstInstituteDropdown = document.getElementById(
    "firstInstituteDropdown"
  );
  const selectedInstitute = firstInstituteDropdown.value;

  if (selectedInstitute) {
    // Add a new dropdown after the first selection
    addNewInstituteDropdown();

    // Open the modal or window for additional options
    openModal();
  } else {
    alert("Please select an institute first.");
  }
}
function launch() {
  // You can add the logic to handle launch functionality here.
  console.log("Launch button clicked");
}

function closeModal() {
  // Hide the modal and overlay
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
function addNewInstituteDropdown() {
  const instituteContainer =
    document.getElementById("instituteContainer");

  // Limit to 3 dropdowns
  const existingDropdowns =
    instituteContainer.querySelectorAll(".institute-box");
  if (existingDropdowns.length >= 3) {
    alert("You can only create up to 3 dropdowns.");
    return;
  }

  const newInstituteBox = document.createElement("div");
  newInstituteBox.className = "institute-box";
  newInstituteBox.innerHTML = ` 
      <div class="institute-dropdown">
        <select>
          <option value="" disabled selected>Select Institute</option>
          <option value="KGP">KGP</option>
          <option value="Aakash">Aakash</option>
          <option value="FIITJEE">FIITJEE</option>
        </select>
        <button class="card_btn" onclick="selectInstitute()">Select</button>
      </div>
    `;
  instituteContainer.appendChild(newInstituteBox);
}

// Function to open the modal
function openModal() {
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");

  modal.style.display = "block";
  overlay.style.display = "block";
}

// Function to launch a new tab after selection
function launch() {
  const dropdown1 = document.getElementById("dropdown1").value;
  const dropdown2 = document.getElementById("dropdown2").value;

  if (!dropdown1 || !dropdown2) {
    alert("Please select options in both dropdowns.");
    return;
  }

  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  window.open("https://example.com", "_blank");
}
function goToProfileAndToggleDropdown() {
const userInfo = document.querySelector(".user-info");
const dropdown = userInfo.querySelector(".dropdown");
if (dropdown && dropdown.style.display === "block") {
dropdown.style.display = "none";
}
window.location.href = "profile.html";
}
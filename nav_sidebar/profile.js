// Preview and save profile picture to localStorage
function previewProfilePicture(event) {
    const container = document.querySelector('.profile-picture-container');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = e.target.result;
            // Set the profile picture in the container
            container.style.backgroundImage = `url(${imageUrl})`;

            // Save the image URL to localStorage to persist it
            localStorage.setItem('profilePicture', imageUrl);
        }
        reader.readAsDataURL(file);  // Convert the file to a base64 image
    }
}

// Load the profile picture from localStorage when the page loads
function loadProfilePicture() {
    const savedImage = localStorage.getItem('profilePicture');
    const container = document.querySelector('.profile-picture-container');

    if (savedImage) {
        // If an image URL is saved in localStorage, set it as the profile picture
        container.style.backgroundImage = `url(${savedImage})`;
    }
}

// Load the profile picture and other profile details when the page loads
window.onload = function() {
    loadProfilePicture(); // Ensure the profile picture is loaded on page refresh
    loadProfileDetails();  // Load other profile details (e.g., name, email)
}

// Function to open the edit modal (for profile details)
function openEditModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'block';  // Show the modal
    // Populate modal fields with existing data (if available)
    document.getElementById('editName').value = document.getElementById('name').value;
    document.getElementById('editMobile').value = document.getElementById('mobile').value;
    document.getElementById('editEmail').value = document.getElementById('email').value;
    document.getElementById('editCity').value = document.getElementById('city').value;
    document.getElementById('editDOB').value = document.getElementById('DOB').value;
    document.getElementById('editGender').value = document.getElementById('Gender').value;
    document.getElementById('editSemester').value = document.getElementById('semester').value;
}

// Function to close the edit modal
function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'none';  // Hide the modal
}

// Save the edited profile details and close the modal
function saveProfileDetails() {
    const name = document.getElementById('editName').value;
    const mobile = document.getElementById('editMobile').value;
    const email = document.getElementById('editEmail').value;
    const city = document.getElementById('editCity').value;
    const dob = document.getElementById('editDOB').value;
    const gender = document.getElementById('editGender').value;
    const semester = document.getElementById('editSemester').value;

    // Save the profile data to localStorage to persist it
    localStorage.setItem('name', name);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('email', email);
    localStorage.setItem('city', city);
    localStorage.setItem('dob', dob);
    localStorage.setItem('gender', gender);
    localStorage.setItem('semester', semester);

    // Close the modal after saving
    closeEditModal();

    // Optionally, update the profile details on the page (without refresh)
    document.getElementById('name').value = name;
    document.getElementById('mobile').value = mobile;
    document.getElementById('email').value = email;
    document.getElementById('city').value = city;
    document.getElementById('DOB').value = dob;
    document.getElementById('Gender').value = gender;
    document.getElementById('semester').value = semester;
}

// Load profile details (name, mobile, etc.) from localStorage on page load
function loadProfileDetails() {
    const name = localStorage.getItem('name');
    const mobile = localStorage.getItem('mobile');
    const email = localStorage.getItem('email');
    const city = localStorage.getItem('city');
    const dob = localStorage.getItem('dob');
    const gender = localStorage.getItem('gender');
    const semester = localStorage.getItem('semester');

    if (name) document.getElementById('name').value = name;
    if (mobile) document.getElementById('mobile').value = mobile;
    if (email) document.getElementById('email').value = email;
    if (city) document.getElementById('city').value = city;
    if (dob) document.getElementById('DOB').value = dob;
    if (gender) document.getElementById('Gender').value = gender;
    if (semester) document.getElementById('semester').value = semester;
}

// Event listener to handle profile picture upload
document.getElementById('profilePicInput').addEventListener('change', previewProfilePicture);

                      

    
    
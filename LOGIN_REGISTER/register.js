document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const roleSelect = document.getElementById("role");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const phoneNumberError = document.getElementById("phone_numberError");
  const submitBtn = document.getElementById("submitBtn");
  const registrationForm = document.getElementById("registrationform");

  const validateUsername = async () => {
      const username = usernameInput.value.trim();
      const role = roleSelect.value;

      // Clear only the username error message
      usernameError.textContent = "";

      if (!username) {
          usernameError.textContent = "Username cannot be empty.";
          submitBtn.disabled = true;
          return;
      }

      try {
          // Send a POST request to validate the username
          const response = await fetch("/validate_username", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, role }),
          });

          const data = await response.json();

          if (data.status === "error") {
              usernameError.textContent = data.message;
              submitBtn.disabled = true; // Disable the button if username is invalid
          } else {
              usernameError.textContent = ""; // Clear error if username is valid
              submitBtn.disabled = false; // Enable the button
          }
      } catch (error) {
          console.error("Error validating username:", error);
      }
  };

  const validateForm = (event) => {
      // Prevent form submission initially
      event.preventDefault();

      let isValid = true;

      // Fetch input values
      const password = document.getElementById("password").value.trim();
      const phoneNumber = document.getElementById("phone_number").value.trim();

      // Validate password: at least 6 characters
      if (password.length < 6) {
          isValid = false;
          passwordError.textContent =
              "Password must be at least 6 characters long.";
      } else {
          passwordError.textContent = ""; // Clear only if valid
      }

      // Validate phone number: exactly 10 digits
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phoneNumber)) {
          isValid = false;
          phoneNumberError.textContent =
              "Phone number must be exactly 10 digits.";
      } else {
          phoneNumberError.textContent = ""; // Clear only if valid
      }

      // If the form is valid, submit it
      if (isValid) {
          registrationForm.submit(); // Allow form submission
      }
  };

  // Add event listeners for username validation
  usernameInput.addEventListener("input", validateUsername);
  roleSelect.addEventListener("change", validateUsername);

  // Add event listener for form validation on submission
  registrationForm.addEventListener("submit", validateForm);
});

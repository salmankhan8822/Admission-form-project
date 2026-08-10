const form = document.getElementById("admissionForm");

const inputs = document.querySelectorAll(
  "#admissionForm input, #admissionForm select"
);

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const submitBtn = document.getElementById("submitBtn");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const parentFirstName = document.getElementById("firstp");
const parentLastName = document.getElementById("lastp");
const phoneNumber = document.getElementById("number");
const email = document.getElementById("emailss");


// Update application progress
function updateProgress() {
  let filledFields = 0;

  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      filledFields++;
    }
  });

  const totalFields = inputs.length;

  const percentage = Math.round(
    (filledFields / totalFields) * 100
  );

  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${percentage}%`;
}


// Validate minimum name length
function validateName(input) {
  if (input.value.trim().length < 3) {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }

  input.classList.remove("is-invalid");
  input.classList.add("is-valid");

  return true;
}


// Validate phone number
function validatePhone() {
  const phonePattern = /^[0-9]{10,15}$/;

  const value = phoneNumber.value.trim();

  if (!phonePattern.test(value)) {
    phoneNumber.classList.add("is-invalid");
    phoneNumber.classList.remove("is-valid");

    return false;
  }

  phoneNumber.classList.remove("is-invalid");
  phoneNumber.classList.add("is-valid");

  return true;
}


// Validate email
function validateEmail() {
  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");

    return false;
  }

  email.classList.remove("is-invalid");
  email.classList.add("is-valid");

  return true;
}


// Validate names while typing
[firstName, lastName, parentFirstName, parentLastName].forEach(
  (input) => {
    input.addEventListener("input", () => {
      validateName(input);
      updateProgress();
    });
  }
);


// Validate phone
phoneNumber.addEventListener("input", () => {
  validatePhone();
  updateProgress();
});


// Validate email
email.addEventListener("input", () => {
  validateEmail();
  updateProgress();
});


// Update progress for every field
inputs.forEach((input) => {
  input.addEventListener("input", updateProgress);
  input.addEventListener("change", updateProgress);
});


// Form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  // Validate names
  if (!validateName(firstName)) {
    isValid = false;
  }

  if (!validateName(lastName)) {
    isValid = false;
  }

  if (!validateName(parentFirstName)) {
    isValid = false;
  }

  if (!validateName(parentLastName)) {
    isValid = false;
  }

  // Validate phone
  if (!validatePhone()) {
    isValid = false;
  }

  // Validate email
  if (!validateEmail()) {
    isValid = false;
  }

  // Validate all required fields
  if (!form.checkValidity()) {
    isValid = false;
  }

  if (!isValid) {
    form.classList.add("was-validated");

    const firstInvalid = form.querySelector(
      ".is-invalid, :invalid"
    );

    if (firstInvalid) {
      firstInvalid.focus();
    }

    return;
  }

  showSuccessMessage();
});


// Display success message
function showSuccessMessage() {
  const card = document.querySelector(".admission-card");

  card.innerHTML = `
    <div class="form-success">

      <div class="form-success-icon">
        <i class="bi bi-check-lg"></i>
      </div>

      <h2 class="fw-bold mb-2">
        Application Submitted!
      </h2>

      <p class="text-muted mb-4">
        Your admission application has been successfully submitted.
        Please check your email for confirmation.
      </p>

      <button
        class="btn btn-primary px-4"
        id="newApplication"
      >
        <i class="bi bi-arrow-repeat me-2"></i>
        Submit Another Application
      </button>

    </div>
  `;

  document
    .getElementById("newApplication")
    .addEventListener("click", () => {
      window.location.reload();
    });
}


// Initial progress
updateProgress();
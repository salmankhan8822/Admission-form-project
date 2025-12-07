let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let selectProgram = document.getElementById("programInput");
let birthDate = document.getElementById("calender");
let firstNamep = document.getElementById("firstp");
let lastNamep = document.getElementById("lastp");
let adress = document.getElementById("streetadress");
let cityName = document.getElementById("city");
let region = document.getElementById("Region");
let phoneNumber = document.getElementById("number");
let countryName = document.getElementById("country");
let yourEmails = document.getElementById("emailss");
let submitBtn = document.getElementById("submitBtn");
let container = document.querySelector(".container");
let progressBar = document.getElementById("progressBar");
let progressText = document.getElementById("progressText");
let inputs = document.querySelectorAll("input");

function updateProgress() {
  let filled = 0;

  inputs.forEach(input => {
      if(input.value.trim() !== "") {
        filled++;
      }
  });

  let total = inputs.length;
  let percent = Math.round((filled / total) * 100);

  progressBar.style.width = percent + "%";
  progressText.textContent = "Progress: " + percent + "%";
}

inputs.forEach(input => {
  input.addEventListener("input", updateProgress);
});


let submitCounts = 0;

window.addEventListener("load", () => {
  alert("sumbit your admission form at least three times...");
  return;
});

//for first name//
firstName.addEventListener("input", () => {
  if (firstName.value.length < 3) {
    firstName.classList.add("borders1");
    firstName.classList.remove("borders2");
  } else {
    firstName.classList.add("borders2");
    firstName.classList.remove("borders1");
  }
});

//for last name//
lastName.addEventListener("input", () => {
  if (lastName.value.length < 3) {
    lastName.classList.add("borders1");
    lastName.classList.remove("borders2");
    return;
  } else {
    lastName.classList.add("borders2");
    lastName.classList.remove("borders1");
    return;
  }
});

//parent first name//
firstNamep.addEventListener("input", () => {
  if (firstNamep.value.length < 3) {
    firstNamep.classList.add("borders1");
    firstNamep.classList.remove("borders2");
  } else {
    firstNamep.classList.add("borders2");
    firstNamep.classList.remove("borders1");
  }
});

//parent last name//
lastNamep.addEventListener("input", () => {
  if (lastNamep.value.length < 3) {
    lastNamep.classList.add("borders1");
    lastNamep.classList.remove("borders2");
  } else {
    lastNamep.classList.add("borders2");
    lastNamep.classList.remove("borders1");
  }
});

//phone number//
phoneNumber.addEventListener("input", () => {
  if (phoneNumber.value.length < 11) {
    phoneNumber.classList.add("borders1");
    phoneNumber.classList.remove("borders2");
  } else {
    phoneNumber.classList.add("borders2");
    phoneNumber.classList.remove("borders1");
  }
});

//for emails//
yourEmails.addEventListener("input", () => {
  if (!/[A-Z]/.test(yourEmails.value)) {
    yourEmails.classList.add("borders1");
  } else {
    yourEmails.classList.remove("borders1");
  }
});

yourEmails.addEventListener("input", () => {
  if (!/[a-z]/.test(yourEmails.value)) {
    yourEmails.classList.add("borders1");
  } else {
    yourEmails.classList.remove("borders1");
  }
});

yourEmails.addEventListener("input", () => {
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(yourEmails.value)) {
    yourEmails.classList.add("borders1");
  } else {
    yourEmails.classList.remove("borders1");
  }
});

yourEmails.addEventListener("input", () => {
  if (!/[0-9]/.test(yourEmails.value)) {
    yourEmails.classList.add("borders1");
  } else {
    yourEmails.classList.remove("borders1");
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitCounts++;
  if (submitCounts === 3) {
    container.classList.add("blur");
    submitBtn.style.opacity = "0.2";
    submitBtn.style.cursor = "not allowed";
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "gray";
    submitBtn.textContent = "limit reached";
  }
  if (firstName.value === "") {
    alert("Please enter your first name...");
  }

  if (lastName.value === "") {
    alert("please enter your last name...");
    return;
  }

  if (selectProgram.value === "") {
    alert("Please selecet your B/S Program...");
    return;
  }

  if (birthDate.value === "") {
    alert("Please enter your birth date...");
    return;
  }

  if (firstNamep.value === "") {
    alert("Please enter your parent first name...");
    return;
  }

  if (lastNamep.value === "") {
    alert("Please enter your last name of parent...");
    return;
  }

  if (adress.value === "") {
    alert("Please enter your current city name...");
    return;
  }

  if (cityName.value === "") {
    alert("please enter your city name...");
    return;
  }

  if (region.value === "") {
    alert("please enter your region...");
    return;
  }

  if (phoneNumber.value === "") {
    alert("please enter your phone number...");
    return;
  }

  if (countryName.value === "") {
    alert("please enter your country name...");
    return;
  }

  if (yourEmails.value === "") {
    alert("please enter your emails...");
  } else {
    submitBtn.textContent = "submit successfully";
  }

  setTimeout(() => {
    submitBtn.textContent = "submit your admission form";
  }, 2000);
});
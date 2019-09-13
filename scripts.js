const form = document.getElementById("form");
const businessSize = document.getElementById("business_size");
const headerValue = document.querySelector(".header_text");
const subHeaderValue = document.querySelector(".subheader_text");
const calendarIcon = document.querySelector(".far");

form.addEventListener("submit", handleSubmit);

function formValidator(email) {
  let userEmail = document.getElementById("business_email");
  const emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailResult = emailRGEX.test(email);
  if (emailResult == false) {
    document.querySelector(".email_error").classList.remove("hidden");
    userEmail.classList.add("invalid");
    document
      .querySelector(".fa-exclamation-triangle")
      .classList.remove("hidden");
  } else {
    userEmail.classList.add("valid");
    document.querySelector(".fa-check-circle").classList.remove("hidden");
    setTimeout(() => {
      renderOutcome();
    }, 500);
  }
}

function renderOutcome() {
  if (
    businessSize.value == "1-10" ||
    form.solution.value == "document_storage" ||
    form.solution.value == "text_search" ||
    form.solution.value == "price"
  ) {
    headerValue.innerHTML = "Oh no!<br>All our consultants are busy";
    subHeaderValue.innerHTML =
      "We'll let you know when the next one is available";
    form.classList.add("hidden");
    calendarIcon.classList.remove("fa-calendar-alt");
    setTimeout(() => {
      calendarIcon.classList.add("fa-calendar-times");
    }, 0);
  } else {
    headerValue.innerHTML = "Awesome! We'll contact you shortly";
    subHeaderValue.innerHTML =
      "We'll send you an email with available times to meet";
    form.classList.add("hidden");
    calendarIcon.classList.remove("fa-calendar-alt");
    setTimeout(() => {
      calendarIcon.classList.add("fa-calendar-check");
    }, 0);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let userEmail = document.getElementById("business_email").value;
  formValidator(userEmail);
}

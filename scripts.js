const form = document.getElementById("form");
const businessSize = document.getElementById("business_size");
const headerValue = document.querySelector(".header_text");
const subHeaderValue = document.querySelector(".subheader_text");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  console.log("handle submit was called");
  console.log(event);

  console.log(form.solution.value);

  event.preventDefault();
  if (
    businessSize == "1-10" ||
    form.solution.value == "document_storage" ||
    form.solution.value == "text_search" ||
    form.solution.value == "price"
  ) {
    headerValue.innerHTML = "Oh no!<br>All our consultants are busy";
    subHeaderValue.innerHTML =
      "We'll let you know when the next one is available";
    form.classList.add("hidden");
  } else {
    headerValue.innerHTML = "Awesome! We'll contact you shortly";
    subHeaderValue.innerHTML =
      "We'll send you an email with available times to meet";
    form.classList.add("hidden");
  }
}

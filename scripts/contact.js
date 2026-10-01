const form = document.querySelector(".form");
const sentMessage = document.querySelector(".send-message")
const fields = form.querySelectorAll("input", "textarea");

const submitButton = document.querySelector(".submit-button");

// event listener removing the error message when the field becomes valid
fields.forEach((field) => {
  field.addEventListener("input", () => {
    if (field.validity.valid) {
      field.classList.remove("error");
    }
  });
});

function validateEmail(email) {
  const value = email.value
  
  if (!value.includes("@")) {
    return 
  }

}

function setErrorMessage(validity) {

  if (validity.valueMissing) {
    return "This field is required"
  } else if (validity.patternMismatch) {
    return "Please enter a valid email address"
  } else if (validity.tooShort) {
    return "The provided input is too short"
  }
}



function validateField(field) {
  if (field.type === "checkbox" && !field.checked) {
    field.validity.valueMissing = true
  }

  const errorMessage = field.parentElement.querySelector(".error-message")

  if (!field.validity.valid) {
    
      field.classList.add("error");

      errorMessage.innerText = setErrorMessage(field.validity)
      
      return true
    }

  field.classList.remove("error");
  errorMessage.innerText = "&nbsp;"
  return false

}



// on submitting the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valid = !Object.values(fields).filter((field) => validateField(field)
  ).length

  if (valid) {
    form.classList.add("sent")
    sentMessage.classList.add("visible")
  }
});

/* Responsive Header Code */
const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
      nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
      nav.removeAttribute("style");
    }
 }

/* Contact form Validation */
const name = document.getElementById('name')
const email = document.getElementById('email')
const city = document.getElementById('city')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (city.value === '' || city.value == null) {
    messages.push('City is required')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

function validateEmail(email) {
  let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return res.test(email);
}
function validate() {
  let result = $("#result");
  let email = $("#email").val();
  result.text("");
  if(validateEmail(email)) {
    result.text(email + " is valid");
    result.css("color", "blue");
  } else {
    result.text(email + " is not valid");
    result.css("color", "red");
  }
  return false;
}
$("#validate").on("click", validate);
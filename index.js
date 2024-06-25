var tabLinks = document.getElementsByClassName("tab-links");
var tabContent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabContent) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxmsREQiW7N0-9gDH8Kvl9s68-F5cQb-gDMdIp8LKZ7A9Nvs8PQzgUIopI3NVYpfJ8zQQ/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});




let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.work');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const sliderContainer = document.querySelector('.work-list');
    sliderContainer.style.transform = `translateX(-${currentSlide * 25}%)`;
}


document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
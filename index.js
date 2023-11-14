const greetingDiv = document.querySelector(".greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
  greetingDiv.textContent = "Good morning!";
} else if (currentHour < 16) {
  greetingDiv.textContent = "Good afternoon!";
} else {
  greetingDiv.textContent = "Good evening!";
}
 //hamburger menu//
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
navLink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
//download button animation
const downloadButton = document.getElementById('btn');
const downloadMessage = document.getElementById('downloadMessage');

downloadButton.addEventListener('click', () => {
    downloadButton.disabled = true;
    downloadButton.classList.add('downloading');
    downloadButton.textContent = 'Downloading...';

    setTimeout(() => {
        downloadButton.classList.remove('downloading');
        downloadButton.disabled = false;
        downloadButton.textContent = 'Download resume';

        downloadMessage.textContent = 'Downloaded';
        downloadMessage.style.display = 'block';

        setTimeout(() => {
            downloadMessage.style.display = 'none';
        }, 3000);
    }, 3000);
});
function handleSubmit() {
  window.location.href = "index1.html";
  return false;
}


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Serialize the form data
    const formData = new FormData(form);

    // Make an AJAX request to the server
    fetch("https://script.google.com/macros/s/AKfycbzZBYc6wFPqs5jIbaMvb56pas6_yA91pwCu277ZwT_lanXd7T-sGLfGWjeCfUxmExBR/exec", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === "success") {
        alert("Form submitted successfully!");
        form.reset(); // Optional: Clear the form
      } else {
        alert("Form submission failed. Error: " + data.error);
      }
    })
    .catch(error => {
      alert("An error occurred: " + error);
    });
  });
});







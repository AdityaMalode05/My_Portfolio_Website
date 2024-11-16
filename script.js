let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(" header nav a [href*=" + id + "] ")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function handleSubmit(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Collecting form data
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Checking if all fields are filled
  if (fullName && email && phone && subject && message) {
    alert(
      `Thank you ${fullName} for reaching out! Your message has been successfully sent.`
    );
  } else {
    alert("Please fill in all the fields.");
  }

  // Optionally, you can reset the form after submission
  document.getElementById("contactForm").reset();
}


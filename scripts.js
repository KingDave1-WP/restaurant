const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const date = form.date.value;
      const time = form.time.value;
      const guests = form.guests.value;
  
      if (!name || !date || !time || !guests) {
        confirmationMessage.textContent = "Please fill in all required fields.";
        confirmationMessage.style.color = "#e74c3c"; // red for errors
        return;
      }
  
      confirmationMessage.style.color = "#556b2f"; // primary colour
      confirmationMessage.textContent = `Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been confirmed. We look forward to serving you at Savory Bites!`;
  
      form.reset();
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const contactConfirmation = document.getElementById("contactConfirmation");
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
  
        if (!name || !email || !message) {
          contactConfirmation.textContent = "Please fill in all fields before submitting.";
          contactConfirmation.style.color = "#e74c3c"; // red
          return;
        }
  
        contactConfirmation.style.color = "#556b2f"; // green
        contactConfirmation.textContent = `Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.`;
  
        contactForm.reset();
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");
  
    if (menuIcon && navLinks) {
      menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
  
        const icon = menuIcon.querySelector("i");
        if (icon) {
          icon.classList.toggle("bx-menu");
          icon.classList.toggle("bx-x");
        }
      });
    } else {
      console.error("Menu icon or nav links not found!");
    }
  });
  

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light-theme");
  themeIcon.classList.replace("bx-sun", "bx-moon");
}

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");

  const isLight = document.documentElement.classList.contains("light-theme");

  
  if (isLight) {
    themeIcon.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("theme", "dark");
  }
});

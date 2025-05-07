// Greeting (only runs if #greeting exists)
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  const hour = new Date().getHours();
  let greeting = "Welcome, coders!";
  if (hour < 12) greeting = "Good morning, coders!";
  else if (hour < 18) greeting = "Good afternoon, developers!";
  else greeting = "Good evening, tech wizards!";
  greetingEl.textContent = greeting;
}

// Toggle navbar menu (for mobile)
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

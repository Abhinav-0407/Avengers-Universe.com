// JavaScript for Avengers Universe Website

// Dynamic Greeting
document.addEventListener("DOMContentLoaded", function () {
    const headerText = document.querySelector("header");
    const greetings = ["Welcome, Marvel Fan!", "Assemble, Avengers!", "Excelsior!", "Ready to save the universe?"];
    let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    headerText.innerText = randomGreeting;
});

// Theme Toggle
const themeToggleBtn = document.createElement("button");
themeToggleBtn.innerText = "Toggle Theme";
themeToggleBtn.style.position = "fixed";
themeToggleBtn.style.top = "10px";
themeToggleBtn.style.right = "10px";
themeToggleBtn.style.padding = "10px 20px";
themeToggleBtn.style.background = "#ffcc00";
themeToggleBtn.style.border = "none";
themeToggleBtn.style.cursor = "pointer";
document.body.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

document.body.classList.add("dark-theme"); // Default theme

// Hero Section Animation
const heroTitle = document.querySelector(".hero h1");
heroTitle.style.opacity = 0;
heroTitle.style.transform = "translateY(-50px)";

setTimeout(() => {
    heroTitle.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    heroTitle.style.opacity = 1;
    heroTitle.style.transform = "translateY(0)";
}, 500);

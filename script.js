const toggle = document.getElementById("darkModeToggle");

function updateToggleText() {
  toggle.innerHTML = document.body.classList.contains("dark")
    ? "☀️ Toggle Light Mode"
    : "🌙 Toggle Dark Mode";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateToggleText();
});

updateToggleText();

/* Scroll animations */
const items = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

items.forEach(item => observer.observe(item));

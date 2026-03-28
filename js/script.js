/* ==========================================================
   NAV TOGGLE (mobile)
   ========================================================== */
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");

  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
});

/* ==========================================================
   THEME TOGGLE (localStorage)
   ========================================================== */
const themeToggle = document.querySelector(".theme-toggle");

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");

  if (current === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

loadTheme();

/* ==========================================================
   GREETING (dynamic content)
   ========================================================== */
const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) greeting.textContent = "Good morning!";
else if (hour < 18) greeting.textContent = "Good afternoon!";
else greeting.textContent = "Good evening!";

/* ==========================================================
   PROJECTS DATA (dynamic rendering)
   ========================================================== */
const projects = [
  {
    title: "Portfolio Website",
    desc: "A responsive portfolio built with HTML, CSS, and JavaScript.",
    tags: ["html", "css", "responsive"],
    img: "assets/images/project1.png"
  },
  {
    title: "Task Manager",
    desc: "Simple JavaScript app to manage tasks with localStorage.",
    tags: ["javascript"],
    img: "assets/images/project2.png"
  },
  {
    title: "Landing Page",
    desc: "Modern responsive landing page design.",
    tags: ["html", "css", "responsive"],
    img: "assets/images/project3.png"
  }
];

const projectsContainer = document.getElementById("projectsContainer");
const searchInput = document.getElementById("projectSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const emptyMsg = document.getElementById("noProjectsMsg");

let currentFilter = "all";

/* Render projects */
function renderProjects() {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = projects.filter(project => {
    const matchesFilter =
      currentFilter === "all" ||
      project.tags.includes(currentFilter);

    const matchesSearch =
      project.title.toLowerCase().includes(searchValue) ||
      project.desc.toLowerCase().includes(searchValue);

    return matchesFilter && matchesSearch;
  });

  projectsContainer.innerHTML = "";

  if (filtered.length === 0) {
    emptyMsg.textContent = "No projects found.";
    emptyMsg.classList.add("visible");
    return;
  }

  emptyMsg.classList.remove("visible");

  filtered.forEach(project => {
    const card = document.createElement("article");
    card.className = "project fade-in";

    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}" class="project__img" />
      <div class="project__body">
        <h3 class="project__title">${project.title}</h3>
        <p class="project__desc">${project.desc}</p>

        <ul class="project__tags">
          ${project.tags.map(tag => `<li>${tag}</li>`).join("")}
        </ul>

        <div class="project__links">
          <a href="#" class="link">Live</a>
          <a href="#" class="link">Code</a>
        </div>
      </div>
    `;

    projectsContainer.appendChild(card);
  });
}

/* Filter buttons */
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    renderProjects();
  });
});

/* Search */
searchInput.addEventListener("input", renderProjects);

/* Initial render */
renderProjects();

/* ==========================================================
   FUN FACT API (Requirement 3)
   ========================================================== */
const factBtn = document.getElementById("funFactBtn");
const factText = document.getElementById("funFactText");
const factLoading = document.getElementById("funFactLoading");
const factError = document.getElementById("funFactError");

factBtn.addEventListener("click", async () => {
  factLoading.classList.add("visible");
  factError.classList.remove("visible");
  factText.textContent = "";

  try {
    const res = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");

    if (!res.ok) throw new Error("Failed");

    const data = await res.json();

    factText.textContent = data.text;
  } catch (error) {
    factError.textContent = "Failed to load fact. Try again.";
    factError.classList.add("visible");
  } finally {
    factLoading.classList.remove("visible");
  }
});

/* ==========================================================
   FORM VALIDATION
   ========================================================== */
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formStatus = document.getElementById("formStatus");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formStatus.textContent = "";

  let valid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    valid = false;
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  if (messageInput.value.length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (!valid) {
    formStatus.textContent = "Fix errors and try again.";
    formStatus.className = "form__status error";
    return;
  }

  formStatus.textContent = "Message sent successfully!";
  formStatus.className = "form__status success";

  form.reset();
});

/* ==========================================================
   FADE-IN ON SCROLL
   ========================================================== */
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

/* ==========================================================
   FOOTER YEAR
   ========================================================== */
document.getElementById("year").textContent = new Date().getFullYear();
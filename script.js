// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Scroll-based fade-in effect
const revealElements = document.querySelectorAll('.project-card, .about-content, .about-image');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Animate progress bars when in view
const skillsSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.progress');

const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0'; // reset
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
      skillsObserver.unobserve(skillsSection);
    }
  });
}, { threshold: 0.3 });

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// script.js

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const percentage = bar.getAttribute("data-percentage");
          bar.style.width = percentage;
        });
        observer.disconnect(); // Animate once
      }
    });
  }, {
    threshold: 0.5
  });

  const skillsSection = document.querySelector(".skills");
  observer.observe(skillsSection);
});


document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const percentage = bar.getAttribute("data-percentage");
          bar.style.width = percentage;
          bar.textContent = percentage; // Show percentage inside bar
        });
        observer.disconnect(); // Animate only once
      }
    });
  }, {
    threshold: 0.5
  });

  const skillsSection = document.querySelector(".skills");
  observer.observe(skillsSection);
});


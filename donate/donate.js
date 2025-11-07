// Copy CashApp cashtag to clipboard
function copyCashtag(event) {
  const cashtag = "$FSBCOFSTRATFORD";

  navigator.clipboard
    .writeText(cashtag)
    .then(() => {
      // Get the button element
      const button = event.target.closest(".copy-tag-btn");
      console.log(button);
      const originalHTML = button.innerHTML;

      // Change button to show success
      button.innerHTML = '<i class="fas fa-check"></i>';
      button.classList.add("copy-success");
      button.style.background = "#28a745";

      // Show a temporary message
      const cashtagValue = document.querySelector(".cashtag-value");
      const originalColor = cashtagValue.style.color;
      cashtagValue.style.color = "#28a745";

      // Reset after 2 seconds
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove("copy-success");
        button.style.background = "";
        cashtagValue.style.color = originalColor;
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy cashtag:", err);
      alert("Failed to copy. The CashTag is: $FSBCOFSTRATFORD");
    });
}

// Copy church address to clipboard
function copyAddress(event) {
  // Update this with your actual church address
  const address = `French Speaking Baptist Church
494 Milford Point Rd
Milford, CT 06460`;

  navigator.clipboard
    .writeText(address)
    .then(() => {
      // Get the button element
      const button = event.target;
      const originalHTML = button.innerHTML;

      // Change button to show success
      button.innerHTML = '<i class="fas fa-check"></i> Address Copied!';
      button.style.background = "#28a745";
      button.style.borderColor = "#28a745";
      button.style.color = "white";

      // Reset after 2 seconds
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.background = "";
        button.style.borderColor = "";
        button.style.color = "";
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy address:", err);
      alert("Failed to copy address. Please copy it manually from the page.");
    });
}

// Smooth scroll to sections
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scroll behavior to internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Add animation when elements come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe cards for animation
  const cards = document.querySelectorAll(
    ".impact-card, .giving-card, .way-card, .faq-item"
  );
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});

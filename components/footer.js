class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <style>
    /* footer */
footer {
  background-color: #ffffff;
  padding: 40px 60px;
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* Row 1: Main content */
.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 25px;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-branding {
  font-size: 15px;
  color: #333;
}

.footer-branding a {
  color: #00a8e1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-branding a:hover {
  color: #0088b8;
  text-decoration: underline;
}

/* Navigation Links */
.footer-nav {
  display: flex;
  gap: 30px;
  list-style: none;
  flex-wrap: wrap;
}

.footer-nav li a {
  color: #00a8e1;
  text-decoration: none;
  font-size: 10px;
  transition: color 0.3s ease;
}

.footer-nav li a:hover {
  color: #0088b8;
  text-decoration: underline;
}

/* Social Media Icons */
.footer-social {
  display: flex;
  gap: 12px;
  list-style: none;
}

.footer-social li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #000;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none;
}

.footer-social li a:hover {
  background-color: #333;
  transform: translateY(-2px);
}

/* Row 2: Legal and Related Content */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-legal {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.copyright {
  font-size: 13px;
  color: #666;
}

.legal-links {
  font-size: 13px;
  color: #666;
}

.legal-links a {
  color: #00a8e1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #0088b8;
  text-decoration: underline;
}

.separator {
  margin: 0 8px;
  color: #999;
}

/* Related Content */
.footer-related {
  font-size: 13px;
  color: #666;
}

.related-label {
  font-weight: 600;
  margin-right: 8px;
}

.footer-related a {
  color: #00a8e1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-related a:hover {
  color: #0088b8;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 1024px) {
  footer {
    padding: 30px 40px;
  }

  .footer-nav {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  footer {
    padding: 25px 20px;
  }

  .footer-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }

  .footer-nav {
    width: 100%;
    gap: 15px 20px;
  }

  .footer-social {
    width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }
}

@media (max-width: 480px) {
  .footer-nav {
    flex-direction: column;
    gap: 12px;
  }

  .legal-links,
  .footer-related {
    line-height: 1.8;
  }
}
  /* Reveal on Scroll effect */
.section {
  transition: transform 1s, opacity 1s;
}

.section--hidden {
  opacity: 0;
  transform: translateY(8rem);
}

/* Location Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background-color: white;
  margin: 5% auto;
  padding: 0;
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: slideDown 0.3s ease;
  position: relative;
}

@keyframes slideDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
  line-height: 1;
}

.close:hover,
.close:focus {
  transform: scale(1.1);
  opacity: 0.8;
}

.modal-header {
  background: linear-gradient(135deg, #4a6fa5, #3a5a80);
  color: white;
  padding: 2rem;
  border-radius: 12px 12px 0 0;
  text-align: center;
  position: relative;
}

.modal-header i {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
}

.modal-body {
  padding: 2rem;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.map-container iframe {
  display: block;
}

.map-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.map-info p {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.6;
}

.map-info p:last-child {
  margin-bottom: 0;
}

.map-info i {
  color: #4a6fa5;
  font-size: 1.25rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.map-info strong {
  color: #3a5a80;
  font-weight: 600;
}

/* Responsive Location Modal */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    margin: 5% auto;
  }

  .map-container iframe {
    height: 300px;
  }

  .map-info {
    padding: 1rem;
  }

  .map-info p {
    font-size: 0.95rem;
  }
}

        </style>
        <footer>
      <!-- Row 1: Main Content -->
      <div class="footer-main">
        <!-- Branding/Location -->
        <div class="footer-branding section">
          Attend <a href="/attendOnline/attendOnline.html"> Church Online</a> or
          at <a href="#" id="locationLink">the FSBC Church location</a>.
        </div>

        <!-- Navigation Links -->
        <nav>
          <ul class="footer-nav section">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about/about.html">About</a></li>
            <li><a href="/donate/donate.html">Give</a></li>
            <li><a href="/services/services.html">Services</a></li>
            <li><a href="/attendOnline/attendOnline.html">Attend Online</a></li>
            <li><a href="/contact/contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>

      <!-- Row 2: Legal and Related Content -->
      <div class="footer-bottom">
        <!-- Legal Information -->
        <div class="footer-legal ">
          <div class="copyright">© 2025 F.S.B.C. All rights reserved.</div>
          <!-- <div class="legal-links">
            <a href="#">Privacy Policy</a><span class="separator">|</span>
            <a href="#">Terms of Use</a><span class="separator">|</span>
            <a href="#">Vulnerability Disclosure Program</a
            ><span class="separator">|</span>
            <a href="#">Cookie Preferences</a>
          </div> -->
        </div>

        <!-- Social Media Icons -->
        <ul class="footer-social ">
          <li>
            <a href="https://www.instagram.com/fsbcofstratford?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@fsbcstratford?_r=1&_t=ZP-916pr74N7lu" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
          </li>
          <li>
            <a href="https://www.youtube.com/@frenchspeakingbaptistchurc9812" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </li>
        </ul>
      </div>

      <!-- Related Content -->
      <!-- <div class="footer-related section">
        <span class="related-label">Related Content:</span>
        <a href="#">Prayers for Strength</a><span class="separator">|</span>
        <a href="#">Example Prayers for Healing</a
        ><span class="separator">|</span>
        <a href="#">How to Study the Bible</a>
      </div> -->
    </footer>

    <!-- Location Modal -->
    <div id="locationModal" class="modal">
      <div class="modal-content location-modal-content">
        <span class="close" id="closeModal">&times;</span>
        <div class="modal-header location-modal-header">
          <i class="fas fa-map-marker-alt"></i>
          <h2>Find Us</h2>
        </div>
        <div class="modal-body">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.394895477898!2d-73.09880612327954!3d41.191363471325474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80cc926a1c491%3A0x9eabf7113d26d228!2s494%20Milford%20Point%20Rd%2C%20Milford%2C%20CT%2006460%2C%20USA!5e0!3m2!1sen!2snl!4v1762148272163!5m2!1sen!2snl"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen="allowfullscreen"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Church Location Map"
            ></iframe>
          </div>
          <div class="map-info">
            <p>
              <i class="fas fa-car"></i>
              <strong>Parking:</strong> Free parking available in our lot
              adjacent to the church building.
            </p>
            <p>
              <i class="fas fa-wheelchair"></i>
              <strong>Accessibility:</strong> Our facility is wheelchair
              accessible with ramps and accessible restrooms.
            </p>
          </div>
        </div>
      </div>
    </div>

`;
    setTimeout(() => {
      this.setupRevealAnimation();
      this.setupLocationModal();
    }, 0);
  }
  setupRevealAnimation() {
    const allSections1 = this.shadowRoot.querySelectorAll(".section");

    const revealSection = function (entries, observer) {
      const [entry] = entries;
      console.log(entry);
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.remove("section--hidden");
        observer.unobserve(entry.target);
      });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections1.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });
  }

  setupLocationModal() {
    const locationLink = this.shadowRoot.getElementById("locationLink");
    const modal = this.shadowRoot.getElementById("locationModal");
    const closeBtn = this.shadowRoot.getElementById("closeModal");

    // Open modal when clicking location link
    locationLink.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });

    // Close modal when clicking X button
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    // Close modal when clicking outside of it
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }
}
customElements.define("custom-footer", CustomFooter);

class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
    /* First, import the boxicons CSS */
        @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');

        




        /* Header */



.header {
  position: fixed;
  z-index: 100;
  background-color: white;
  width: 100vw;
  height: 100px;
  transform: translateY(0);
  transition: transform 0.4s ease-in-out;
}

.header.header-hidden {
  transform: translateY(-100%);
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

.navbar {
  margin-top: 20px;
  padding-bottom: 10px;
  display: flex;
  justify-content: Center;
  gap: 50px;
  padding-left: 120px;
}

.nav-menu {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  margin-top: 25px;
}

.nav-menu a:hover {
  color: var(--primary-color);
  font-size: 15px;
}
ul {
  list-style: none;
}

.nav-item .nav-link {
  font-weight: 500;
  position: relative;
  padding: 5px 0;
  transition: all 0.5s ease;
}

.nav-item .nav-link.active{
color: var(--primary-color);
font-weight: 700;}

.nav-item .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--black);
  border-radius: 2px;
  }

.fsbcLogo {
  width: 70px;
  height: 70px;
}

.churchName {
  margin-top: 25px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
}

#menu-icon {
  font-size: 36px;

  display: none;
}
#menu-icon:hover {
  cursor: pointer;
}
.churchName2 {
  display: none;
}

@media (max-width: 1114px) {
  #menu-icon {
    margin-top: 20px;
    display: block;
  }
  .nav-menu {
    display: none;
    position: fixed;
    top: 70px;
    left: 15%;
    width: 40%;
    background: rgba(225, 225, 225, 0.1);
    backdrop-filter: blur(10px);
    /* padding: 0.5rem 4%; */
    /* padding-left: 60px; */
    border-radius: 5px;
  }

  .nav-menu.active {
    display: block;
  }

  .nav-menu a {
    display: block;
    margin: 1.5rem;
  }
  
  .navbar {
    padding-left: 0px;}
}

@media (max-width: 697px) {
  .churchName {
    display: none;
  }
  .churchName2 {
    margin-top: 25px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-color);
    display: flex;
    
  }
  .hero-content > h1 {
    font-size: 24px;
  }
  .hero-content {
    margin-left: 50px;
  }
  .subtitle {
    font-size: 50px;
  }
}

@media (max-width: 436px) {
.churchName2 {
    font-size: 0.8rem;
  }
  .navbar {gap: 20px;}
}

@media (max-width: 328px) {
.churchName2 {
    font-size: 0.5rem;
  }
  .navbar {gap: 10px;}
}


        </style>
        <header class="header">
      <div class="container1">
        <nav class="navbar">
          <i class="bx bx-menu" id="menu-icon"></i>
          <a href="#" class="churchName"
            >French Speaking Baptist Church of Stratford-Milford</a
          >
          <a href="#" class="churchName2">F.S.B.C. of Stratford-Milford</a>

          <img
            class="fsbcLogo"
            src="/fsbcLogoRemovebg.png"
            alt="Church congregation"
          />

          <ul class="nav-menu">
            <li class="nav-item">
              <a href="./../index.html" class="nav-link" data-page="page-home">Home</a>
            </li>
            <li class="nav-item">
              <a href="./../about/about.html" class="nav-link" data-page="page-about">About</a>
            </li>
            <li class="nav-item">
              <a href="./../services/services.html" class="nav-link" data-page="page-services">Services</a>
            </li>
            <li class="nav-item">
              <a href="#events" class="nav-link" data-page="page-attend-online">Attend Online</a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link"
              data-page="page-contact"
              >Contact</a>
            </li>
            <li class="nav-item">
              <a href="#donate" class="nav-link donate-btn" data-page="page-donate">Donate</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>

    
`;
    setTimeout(() => {
      this.setupEventListeners();
      this.setupNavigationPaths();
    }, 0);
  }
  setupEventListeners() {
    // Use shadowRoot to query INSIDE the component
    const menuIcon = this.shadowRoot.querySelector("#menu-icon");
    const navMenu = this.shadowRoot.querySelector(".nav-menu");
    const header = this.shadowRoot.querySelector(".header");

    if (menuIcon && navMenu) {
      // Mobile menu toggle
      menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        navMenu.classList.toggle("active");
      });

      // Close menu when clicking outside (attached to main document)
      document.addEventListener("click", (e) => {
        if (!this.contains(e.target)) {
          menuIcon.classList.remove("bx-x");
          navMenu.classList.remove("active");
        }
      });

      // Close menu on Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          menuIcon.classList.remove("bx-x");
          navMenu.classList.remove("active");
        }
      });
    }

    // Header scroll hide/show functionality
    if (header) {
      let lastScrollTop = 0;
      let scrollThreshold = 100; // Minimum scroll distance before hiding
      let isScrolling;

      window.addEventListener(
        "scroll",
        () => {
          // Get current scroll position
          const currentScrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          // Clear timeout throughout the scroll
          window.clearTimeout(isScrolling);

          // Don't hide header if at the very top
          if (currentScrollTop <= scrollThreshold) {
            header.classList.remove("header-hidden");
            lastScrollTop = currentScrollTop;
            return;
          }

          // Scrolling down - hide header
          if (
            currentScrollTop > lastScrollTop &&
            currentScrollTop > scrollThreshold
          ) {
            header.classList.add("header-hidden");

            // Close mobile menu when scrolling down
            if (menuIcon && navMenu) {
              menuIcon.classList.remove("bx-x");
              navMenu.classList.remove("active");
            }
          }
          // Scrolling up - show header
          else if (currentScrollTop < lastScrollTop) {
            header.classList.remove("header-hidden");
          }

          // Update last scroll position
          lastScrollTop = currentScrollTop;

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(() => {
            // Ensure header is visible when scrolling stops
            if (
              currentScrollTop < lastScrollTop ||
              currentScrollTop <= scrollThreshold
            ) {
              header.classList.remove("header-hidden");
            }
          }, 150);
        },
        { passive: true }
      );
    }
  }
  setupNavigationPaths() {
    const navLinks = this.shadowRoot.querySelectorAll(".nav-link");
    const currentUrl = new URL(window.location.href);
    const baseUrl = currentUrl.origin;
    const currentPath = currentUrl.pathname;

    const absolutePaths = {
      "page-home": "/index.html",
      "page-about": "/about/about.html",
      "page-services": "/services/services.html",
      "page-attend-online": "/attendOnline/attendOnline.html",
      "page-contact": "/contact/contact.html",
      "page-donate": "/donate/donate.html",
    };

    navLinks.forEach((link) => {
      const pageKey = link.getAttribute("data-page");
      if (pageKey && absolutePaths[pageKey]) {
        link.href = baseUrl + absolutePaths[pageKey];
      }

      const linkPath = absolutePaths[pageKey];
      if (linkPath && currentPath.endsWith(linkPath)) {
        link.classList.add("active");
      }
    });

    if (
      currentPath === "/" ||
      currentPath === "/index.html" ||
      currentPath === ""
    ) {
      const homeLink = this.shadowRoot.querySelector(
        '.nav-link[data-page="page-home"]'
      );
      if (homeLink) homeLink.classList.add("active");
    }
  }
}
customElements.define("custom-navbar", CustomNavbar);

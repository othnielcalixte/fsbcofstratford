// Character counter for message textarea
document.addEventListener('DOMContentLoaded', function() {
  const messageTextarea = document.getElementById('message');
  const charCountSpan = document.getElementById('charCount');
  const maxChars = 1000;

  if (messageTextarea && charCountSpan) {
    messageTextarea.addEventListener('input', function() {
      const currentLength = this.value.length;
      charCountSpan.textContent = currentLength;

      // Change color if approaching limit
      if (currentLength > maxChars * 0.9) {
        charCountSpan.style.color = 'var(--accent-color)';
      } else {
        charCountSpan.style.color = 'var(--text-light)';
      }

      // Enforce limit
      if (currentLength > maxChars) {
        this.value = this.value.substring(0, maxChars);
        charCountSpan.textContent = maxChars;
      }
    });
  }

  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmit(this);
    });
  }

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// Handle form submission
function handleFormSubmit(form) {
  const formData = new FormData(form);
  const submitBtn = form.querySelector('.submit-btn');
  const formMessage = document.getElementById('formMessage');

  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  // Collect form data
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone') || 'Not provided',
    reason: formData.get('reason'),
    message: formData.get('message'),
    timestamp: new Date().toISOString()
  };

  // Here you would normally send the data to your server
  // For now, we'll simulate a successful submission
  simulateFormSubmission(data)
    .then(response => {
      // Success
      showFormMessage('success', 'Thank you for your message! We\'ll get back to you within 24-48 hours.');
      form.reset();
      document.getElementById('charCount').textContent = '0';
    })
    .catch(error => {
      // Error
      showFormMessage('error', 'Oops! Something went wrong. Please try again or call us directly at (203) 555-0100.');
    })
    .finally(() => {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    });
}

// Simulate form submission (replace with actual server request)
function simulateFormSubmission(data) {
  return new Promise((resolve, reject) => {
    // Log the data (in production, this would be sent to your server)
    console.log('Form submission data:', data);

    // Simulate network delay
    setTimeout(() => {
      // Simulate successful submission
      resolve({ success: true });

      // To simulate an error, use:
      // reject({ error: 'Submission failed' });
    }, 1500);
  });
}

// Show form message
function showFormMessage(type, message) {
  const formMessage = document.getElementById('formMessage');
  formMessage.className = 'form-message ' + type;
  formMessage.textContent = message;

  // Scroll to message
  formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Auto-hide after 10 seconds
  setTimeout(() => {
    formMessage.style.display = 'none';
  }, 10000);
}

// Form validation helpers
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  // Basic phone validation (accepts various formats)
  const re = /^[\d\s\-\(\)]+$/;
  return !phone || re.test(phone);
}

// Add real-time validation
document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  if (emailInput) {
    emailInput.addEventListener('blur', function() {
      if (this.value && !validateEmail(this.value)) {
        this.style.borderColor = 'var(--error-color)';
      } else {
        this.style.borderColor = '#e5e7eb';
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('blur', function() {
      if (this.value && !validatePhone(this.value)) {
        this.style.borderColor = 'var(--error-color)';
      } else {
        this.style.borderColor = '#e5e7eb';
      }
    });
  }
});

/*
 * INTEGRATION NOTES:
 *
 * To connect this form to a backend service, you have several options:
 *
 * 1. FormSpree (Easy, Free tier available):
 *    - Sign up at https://formspree.io
 *    - Replace the simulateFormSubmission function with:
 *      fetch('https://formspree.io/f/YOUR_FORM_ID', {
 *        method: 'POST',
 *        body: formData,
 *        headers: { 'Accept': 'application/json' }
 *      })
 *
 * 2. EmailJS (Easy, Free tier available):
 *    - Sign up at https://www.emailjs.com
 *    - Add EmailJS SDK to your HTML
 *    - Use emailjs.send() in the handleFormSubmit function
 *
 * 3. Your own backend:
 *    - Create an endpoint on your server (PHP, Node.js, Python, etc.)
 *    - Replace simulateFormSubmission with a fetch() call to your endpoint
 *    - Example:
 *      fetch('/api/contact', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify(data)
 *      })
 *
 * 4. Google Apps Script:
 *    - Create a Google Apps Script to send emails or save to Google Sheets
 *    - Use fetch() to call your deployed script URL
 */
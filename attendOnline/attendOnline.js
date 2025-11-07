// Conference call data
const conferenceServices = {
  "tuesday-prayer": {
    name: "Mid-day Prayer Service",
    time: "Tuesday, 12:00 PM - 1:00 PM"
  },
  "tuesday-study": {
    name: "Online Bible Study",
    time: "Tuesday, 7:00 PM - 9:30 PM"
  },
  "friday-service": {
    name: "Online Church Service",
    time: "Friday, 9:00 PM - 10:30 PM"
  },
  "sunday-evening": {
    name: "Evening Church Service",
    time: "Sunday, 7:00 PM - 9:00 PM"
  }
};

// Conference call details (same for all services)
const conferenceNumber = "(623) 600-3745";
const meetingId = "778691";
const dialNumber = "6236003745"; // For tel: links

// Open modal and populate with service data
function openConferenceModal(serviceKey) {
  const service = conferenceServices[serviceKey];

  if (!service) {
    console.error("Service not found:", serviceKey);
    return;
  }

  // Populate modal content
  document.getElementById("modalServiceName").textContent = service.name;
  document.getElementById("modalServiceTime").textContent = service.time;
  document.getElementById("conferenceNumber").value = conferenceNumber;
  document.getElementById("meetingId").textContent = meetingId;

  // Update the call button href
  document.getElementById("joinCallBtn").href = `tel:${dialNumber}`;

  // Show modal
  document.getElementById("conferenceModal").style.display = "block";

  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden";
}

// Close modal
function closeConferenceModal() {
  document.getElementById("conferenceModal").style.display = "none";

  // Re-enable body scroll
  document.body.style.overflow = "auto";
}

// Copy conference number to clipboard
function copyNumber() {
  const numberInput = document.getElementById("conferenceNumber");
  const rawNumber = dialNumber; // Use raw number without formatting

  // Copy to clipboard
  navigator.clipboard.writeText(rawNumber).then(() => {
    // Change button text temporarily
    const copyBtn = event.target.closest('.copy-btn');
    const originalHTML = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    copyBtn.style.background = '#28a745';

    setTimeout(() => {
      copyBtn.innerHTML = originalHTML;
      copyBtn.style.background = '';
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy:", err);
    // Fallback: select the input text
    numberInput.select();
    numberInput.setSelectionRange(0, 99999);
    try {
      document.execCommand('copy');
      alert("Conference number copied!");
    } catch (e) {
      alert("Failed to copy. Please copy manually: " + conferenceNumber);
    }
  });
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("conferenceModal");
  if (event.target === modal) {
    closeConferenceModal();
  }
}

// Close modal with Escape key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("conferenceModal");
    if (modal.style.display === "block") {
      closeConferenceModal();
    }
  }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
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
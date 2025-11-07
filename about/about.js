// Leader data
const leaderData = {
  frantz: {
    name: "Frantz Calixte",
    title: "Pastor",
    image: "./pastorPhoto.PNG",
    bio: [
      "Frantz provides <em>spiritual and administrative leadership</em> for the French-Speaking Baptist Church of Stratford, drawing from over <em>30 years</em> of dedicated ministerial experience.",
      "Under his visionary leadership, the church experienced significant growth, achieving <em>financial stability</em> and successfully <em>purchasing its first permanent home</em>. He has also founded key ministries including evangelism programs and counseling services.",
      "He and his wife are committed to <em>empowering the congregation</em> and fostering strong community ties, strengthening relationships with sister churches throughout the region.",
    ],
  },
  sauveur: {
    name: "Sauveur Joseph",
    title: "Deacon, Vice President",
    image: "./deacon1.PNG",
    bio: [
      "Sauveur is a man <em>wholly dedicated to serving Christ and the church</em>, embodying a life of faith and selfless commitment. As a Deacon, he is a <em>cornerstone of the congregation</em>.",
      "He faithfully <em>preaches and teaches</em>, providing sound biblical guidance, and is the <em>go-to person for any need</em>, always ready to offer a helping hand and a word of encouragement.",
      "His heart for <em>community service</em> and his unwavering presence make him an <em>indispensable leader</em> who strengthens the entire church family through his actions and his faith.",
    ],
  },
  roosevelt: {
    name: "Roosevelt Legeon",
    title: "Deacon, Secretary, Pianist",
    image: "./deacon22.PNG",
    bio: [
      "Roosevelt is a <em>multi-talented and dedicated Deacon</em> who serves the church in a beautiful harmony of roles, from administration to worship.",
      "He not only <em>preaches with conviction</em> but also provides the <em>musical foundation</em> for services as the church pianist, using his gifts to lead the congregation in worship.",
      "He is deeply committed to <em>discipleship</em>, facilitating morning Bible studies and lessons that provide spiritual nourishment and foster growth for members at all stages of their faith journey.",
    ],
  },
  mimose: {
    name: "Mimose Marie-Jules",
    title: "Deacon, Treasurer",
    image: "./deacon3.PNG",
    bio: [
      "Mimose brings <em>exceptional wisdom and dedication</em> to her role, serving as the church's financial manager and a vibrant worship leader.",
      "As Treasurer, she provides <em>sharp financial oversight</em>, ensuring the church's resources are stewarded with integrity and wisdom to support its mission and vision.",
      "Her passion for worship is evident as she <em>leads the praise team</em>, using her voice to glorify God and teach biblical truths that inspire the congregation to draw closer to Christ.",
    ],
  },
};

// const menuIcon = document.querySelector("#menu-icon");
// const navMenu = document.querySelector(".nav-menu");

// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle("bx-x");
//   navMenu.classList.toggle("active");
// });

// document.addEventListener("click", (e) => {
//   if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
//     menuIcon.classList.remove("bx-x");
//     navMenu.classList.remove("active");
//   }
// });

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     menuIcon.classList.remove("bx-x");
//     navMenu.classList.remove("active");
//     // Close modal if open
//     closeLeaderModal();
//   }
// });

// Open leader modal
function openLeaderModal(leaderId) {
  const leader = leaderData[leaderId];

  if (!leader) {
    console.error("Leader not found:", leaderId);
    return;
  }

  // Populate modal content
  document.getElementById("modalImage").src = leader.image;
  document.getElementById("modalImage").alt = leader.name;
  document.getElementById("modalTitle").textContent = `About ${leader.name}`;

  // Create bio paragraphs
  const bioHTML = leader.bio.map((paragraph) => `<p>${paragraph}</p>`).join("");
  document.getElementById("modalContent").innerHTML = bioHTML;

  // Show modal
  const modal = document.getElementById("leaderModal");
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

// Close leader modal
function closeLeaderModal() {
  const modal = document.getElementById("leaderModal");
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

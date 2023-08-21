// DOM elements
const idPrev = document.querySelector(".previous");
const idNext = document.querySelector(".next");
const photo = document.getElementById("photo");
const idname = document.getElementById("name");
const job = document.getElementById("job");
const desc = document.getElementById("desc");

// Profile data
const profile = {
  pic: [
    "img/Group 1.png",
    "img/Group 2.png",
    "img/Group 3.png",
    "img/Group 4.png",
  ],
  name: ["Georgio Grace", "Syekh Andini", "Junio Theme", "Vinish Wennie"],
  job: ["DESIGNER", "WEDDING FLORIST", "PUBLIC RELATION", "SOCIAL ACTIVIST"],
  desc: [
    "Experienced designer passionate about creating captivating visuals, innovative concepts, and user-centered designs that inspire and engage audiences. Proficient in Adobe Creative Suite, with a keen eye for detail and a drive to deliver exceptional visual experiences.",
    "This role involves consulting with couples to understand their vision, selecting and sourcing flowers, and creating stunning bouquets, centerpieces, and decorative arrangements.",
    "This role involves creating and executing PR strategies, managing media relations, writing press releases, and coordinating events to enhance brand reputation.",
    "A social activist is a passionate advocate for social change and justice. They work to raise awareness about pressing societal issues, organize grassroots movements, and engage with communities to address injustices.",
  ],
};

// State
let next = 0;

// Initialize the profile
function initializeProfile() {
  updateProfile(0); //buat index o sebagai permulaan
}

// Update the profile with the given index
function updateProfile(index) {
  photo.src = profile.pic[index];
  idname.textContent = profile.name[index];
  job.textContent = profile.job[index];
  desc.textContent = profile.desc[index];
}

// Event listeners for next and previous buttons
idNext.addEventListener("click", function () {
  next = (next + 1) % profile.pic.length;
  updateProfile(next);
});

idPrev.addEventListener("click", function () {
  next = (next - 1 + profile.pic.length) % profile.pic.length;
  updateProfile(next);
});

// Initialize the profile when the page loads
window.addEventListener("load", initializeProfile);

//maksudnya kalau window = load, jalankan function initializeProfile.

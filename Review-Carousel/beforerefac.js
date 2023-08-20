// identifier
const idPrev = document.querySelector(".previous");
const idNext = document.querySelector(".next");
const photo = document.getElementById("photo");

//element identifier
const idname = document.getElementById("name");
const job = document.getElementById("job");
const desc = document.getElementById("desc");

// Object-setting
var profile = {
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

// function-setting
let next = -1;
function start() {
  photo.src = profile.pic[0];
  idname.textContent = profile.name[0];
  job.textContent = profile.job[0];
  desc.textContent = profile.desc[0];
}
function btnNext() {
  if (next >= 3) {
    next = -1;
  }
  next++;

  photo.src = profile.pic[next];
  idname.textContent = profile.name[next];
  job.textContent = profile.job[next];
  desc.textContent = profile.desc[next];
}
function btnPrev() {
  //sebelum mulau decrement, periksa dulu alurnya. Kalo urusan 0-3 udah kelar baru mulai decrement.
  if (next <= 0) {
    next = 3;
  } else {
    next--;
  }
  photo.src = profile.pic[next];
  idname.textContent = profile.name[next];
  job.textContent = profile.job[next];
  desc.textContent = profile.desc[next];
}

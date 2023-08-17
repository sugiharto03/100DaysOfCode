let puller = document.querySelector(".puller");
const increased = document.getElementById("Increased");
const Reset = document.getElementById("Reset");
const Decrease = document.getElementById("Decrease");

increased.addEventListener("click", function () {
    let number = parseInt(puller.textContent);
    number++; 
    puller.textContent = number;
    saveNum();
});
Reset.addEventListener("click", function () {
    puller.textContent = "0";
    saveNum();
});
Decrease.addEventListener("click", function () {
    let number = parseInt(puller.textContent);
    number--; 
    puller.textContent = number;
    saveNum();
});

function saveNum() {
    const num = puller.textContent;
    localStorage.setItem('angka', num);
}
function showNum() {
    const num = localStorage.getItem('angka');
    puller.textContent = num;
}
showNum();
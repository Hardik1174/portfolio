const text = [
    "Data Analyst",
    "Excel Expert",
    "MIS Specialist",
];

let index = 0;
let charIndex = 0;

function typeEffect() {

    if(charIndex < text[index].length){
        document.getElementById("typing").textContent +=
        text[index].charAt(charIndex);

        charIndex++;
        setTimeout(typeEffect,100);
    }
    else{
        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){
        document.getElementById("typing").textContent =
        text[index].substring(0,charIndex-1);

        charIndex--;
        setTimeout(eraseEffect,50);
    }
    else{
        index = (index+1)%text.length;
        setTimeout(typeEffect,300);
    }
}

typeEffect();
const modal = document.getElementById("aboutModal");
const aboutBtn = document.getElementById("aboutBtn");
const closeBtn = document.querySelector(".close");

aboutBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
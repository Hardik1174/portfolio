const lines = [
"> Welcome User...",
"> Loading Hardik Portfolio...",
"> Data Analyst | ECHS | SQL | Excel",
"> Access Granted"
];

const typing = document.getElementById("typing");
const percent = document.getElementById("percent");
const fill = document.getElementById("fill");
const btn = document.getElementById("enterBtn");

let lineIndex = 0;

function typeLine(){

    if(lineIndex < lines.length){

        let div = document.createElement("div");
        typing.appendChild(div);

        let charIndex = 0;

        function typeChar(){

            if(charIndex < lines[lineIndex].length){

                div.innerHTML =
                lines[lineIndex].substring(0,charIndex+1) +
                '<span class="cursor">|</span>';

                charIndex++;

                setTimeout(typeChar,40);

            }else{

                div.innerHTML = lines[lineIndex];

                lineIndex++;

                setTimeout(typeLine,300);
            }
        }

        typeChar();

    }else{

        loadProgress();
    }
}

function loadProgress(){

    let value = 0;

    let interval = setInterval(()=>{

        value++;

        percent.textContent = value + "%";
        fill.style.width = value + "%";

        if(value >= 100){

            clearInterval(interval);

            document.querySelector(".terminal")
            .classList.add("glitch");

            setTimeout(()=>{
                btn.style.display = "inline-block";
            },800);
        }

    },25);
}

btn.addEventListener("click",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{
        window.location.href="portfolio.html";
    },800);

});

typeLine();
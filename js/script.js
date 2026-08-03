// Year

document.getElementById("year").textContent =
new Date().getFullYear();


// Mobile Menu

const navToggle =
document.getElementById("navToggle");

const siteNav =
document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("active");
});


// Typing Effect

const textArray = [
    "Frontend Developer",
    "UI / UX Designer",
    "JavaScript Expert",
    "React Developer"
];

let textIndex = 0;
let charIndex = 0;

const typingElement =
document.createElement("h2");

typingElement.style.color="#00d4ff";

document
.querySelector(".hero-content")
.appendChild(typingElement);

function typeText(){

    if(charIndex < textArray[textIndex].length){

        typingElement.textContent +=
        textArray[textIndex][charIndex];

        charIndex++;

        setTimeout(typeText,100);

    }else{

        setTimeout(eraseText,1500);
    }
}

function eraseText(){

    if(charIndex > 0){

        typingElement.textContent =
        textArray[textIndex].substring(
            0,
            charIndex-1
        );

        charIndex--;

        setTimeout(eraseText,50);

    }else{

        textIndex++;

        if(textIndex >= textArray.length){
            textIndex = 0;
        }

        setTimeout(typeText,300);
    }
}

typeText();


// Scroll Reveal

const reveals =
document.querySelectorAll(
"section,.card,.hero-card"
);

window.addEventListener("scroll", reveal);

function reveal(){

    reveals.forEach(item=>{

        const top =
        item.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){
            item.classList.add("active");
            item.classList.add("reveal");
        }
    });
}

reveal();


// Contact Form

const form =
document.getElementById("contactForm");

const status =
document.getElementById("formStatus");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    status.innerHTML =
    "✅ Thank you! Your message has been received.";

    form.reset();

    setTimeout(()=>{
        status.innerHTML="";
    },5000);
});


// Smooth Navigation Highlight

const sections =
document.querySelectorAll("section");

const links =
document.querySelectorAll(".site-nav a");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute("id");

if(top >= offset && top < offset + height){

links.forEach(link=>{
link.classList.remove("active");
});

document
.querySelector(`.site-nav a[href*=${id}]`)
?.classList.add("active");
}
});
});


// Back To Top

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.cssText = `
position:fixed;
right:20px;
bottom:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00d4ff;
color:white;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
`;

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});

topBtn.onclick = () => {
window.scrollTo({
top:0,
behavior:"smooth"
});
};
      status.textContent='Thanks! Message prepared (form submission disabled in demo).';
      form.reset();
    });
  }
});

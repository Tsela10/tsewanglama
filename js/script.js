document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Particle Canvas Engine
  initParticleCanvas();

  // 2. Dynamic Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 3. Sticky Glassmorphic Header
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 4. Mobile Nav Drawer Toggle
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const navLinks = document.querySelectorAll('.nav-link');

  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
    });
  });

  // 5. Scroll Reveal & Skill Progress Fill
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Trigger Stats Counter Animation
        if (entry.target.classList.contains('about')) {
          animateCounters();
        }

        // Trigger Skill Bar Fill Animation
        if (entry.target.classList.contains('skills')) {
          fillSkillBars();
        }
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));

  // 6. Interactive Category Filter for Projects
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('#projectGrid .card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // 7. Interactive 3D Card Tilt Effect
  const tiltElements = document.querySelectorAll('.tilt-element');
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (-y / rect.height) * 12;
      const rotateY = (x / rect.width) * 12;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // 8. Contact Form Handler Simulation
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      formStatus.textContent = 'Thank you! Your message has been sent successfully.';
      formStatus.className = 'form-status success';
      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = '';
      }, 5000);
    }, 1200);
  });

  // Helper Function: Skill Bar Fill
  function fillSkillBars() {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
      fill.style.width = fill.getAttribute('data-progress');
    });
  }

  // Helper Function: Animated Stat Counter
  let counterTriggered = false;
  function animateCounters() {
    if (counterTriggered) return;
    counterTriggered = true;

    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const speed = target / 30;

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.textContent = Math.ceil(count);
          setTimeout(updateCount, 40);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  }

  // Helper Function: Particle Background Engine
  function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.25)';

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();
  }
});document
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

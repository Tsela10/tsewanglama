document.addEventListener('DOMContentLoaded',()=>{
  const navToggle=document.getElementById('navToggle');
  const siteNav=document.getElementById('siteNav');
  navToggle&&navToggle.addEventListener('click',()=>{
    if(siteNav.style.display==='block'){siteNav.style.display=''}else{siteNav.style.display='block'}
  });

  // Set year
  const yearEl=document.getElementById('year'); if(yearEl) yearEl.textContent=new Date().getFullYear();

  // Copy email on click
  const emailLink=document.getElementById('emailLink');
  if(emailLink){
    emailLink.addEventListener('click',(e)=>{
      e.preventDefault();
      navigator.clipboard?.writeText('hello@janedoe.dev').then(()=>{
        emailLink.textContent='Copied ✓';
        setTimeout(()=>{emailLink.textContent='hello@janedoe.dev'},1500);
      }).catch(()=>{
        alert('Email: hello@janedoe.dev');
      });
    });
  }

  // Simple contact form handling
  const form=document.getElementById('contactForm');
  const status=document.getElementById('formStatus');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const nm=document.getElementById('name').value.trim();
      const em=document.getElementById('email').value.trim();
      const msg=document.getElementById('message').value.trim();
      if(!nm||!em||!msg){
        status.textContent='Please fill out all fields.';return;
      }
      status.textContent='Thanks! Message prepared (form submission disabled in demo).';
      form.reset();
    });
  }
});
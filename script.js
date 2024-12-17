document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.reset();
        responseMessage.classList.remove('hidden');
        setTimeout(() => {
            responseMessage.classList.add('hidden');
        }, 5000);
    });
});
let lastScrollTop = 0; 
const header = document.getElementById('header'); 

window.addEventListener('scroll', function() {
  


  if (currentScroll > lastScrollTop) {
  
    header.style.backgroundColor = '#0288d1'; 
  } else {
   
    header.style.backgroundColor = '#039be5'; 
  }
  

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

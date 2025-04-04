document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Toggle mobile navbar
    if (menuIcon) {
      menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
      });
    }
  
    // Scroll Spy - Update active nav link
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
  
      // Auto close navbar on scroll (for mobile)
      navbar.classList.remove('active');
    });
  
    // Tab Functionality
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabTarget = button.getAttribute('data-tab');
  
        // Remove active class from all buttons & contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
  
        // Add to selected
        button.classList.add('active');
        document.getElementById(tabTarget).classList.add('active');
      });
    });
  });
  
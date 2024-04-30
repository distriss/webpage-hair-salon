// Scroll Effect
window.addEventListener('scroll', function() {
  fadeInFromDirection('.fadein-top');
  fadeInFromDirection('.fadein-right');
  fadeInFromDirection('.fadein-left'); 
});

function fadeInFromDirection(direction) {
  const fadeIns = document.querySelectorAll(direction);

  fadeIns.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const fadeInPoint = 100;

    if (sectionTop < windowHeight - fadeInPoint) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}
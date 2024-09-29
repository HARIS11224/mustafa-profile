// GSAP animations for page elements
gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
gsap.from(".hero-subtitle", { opacity: 0, y: -20, delay: 0.3, duration: 1, ease: "power2.out" });
gsap.from(".hero-btn", { opacity: 0, scale: 0.8, delay: 0.6, duration: 1, ease: "power2.out" });

// Scroll-triggered animations
gsap.from(".about-title", {
  scrollTrigger: { trigger: ".about-section", start: "top 80%" },
  opacity: 0, y: 30, duration: 1
});

gsap.from(".portfolio-grid .col-md-4", {
  scrollTrigger: { trigger: ".projects-section", start: "top 80%" },
  opacity: 0, y: 50, stagger: 0.2, duration: 0.8
});

// gsap.from(".testimonial", {
//   scrollTrigger: { trigger: ".testimonials-section", start: "top 80%" },
//   opacity: 0, y: 30, duration: 0.8, stagger: 0.3
// });

// Isotope for project filtering
$('.portfolio-grid').isotope({
  itemSelector: '.col-md-4',
  layoutMode: 'fitRows'
});

$('.filter-buttons').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $('.portfolio-grid').isotope({ filter: filterValue });
});

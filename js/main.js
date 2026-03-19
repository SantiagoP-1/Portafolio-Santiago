// Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, entry.target.dataset.delay || 0);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .stat-card, .tech-card, .service-card, .project-card').forEach((el, i) => {
    el.dataset.delay = (i % 4) * 80;
    observer.observe(el);
  });

  // Form
  function handleSubmit(e) {
    e.preventDefault();
    document.getElementById('success-msg').style.display = 'block';
    e.target.reset();
    setTimeout(() => {
      document.getElementById('success-msg').style.display = 'none';
    }, 4000);
  }
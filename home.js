const linkInicio = document.getElementById('link-inicio');

  linkInicio.addEventListener('click', function (e) {
    e.preventDefault();

    document.body.style.overflow = 'hidden';

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      document.body.style.overflow = '';
    }, 800);
  });
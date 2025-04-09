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
  const checkbox = document.getElementById('toggle-tema');
  const textoTema = document.getElementById('texto-tema');

  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    textoTema.textContent = checkbox.checked ? 'Modo Claro' : 'Modo Escuro';
  });
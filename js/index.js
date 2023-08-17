const menuButton = document.getElementById('btn-nav');

menuButton.addEventListener('click', () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    menuButton.setAttribute('aria-expanded', active);
    active ? menuButton.setAttribute('aria-label', 'Fechar menu') : menuButton.setAttribute('aria-label', 'Abrir menu');
})
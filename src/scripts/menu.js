const menu = document.querySelector('.menu');
const panel = document.querySelector('#mobile-menu-panel');

if (menu instanceof HTMLButtonElement && panel instanceof HTMLElement) {
  menu.addEventListener('click', () => {
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!isExpanded));
    panel.hidden = isExpanded;
  });
}
import AOS from 'aos';

AOS.init({
  duration: 800,
  once: true,
  offset: 0,
});

setTimeout(() => {
  AOS.refresh();
}, 100);
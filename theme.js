// Theme toggle funcionalidad   
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
// Estado inicial
// Establecer el tema inicial basado en la preferencia del usuario o el tema por defecto
toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  // Alternar entre 'light' y 'dark'
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  toggle.textContent = next === 'light' ? '🌙' : '☀️';
});
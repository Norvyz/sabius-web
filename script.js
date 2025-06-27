// Botón de modo oscuro
const themeBtn = document.getElementById('theme-icon');
const body = document.body;

// Revisar si el usuario ya tiene tema guardado
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeBtn.src = 'assets/moon.png';
} else {
  themeBtn.src = 'assets/sun.png';
}

// Alternar modo claro/oscuro
themeBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  themeBtn.src = isDark ? 'assets/moon.png' : 'assets/sun.png';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
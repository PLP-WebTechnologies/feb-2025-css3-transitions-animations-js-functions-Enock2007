const animateBtn = document.getElementById('animateBtn');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const heading = document.querySelector('h1');

// Load click count from localStorage
let clickCount = localStorage.getItem('clickCount') || 0;
heading.textContent = `Welcome! You clicked ${clickCount} times.`;

// Load and apply saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

// Click event for animation and counter
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate');
  setTimeout(() => {
    animateBtn.classList.remove('animate');
  }, 600);

  clickCount++;
  localStorage.setItem('clickCount', clickCount);
  heading.textContent = `Welcome! You clicked ${clickCount} times.`;
});

// Toggle theme and save preference
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});

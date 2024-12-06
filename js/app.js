document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggleButton = document.getElementById('toggle-theme');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // Apply saved theme
  document.body.classList.toggle('light-mode', currentTheme === 'light');
  themeToggleButton.textContent = currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

  themeToggleButton.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    themeToggleButton.textContent = isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  });

  // Sidebar Section Switching
  const menuLinks = document.querySelectorAll('.settings-menu a');
  const sections = document.querySelectorAll('.settings-content');

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetSection = link.getAttribute('data-section');

      sections.forEach(section => {
        section.classList.add('hidden');
      });

      const activeSection = document.getElementById(targetSection);
      if (activeSection) activeSection.classList.remove('hidden');
    });
  });
});



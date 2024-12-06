document.addEventListener('DOMContentLoaded', () => {
  // Theme Switch Button Logic
  const themeBtn = document.getElementById('toggle-theme');
  const storedTheme = localStorage.getItem('theme') || 'dark';

  // Set initial theme based on saved preference
  document.body.classList.toggle('light-mode', storedTheme === 'light');
  themeBtn.textContent = storedTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

  // Toggle theme and save preference
  themeBtn.addEventListener('click', () => {
    const lightModeActive = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', lightModeActive ? 'light' : 'dark');
    themeBtn.textContent = lightModeActive ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  });

  // Sidebar Navigation Logic
  const navLinks = document.querySelectorAll('.settings-menu a');
  const sections = document.querySelectorAll('.settings-content');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior

      const sectionId = link.getAttribute('data-section'); // Target section ID

      // Hide all sections
      sections.forEach(section => section.classList.add('hidden'));

      // Show the clicked section
      const targetSection = document.getElementById(sectionId);
      if (targetSection) targetSection.classList.remove('hidden');
    });
  });
});


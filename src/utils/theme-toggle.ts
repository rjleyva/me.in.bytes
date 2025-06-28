import type { Theme } from '../types';
import { getInitialTheme, setTheme } from './theme';

export function setupThemeToggle(
  buttonId: string,
  sunId: string,
  moonId: string
) {
  let theme: Theme = getInitialTheme();
  setTheme(theme);

  const button = document.getElementById(buttonId);
  const sun = document.getElementById(sunId);
  const moon = document.getElementById(moonId);

  if (!button || !sun || !moon) {
    console.warn('[ThemeToggle] Missing one or more toggle elements.');
    return;
  }

  function updateIcons() {
    const sun = document.getElementById(sunId);
    const moon = document.getElementById(moonId);
    if (!sun || !moon) return;

    sun.classList.toggle('hidden', theme !== 'dark');
    moon.classList.toggle('hidden', theme !== 'light');
  }

  button.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    updateIcons();
  });

  updateIcons();
}

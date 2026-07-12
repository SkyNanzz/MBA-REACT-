import { useState, useEffect, useCallback, useRef } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'mba-theme';

function getSystemTheme(): Theme {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  }
  return getSystemTheme();
}

const TRANSITION_DURATION = 350;
let transitionTimeoutId: ReturnType<typeof setTimeout> | null = null;

function applyTheme(theme: Theme, animate = true) {
  // Clear any pending timeout from previous rapid toggles
  if (transitionTimeoutId !== null) {
    clearTimeout(transitionTimeoutId);
    transitionTimeoutId = null;
  }

  if (animate) {
    // Add transition class for smooth global color animation
    document.documentElement.classList.add('theme-transitioning');
  }

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  if (animate) {
    // Remove transition class after animation completes
    transitionTimeoutId = setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
      transitionTimeoutId = null;
    }, TRANSITION_DURATION);
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const isFirstRender = useRef(true);

  useEffect(() => {
    applyTheme(theme, false);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const systemTheme = getSystemTheme();
        setThemeState(systemTheme);
        applyTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Skip animation on first render to avoid flash
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Subsequent theme changes: animate smoothly
    applyTheme(theme, true);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
}

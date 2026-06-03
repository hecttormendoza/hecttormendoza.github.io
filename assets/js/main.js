(function(){
    const toggle = document.querySelector('[data-theme-toggle]');
    const root   = document.documentElement;
    let d = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.setAttribute('data-theme', d);
    if (toggle) {
      toggle.textContent = d === 'dark' ? 'LIGHT' : 'DARK';
      toggle.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
      toggle.addEventListener('click', () => {
        d = d === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', d);
        toggle.textContent = d === 'dark' ? 'LIGHT' : 'DARK';
        toggle.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
      });
    }
  })();

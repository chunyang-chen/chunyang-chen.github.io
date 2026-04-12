(() => {
  const desktopBreakpoint = window.matchMedia('(min-width: 992px)');

  document.querySelectorAll('.navbar-toggler[data-target]').forEach((toggle) => {
    const targetSelector = toggle.getAttribute('data-target');
    const menu = targetSelector ? document.querySelector(targetSelector) : null;

    if (!menu) {
      return;
    }

    const closeMenu = () => {
      menu.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      const isOpen = menu.classList.toggle('show');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (!desktopBreakpoint.matches) {
          closeMenu();
        }
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });

    const handleViewportChange = () => {
      if (desktopBreakpoint.matches) {
        closeMenu();
      }
    };

    if (typeof desktopBreakpoint.addEventListener === 'function') {
      desktopBreakpoint.addEventListener('change', handleViewportChange);
    } else {
      desktopBreakpoint.addListener(handleViewportChange);
    }
  });
})();

(function () {
  'use strict';

  function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + ' €';
  }

  function getDiscountPercent(original, current) {
    if (!original || original <= current) return null;
    return Math.round((1 - current / original) * 100);
  }

  function renderGadgetCard(gadget) {
    const discount = getDiscountPercent(gadget.originalPrice, gadget.price);
    return `
      <div class="gadget-card bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
        <div class="relative aspect-video bg-surface-dim flex items-center justify-center overflow-hidden">
          <img src="${gadget.image}" alt="${gadget.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\'material-symbols-outlined text-outline text-5xl\\'>devices</span>'">
          ${gadget.badge ? `<span class="absolute top-2 left-2 ${gadget.badgeColor} text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">${gadget.badge}</span>` : ''}
          ${discount ? `<span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">-${discount}%</span>` : ''}
        </div>
        <div class="p-4 flex flex-col gap-2 flex-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold uppercase tracking-wider text-secondary">${gadget.category}</span>
            <span class="text-xs text-outline">${gadget.source}</span>
          </div>
          <h3 class="font-bold text-primary text-base leading-tight">${gadget.name}</h3>
          <p class="text-sm text-on-surface-variant flex-1 line-clamp-3">${gadget.description}</p>
          <div class="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant">
            <div class="flex items-baseline gap-1">
              <span class="text-lg font-extrabold text-primary">${formatPrice(gadget.price)}</span>
              ${gadget.originalPrice ? `<span class="text-xs text-outline line-through">${formatPrice(gadget.originalPrice)}</span>` : ''}
            </div>
            <a href="${gadget.url}" target="_blank" rel="noopener sponsored" class="inline-flex items-center gap-1 bg-secondary text-on-secondary text-sm font-bold px-3 py-1.5 rounded-lg hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-colors">
              Ver oferta
              <span class="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function renderFeaturedGadget(gadget, index) {
    const discount = getDiscountPercent(gadget.originalPrice, gadget.price);
    return `
      <div class="featured-card bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col md:grid md:grid-cols-2">
        <div class="aspect-video md:aspect-auto bg-surface-dim overflow-hidden relative">
          <img src="${gadget.image}" alt="${gadget.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\'material-symbols-outlined text-outline text-5xl\\'>devices</span>'">
          ${gadget.badge ? `<span class="absolute top-3 left-3 ${gadget.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">${gadget.badge}</span>` : ''}
        </div>
        <div class="p-6 flex flex-col gap-3 justify-center">
          <div class="flex items-center gap-2">
            <span class="flex items-center justify-center bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded-full">#${index + 1}</span>
            <span class="text-xs font-semibold uppercase tracking-wider text-secondary">${gadget.category}</span>
          </div>
          <h3 class="font-headline-sm text-headline-sm text-primary font-bold">${gadget.name}</h3>
          <p class="text-sm text-on-surface-variant">${gadget.description}</p>
          <div class="flex items-center gap-2 text-sm text-outline">
            <span class="material-symbols-outlined text-sm">star</span>
            <span>${gadget.rating}/10 · ${gadget.source}</span>
          </div>
          <div class="flex items-center justify-between mt-2 pt-3 border-t border-outline-variant">
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-extrabold text-primary">${formatPrice(gadget.price)}</span>
              ${gadget.originalPrice ? `<span class="text-sm text-outline line-through">${formatPrice(gadget.originalPrice)}</span>` : ''}
              ${discount ? `<span class="text-xs font-bold text-red-500">-${discount}%</span>` : ''}
            </div>
            <a href="${gadget.url}" target="_blank" rel="noopener sponsored" class="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors text-sm flex items-center gap-1.5">
              Comprar en Amazon
              <span class="material-symbols-outlined text-sm">shopping_cart</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function renderAdBanner(id, type) {
    const ads = {
      leaderboard: {
        html: `
          <div class="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg overflow-hidden flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 gap-3">
            <div class="flex items-center gap-3">
              <span class="text-2xl">📦</span>
              <div>
                <p class="text-xs font-semibold text-outline uppercase tracking-wider">Patrocinado</p>
                <p class="text-sm font-bold text-primary">DJI Neo 4K · El dron del año 2026</p>
                <p class="text-xs text-on-surface-variant">Vuela, graba y aterriza en tu mano · Envío gratis Prime</p>
              </div>
            </div>
            <a href="https://www.amazon.es/dp/B07FTPX71F?tag=domigadget-21&linkCode=osi&th=1&psc=1" target="_blank" rel="noopener sponsored" class="shrink-0 bg-amber-500 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-amber-600 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>167,65 €</span>
              <span class="material-symbols-outlined text-sm">shopping_cart</span>
            </a>
          </div>
        `
      },
      sidebar: {
        html: `
          <div class="w-full bg-gradient-to-b from-purple-50 to-pink-50 border border-purple-200 rounded-lg overflow-hidden p-4 flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold text-outline uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded">PUBLICIDAD</span>
              <span class="text-xs text-outline">Enlace patrocinado</span>
            </div>
            <div class="aspect-square bg-white rounded-lg flex items-center justify-center overflow-hidden border border-purple-100">
              <img src="https://m8d.io/wp-content/uploads/2025/11/DJI-Neo.jpg" alt="DJI Neo" class="w-full h-full object-cover" loading="lazy">
            </div>
            <div>
              <p class="font-bold text-primary text-sm">DJI Neo 4K</p>
              <p class="text-xs text-on-surface-variant line-clamp-2">Dron que despega de tu mano. 4K UHD, 135g.</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-baseline gap-1">
                <span class="text-lg font-extrabold text-primary">167,65 €</span>
                <span class="text-xs text-outline line-through">199 €</span>
              </div>
            </div>
            <a href="https://www.amazon.es/dp/B07FTPX71F?tag=domigadget-21&linkCode=osi&th=1&psc=1" target="_blank" rel="noopener sponsored" class="w-full bg-amber-500 text-white py-2.5 rounded-lg font-bold text-sm hover:bg-amber-600 transition-colors text-center flex items-center justify-center gap-1.5">
              <span class="material-symbols-outlined text-sm">shopping_cart</span>
              Ver oferta
            </a>
          </div>
        `
      },
      native: {
        html: `
          <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 flex items-center gap-4">
            <div class="hidden sm:block w-20 h-20 bg-white rounded-lg overflow-hidden shrink-0 border border-amber-100">
              <img src="https://m8d.io/wp-content/uploads/2025/11/Rocketbook.jpg" alt="Rocketbook" class="w-full h-full object-cover" loading="lazy">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-semibold text-outline uppercase tracking-wider">Recomendación · Patrocinado</p>
              <p class="font-bold text-primary text-sm truncate">Rocketbook Core A5 · Cuaderno reutilizable</p>
              <p class="text-xs text-on-surface-variant">Escribe, escanea, borra. El regalo inteligente.</p>
            </div>
            <a href="https://www.amazon.es/dp/B0F74JPSFP?tag=domigadget-21&linkCode=osi&th=1&psc=1" target="_blank" rel="noopener sponsored" class="shrink-0 bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-xs hover:opacity-90 transition-opacity whitespace-nowrap">
              29,51 €
            </a>
          </div>
        `
      }
    };
    return ads[type] ? ads[type].html : '';
  }

  function init() {
    // Render featured gadgets
    const featuredContainer = document.getElementById('featured-gadgets');
    if (featuredContainer) {
      const featured = GADGETS_2026.filter(g => g.featured);
      featuredContainer.innerHTML = featured.map((g, i) => renderFeaturedGadget(g, i)).join('');
    }

    // Render all gadgets grid (show first 6, rest toggleable)
    const gridContainer = document.getElementById('gadgets-grid');
    if (gridContainer) {
      const allCards = GADGETS_2026.map(g => renderGadgetCard(g));
      gridContainer.innerHTML = allCards.map((card, i) => {
        return i >= 6 ? card.replace('class="gadget-card', 'class="gadget-card hidden-mobile') : card;
      }).join('');
    }

    // Render leaderboard ad
    const leaderboardAd = document.getElementById('ad-leaderboard');
    if (leaderboardAd) {
      leaderboardAd.innerHTML = renderAdBanner('leaderboard', 'leaderboard');
    }

    // Render sidebar ad
    const sidebarAd = document.getElementById('ad-sidebar');
    if (sidebarAd) {
      sidebarAd.innerHTML = renderAdBanner('sidebar', 'sidebar');
    }

    // Render native ads inline
    document.querySelectorAll('[data-ad-native]').forEach(el => {
      el.innerHTML = renderAdBanner('native', 'native');
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]');
        if (email && email.value) {
          alert('¡Gracias por suscribirte! Te enviaremos consejos tecnológicos cada semana.');
          email.value = '';
        }
      });
    }

    // Load more button
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function () {
        const hidden = document.querySelectorAll('.gadget-card.hidden-mobile');
        hidden.forEach(el => el.classList.remove('hidden-mobile'));
        if (document.querySelectorAll('.gadget-card.hidden-mobile').length === 0) {
          this.style.display = 'none';
        }
      });
    }

    // Search functionality
    const searchInput = document.querySelector('input[placeholder="Buscar gadgets..."]');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const term = this.value.toLowerCase().trim();
        document.querySelectorAll('.gadget-card, .featured-card').forEach(card => {
          const text = card.textContent.toLowerCase();
          card.style.display = term === '' ? '' : text.includes(term) ? '' : 'none';
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

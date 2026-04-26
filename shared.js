// shared.js — PREMIUM 2025 UPGRADE
// Header · Footer · Animations · Counters · Form · Utils

// ─── RENDER HEADER ────────────────────────────────────────
function renderHeader(activePage = '') {
  const d = SITE_DATA;
  const logo = d.general.logoImage
    ? `<img src="${d.general.logoImage}" alt="${d.general.clinicName}" class="logo-img">`
    : '';

  const navLinks = [
    { href: 'index.html',    label: 'Главная',  id: 'index'    },
    { href: 'index.html#services', label: 'Услуги', id: 'services' },
    { href: 'doctors.html',  label: 'Врачи',    id: 'doctors'  },
    { href: 'prices.html',   label: 'Цены',     id: 'prices'   },
    { href: 'contacts.html', label: 'Контакты', id: 'contacts' },
  ];

  const navHtml = navLinks.map(l =>
    `<a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">${l.label}</a>`
  ).join('');

  const tgSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.447l-2.95-.924c-.64-.203-.652-.64.136-.954l11.52-4.44c.537-.194 1.006.131.928.092z"/></svg>`;
  const waSVG  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.492a.5.5 0 00.609.61l5.757-1.505A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.888 9.888 0 01-5.031-1.37l-.36-.213-3.733.977.999-3.645-.235-.374A9.867 9.867 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/></svg>`;

  document.getElementById('site-header').innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo">
        ${logo}
        <span class="logo-text">Стома<span>Прайм</span></span>
      </a>
      <nav class="nav-desktop">${navHtml}</nav>
      <div class="header-actions">
        <a href="tel:${d.contacts.phoneRaw}" class="header-phone">${d.contacts.phone}</a>
        <a href="${d.contacts.telegramLink}" class="btn btn-sm btn-ghost" target="_blank" rel="noopener">
          ${tgSVG} Telegram
        </a>
        <a href="${UTILS.whatsappLink()}" class="btn btn-sm btn-wa" target="_blank" rel="noopener">
          ${waSVG} WhatsApp
        </a>
        <button class="burger" id="burger-btn" aria-label="Меню" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <nav class="mobile-menu" id="mobile-menu" role="navigation">
      ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      <div class="mobile-menu-footer">
        <a href="tel:${d.contacts.phoneRaw}" class="btn btn-primary">📞 ${d.contacts.phone}</a>
        <a href="${UTILS.whatsappLink()}" class="btn btn-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="${d.contacts.telegramLink}" class="btn btn-tg" target="_blank" rel="noopener">✈️ Telegram</a>
      </div>
    </nav>
  `;

  // Burger
  const burger = document.getElementById('burger-btn');
  const menu   = document.getElementById('mobile-menu');
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }));

  // Scroll header
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ─── RENDER FOOTER ────────────────────────────────────────
function renderFooter() {
  const d = SITE_DATA, s = d.socials;
  const iconVK  = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.785 16.241s.288-.032.436-.194c.136-.148.131-.427.131-.427s-.019-1.307.587-1.498c.597-.189 1.365 1.263 2.178 1.821.615.422 1.082.33 1.082.33l2.175-.03s1.137-.071.598-1.121c-.044-.083-.313-.666-1.608-1.883-1.356-1.274-1.174-1.068.459-3.271.999-1.333 1.398-2.146 1.273-2.494-.12-.332-.854-.244-.854-.244l-2.448.015s-.181-.025-.316.054c-.132.078-.216.26-.216.26s-.387 1.028-.903 1.903c-1.088 1.84-1.524 1.94-1.703 1.824-.414-.268-.311-1.075-.311-1.649 0-1.793.272-2.54-.529-2.733-.266-.064-.461-.106-1.141-.113-.872-.009-1.609.003-2.027.208-.278.135-.492.436-.361.453.162.021.528.099.722.363.252.341.243 1.107.243 1.107s.145 2.112-.337 2.373c-.331.179-.786-.187-1.761-1.854-.5-.861-.878-1.814-.878-1.814s-.072-.176-.202-.271c-.157-.114-.376-.15-.376-.15l-2.325.015s-.349.01-.477.162c-.114.135-.009.414-.009.414s1.822 4.261 3.881 6.409c1.89 1.973 4.04 1.842 4.04 1.842h.974z"/></svg>`;
  const iconYT  = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`;
  const iconOK  = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm5.5 9.5c-.56.98-1.63 1.63-2.85 1.63h-.15l1.85 2.07c.3.33.28.85-.05 1.15a.81.81 0 01-1.15-.05L12 17.8l-3.15 2.5a.81.81 0 01-1.15.05.81.81 0 01.05-1.15l1.85-2.07h-.15c-1.22 0-2.29-.65-2.85-1.63a.81.81 0 011.4-.82c.26.44.74.72 1.3.72h3.4c.56 0 1.04-.28 1.3-.72a.81.81 0 111.4.82z"/></svg>`;
  const iconTG  = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.447l-2.95-.924c-.64-.203-.652-.64.136-.954l11.52-4.44c.537-.194 1.006.131.928.092z"/></svg>`;
  const iconDZ  = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 19.5C9.5 17 7 14.5 4.5 12.5 7 10.5 9.5 8 11.5 4.5c2 3.5 4.5 6 7 8-2.5 2-5 4.5-7 7z"/></svg>`;

  const socialItems = [
    { href: s.vk,      icon: iconVK, title: 'ВКонтакте' },
    { href: s.youtube, icon: iconYT, title: 'YouTube' },
    { href: s.ok,      icon: iconOK, title: 'Одноклассники' },
    { href: `https://t.me/${d.contacts.telegram.replace('@','')}`, icon: iconTG, title: 'Telegram' },
    { href: s.dzen,    icon: iconDZ, title: 'Дзен' },
  ];

  document.getElementById('site-footer').innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-logo-text">Стома<span>Прайм</span></div>
          <p class="footer-desc">${d.footer.description}</p>
          <div class="footer-socials">
            ${socialItems.filter(x => x.href).map(x =>
              `<a href="${x.href}" class="footer-social-link" title="${x.title}" target="_blank" rel="noopener">${x.icon}</a>`
            ).join('')}
          </div>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Услуги</div>
          <ul>${d.services.slice(0,5).map(sv => `<li><a href="${sv.file}">${sv.title}</a></li>`).join('')}</ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Информация</div>
          <ul>
            <li><a href="doctors.html">Наши врачи</a></li>
            <li><a href="prices.html">Цены</a></li>
            <li><a href="contacts.html">Контакты</a></li>
            <li><a href="#">Политика конфид.</a></li>
            <li><a href="#">Публичная оферта</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Контакты</div>
          <ul>
            <li style="color:#475569;font-size:.875rem;line-height:1.6">📍 ${d.contacts.address}</li>
            <li style="color:#475569;font-size:.875rem">🚇 ${d.contacts.metroStation}</li>
            <li><a href="tel:${d.contacts.phoneRaw}" style="font-weight:700;color:#94a3b8">${d.contacts.phone}</a></li>
            <li><a href="mailto:${d.contacts.email}">${d.contacts.email}</a></li>
            <li style="color:#475569;font-size:.8rem;line-height:1.5">⏰ ${d.general.workingHours}</li>
          </ul>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.06)">
      <div class="container"><div class="footer-bottom">
        <p>${d.footer.copyright}</p>
        <p class="footer-disclaimer">${d.footer.disclaimer} | ${d.footer.license}</p>
      </div></div>
    </div>
  `;
}

// ─── FLOATING WA ─────────────────────────────────────────
function renderFloatWA() {
  const btn = document.createElement('a');
  btn.href = UTILS.whatsappLink();
  btn.className = 'float-wa';
  btn.target = '_blank';
  btn.rel = 'noopener';
  btn.setAttribute('aria-label', 'Написать в WhatsApp');
  btn.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.492a.5.5 0 00.609.61l5.757-1.505A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.888 9.888 0 01-5.031-1.37l-.36-.213-3.733.977.999-3.645-.235-.374A9.867 9.867 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/></svg>`;
  document.body.appendChild(btn);
}

// ─── SCROLL REVEAL ────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Don't unobserve — keep visible
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el);
  });
}

// ─── COUNTER ANIMATION ────────────────────────────────────
function animateCounter(el, target, suffix = '', duration = 1600) {
  const start = performance.now();
  const from = 0;

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.round(easeOut(progress) * target);
    el.textContent = value.toLocaleString('ru') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = '1';
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
}

// ─── PROGRESS BARS ───────────────────────────────────────
function initProgressBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.progress-fill');
        if (fill && !fill.dataset.animated) {
          fill.dataset.animated = '1';
          setTimeout(() => { fill.style.width = fill.dataset.width || '80%'; }, 100);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.progress-bar').forEach(el => observer.observe(el));
}

// ─── PARALLAX (lightweight) ───────────────────────────────
function initParallax() {
  const items = document.querySelectorAll('[data-parallax]');
  if (!items.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        items.forEach(el => {
          const speed = parseFloat(el.dataset.parallax) || 0.15;
          const rect  = el.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            const offset = (sy - (sy + rect.top - window.innerHeight / 2)) * speed;
            el.style.transform = `translateY(${offset}px)`;
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ─── TOAST ────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = `toast ${type}`;
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => t.classList.remove('show'), 3800);
}

// ─── FORM SUBMIT ──────────────────────────────────────────
async function handleFormSubmit(e, formEl) {
  e.preventDefault();
  const btn  = formEl.querySelector('[type=submit]');
  const orig = btn.innerHTML;
  btn.innerHTML = '<span style="opacity:.7">Отправляем...</span>';
  btn.disabled  = true;

  const data = {
    name:    formEl.querySelector('[name=name]')?.value    || '',
    phone:   formEl.querySelector('[name=phone]')?.value   || '',
    service: formEl.querySelector('[name=service]')?.value || '',
    message: formEl.querySelector('[name=message]')?.value || '',
  };

  if (!SITE_DATA.api.telegramBotToken) {
    const waText = `Здравствуйте! Хочу записаться.\nИмя: ${data.name}\nТелефон: ${data.phone}\nУслуга: ${data.service}`;
    window.open(`https://wa.me/${SITE_DATA.contacts.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(waText)}`, '_blank');
    showToast('✅ ' + SITE_DATA.form.successMessage);
    formEl.reset();
  } else {
    const ok = await UTILS.sendToTelegram(data);
    showToast(ok ? '✅ ' + SITE_DATA.form.successMessage : '❌ Ошибка. Позвоните нам напрямую.', ok ? 'success' : 'error');
    if (ok) formEl.reset();
  }

  btn.innerHTML = orig;
  btn.disabled  = false;
}

// ─── BOOKING FORM HTML ────────────────────────────────────
function getBookingFormHTML(showTitle = true) {
  const d = SITE_DATA;
  const serviceOptions = d.services.map(s => `<option value="${s.title}">${s.title}</option>`).join('');
  return `
    <form class="booking-form" novalidate>
      ${showTitle ? `
        <h2 class="section-title" style="font-size:1.5rem;margin-bottom:6px">${d.form.title}</h2>
        <p style="color:var(--text-muted);font-size:.9rem;margin-bottom:24px">${d.form.subtitle}</p>
      ` : ''}
      <div class="form-group">
        <label class="form-label">${d.form.fields.name}</label>
        <input name="name" type="text" class="form-input" placeholder="Ваше имя" required autocomplete="name">
      </div>
      <div class="form-group">
        <label class="form-label">${d.form.fields.phone}</label>
        <input name="phone" type="tel" class="form-input" placeholder="+7 (___) ___-__-__" required autocomplete="tel">
      </div>
      <div class="form-group">
        <label class="form-label">${d.form.fields.service}</label>
        <select name="service" class="form-select">
          <option value="">— Выберите услугу —</option>
          ${serviceOptions}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">${d.form.fields.message}</label>
        <textarea name="message" class="form-textarea" placeholder="Ваш вопрос или пожелание..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-lg" style="width:100%;margin-bottom:12px">${d.form.submitText}</button>
      <p style="font-size:.72rem;color:var(--text-light);text-align:center;margin-bottom:14px">
        Нажимая кнопку, вы соглашаетесь с <a href="#" style="color:var(--primary)">политикой конфиденциальности</a>
      </p>
      <div style="display:flex;gap:10px">
        <a href="${UTILS.whatsappLink()}" class="btn btn-wa" style="flex:1;justify-content:center" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="${d.contacts.telegramLink}" class="btn btn-tg" style="flex:1;justify-content:center" target="_blank" rel="noopener">✈️ Telegram</a>
      </div>
    </form>
  `;
}

// ─── PHONE MASK ───────────────────────────────────────────
function initPhoneMask() {
  document.querySelectorAll('input[type=tel]').forEach(input => {
    input.addEventListener('input', function () {
      let v = this.value.replace(/\D/g, '');
      if (v.startsWith('8')) v = '7' + v.slice(1);
      if (v.startsWith('7')) {
        let f = '+7';
        if (v.length > 1) f += ' (' + v.slice(1, 4);
        if (v.length >= 4) f += ') ' + v.slice(4, 7);
        if (v.length >= 7) f += '-' + v.slice(7, 9);
        if (v.length >= 9) f += '-' + v.slice(9, 11);
        this.value = f;
      }
    });
  });
}

// ─── YANDEX METRIKA ───────────────────────────────────────
function initYandexMetrika() {
  const id = SITE_DATA.api.yandexMetrikaId;
  if (!id) return;
  const s = document.createElement('script');
  s.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${id},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`;
  document.head.appendChild(s);
}

// ─── INIT ALL ─────────────────────────────────────────────
function initPage(activePage) {
  renderHeader(activePage);
  renderFooter();
  renderFloatWA();
  initYandexMetrika();
  initPhoneMask();
  initScrollReveal();
  initCounters();
  initProgressBars();
  initParallax();

  // Bind all booking forms
  document.querySelectorAll('.booking-form').forEach(form => {
    form.addEventListener('submit', e => handleFormSubmit(e, form));
  });
}

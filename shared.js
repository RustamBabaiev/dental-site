// ================================================================
// STOMAPRIME — shared.js
// UTILS здесь (не в config.js!) · Header · Footer · Анимации
// ================================================================

/* ── SVG иконки ─────────────────────────────────────────────── */
var SVG = {
  wa: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.492a.5.5 0 00.609.61l5.757-1.505A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.888 9.888 0 01-5.031-1.37l-.36-.213-3.733.977.999-3.645-.235-.374A9.867 9.867 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/></svg>',
  tg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.447l-2.95-.924c-.64-.203-.652-.64.136-.954l11.52-4.44c.537-.194 1.006.131.928.092z"/></svg>',
  vk: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.785 16.241s.288-.032.436-.194c.136-.148.131-.427.131-.427s-.019-1.307.587-1.498c.597-.189 1.365 1.263 2.178 1.821.615.422 1.082.33 1.082.33l2.175-.03s1.137-.071.598-1.121c-.044-.083-.313-.666-1.608-1.883-1.356-1.274-1.174-1.068.459-3.271.999-1.333 1.398-2.146 1.273-2.494-.12-.332-.854-.244-.854-.244l-2.448.015s-.181-.025-.316.054c-.132.078-.216.26-.216.26s-.387 1.028-.903 1.903c-1.088 1.84-1.524 1.94-1.703 1.824-.414-.268-.311-1.075-.311-1.649 0-1.793.272-2.54-.529-2.733-.266-.064-.461-.106-1.141-.113-.872-.009-1.609.003-2.027.208-.278.135-.492.436-.361.453.162.021.528.099.722.363.252.341.243 1.107.243 1.107s.145 2.112-.337 2.373c-.331.179-.786-.187-1.761-1.854-.5-.861-.878-1.814-.878-1.814s-.072-.176-.202-.271c-.157-.114-.376-.15-.376-.15l-2.325.015s-.349.01-.477.162c-.114.135-.009.414-.009.414s1.822 4.261 3.881 6.409c1.89 1.973 4.04 1.842 4.04 1.842h.974z"/></svg>',
  yt: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>',
  ok: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm5.5 9.5c-.56.98-1.63 1.63-2.85 1.63h-.15l1.85 2.07c.3.33.28.85-.05 1.15a.81.81 0 01-1.15-.05L12 17.8l-3.15 2.5a.81.81 0 01-1.15.05.81.81 0 01.05-1.15l1.85-2.07h-.15c-1.22 0-2.29-.65-2.85-1.63a.81.81 0 011.4-.82c.26.44.74.72 1.3.72h3.4c.56 0 1.04-.28 1.3-.72a.81.81 0 111.4.82z"/></svg>',
  dz: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 19.5C9.5 17 7 14.5 4.5 12.5 7 10.5 9.5 8 11.5 4.5c2 3.5 4.5 6 7 8-2.5 2-5 4.5-7 7z"/></svg>',
};

/* ── UTILS — единственное объявление во всём проекте ─────────── */
var UTILS = {
  whatsappLink: function() {
    var num = SITE_DATA.contacts.whatsapp.replace(/\D/g, '');
    var msg = encodeURIComponent(SITE_DATA.contacts.whatsappMessage);
    return 'https://wa.me/' + num + '?text=' + msg;
  },
  phoneLink:  function() { return 'tel:' + SITE_DATA.contacts.phoneRaw; },
  emailLink:  function() { return 'mailto:' + SITE_DATA.contacts.email; },
  sendToTelegram: async function(data) {
    var t = SITE_DATA.api.telegramBotToken;
    var c = SITE_DATA.api.telegramChatId;
    if (!t || !c) return false;
    var text = '🦷 *' + SITE_DATA.general.clinicName + '*\n\n👤 ' + data.name + '\n📞 ' + data.phone + '\n🔧 ' + (data.service||'—') + '\n💬 ' + (data.message||'—');
    try {
      var r = await fetch('https://api.telegram.org/bot' + t + '/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: c, text: text, parse_mode: 'Markdown' })
      });
      return r.ok;
    } catch(e) { return false; }
  }
};

/* ── HEADER ──────────────────────────────────────────────────── */
function renderHeader(activePage) {
  var d = SITE_DATA;
  var nav = [
    { href:'index.html',          label:'Главная',  id:'index'    },
    { href:'index.html#services', label:'Услуги',   id:'services' },
    { href:'doctors.html',        label:'Врачи',    id:'doctors'  },
    { href:'prices.html',         label:'Цены',     id:'prices'   },
    { href:'contacts.html',       label:'Контакты', id:'contacts' },
  ];

  var desktopNav = nav.map(function(n) {
    return '<a href="' + n.href + '" class="' + (activePage === n.id ? 'active' : '') + '">' + n.label + '</a>';
  }).join('');

  var mobileNav = nav.map(function(n) {
    return '<a href="' + n.href + '">' + n.label + '</a>';
  }).join('');

  var logoImg = d.general.logoImage
    ? '<img src="' + d.general.logoImage + '" class="logo-img" alt="' + d.general.clinicName + '">'
    : '';

  var el = document.getElementById('site-header');
  if (!el) return;

  el.innerHTML =
    '<div class="header-inner">' +
      '<a href="index.html" class="logo">' + logoImg + '<span class="logo-text">Стома<span>Прайм</span></span></a>' +
      '<nav class="nav-desktop">' + desktopNav + '</nav>' +
      '<div class="header-actions">' +
        '<a href="' + UTILS.phoneLink() + '" class="header-phone">' + d.contacts.phone + '</a>' +
        '<a href="' + d.contacts.telegramLink + '" class="btn btn-ghost btn-sm" target="_blank" rel="noopener">' + SVG.tg + ' Telegram</a>' +
        '<a href="' + UTILS.whatsappLink() + '" class="btn btn-wa btn-sm" target="_blank" rel="noopener">' + SVG.wa + ' WhatsApp</a>' +
        '<button class="burger" id="sp-burger" aria-label="Меню" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div>' +
    '<div class="mobile-menu" id="sp-menu">' +
      mobileNav +
      '<div class="mobile-menu-footer">' +
        '<a href="' + UTILS.phoneLink() + '" class="btn btn-primary">📞 ' + d.contacts.phone + '</a>' +
        '<a href="' + UTILS.whatsappLink() + '" class="btn btn-wa" target="_blank" rel="noopener">' + SVG.wa + ' WhatsApp</a>' +
        '<a href="' + d.contacts.telegramLink + '" class="btn btn-tg" target="_blank" rel="noopener">' + SVG.tg + ' Telegram</a>' +
      '</div>' +
    '</div>';

  var burger = document.getElementById('sp-burger');
  var menu   = document.getElementById('sp-menu');

  burger.addEventListener('click', function() {
    var open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    // Используем html, НЕ body — body overflow-x:hidden ломает position:fixed
    document.documentElement.style.overflowY = open ? 'hidden' : '';
  });

  var links = menu.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      burger.classList.remove('open');
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflowY = '';
    });
  }

  window.addEventListener('scroll', function() {
    var h = document.getElementById('site-header');
    if (h) h.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ── FOOTER ──────────────────────────────────────────────────── */
function renderFooter() {
  var d = SITE_DATA, s = d.socials;
  var socs = [
    { href:s.vk,                                                          svg:SVG.vk, title:'ВКонтакте'    },
    { href:s.youtube,                                                     svg:SVG.yt, title:'YouTube'       },
    { href:s.ok,                                                          svg:SVG.ok, title:'Одноклассники' },
    { href:'https://t.me/'+d.contacts.telegram.replace('@',''),           svg:SVG.tg, title:'Telegram'      },
    { href:s.dzen,                                                        svg:SVG.dz, title:'Дзен'          },
  ];

  var socHtml = socs.filter(function(x){ return x.href; }).map(function(x){
    return '<a href="'+x.href+'" class="footer-soc" title="'+x.title+'" target="_blank" rel="noopener">'+x.svg+'</a>';
  }).join('');

  var svcHtml = d.services.slice(0,5).map(function(sv){
    return '<li><a href="'+sv.file+'">'+sv.title+'</a></li>';
  }).join('');

  var el = document.getElementById('site-footer');
  if (!el) return;

  el.innerHTML =
    '<div class="container"><div class="footer-grid">' +
      '<div>' +
        '<div class="footer-logo">Стома<span>Прайм</span></div>' +
        '<p class="footer-desc">' + d.footer.description + '</p>' +
        '<div class="footer-socials">' + socHtml + '</div>' +
      '</div>' +
      '<div class="footer-col"><div class="footer-col-h">Услуги</div><ul>' + svcHtml + '</ul></div>' +
      '<div class="footer-col"><div class="footer-col-h">Информация</div><ul>' +
        '<li><a href="doctors.html">Врачи</a></li>' +
        '<li><a href="prices.html">Цены</a></li>' +
        '<li><a href="contacts.html">Контакты</a></li>' +
        '<li><a href="#">Политика конфид.</a></li>' +
        '<li><a href="#">Оферта</a></li>' +
      '</ul></div>' +
      '<div class="footer-col"><div class="footer-col-h">Контакты</div><ul>' +
        '<li style="color:#3d4f6a;font-size:.86rem;line-height:1.6">📍 '+d.contacts.address+'</li>' +
        '<li style="color:#3d4f6a;font-size:.86rem">🚇 '+d.contacts.metroStation+'</li>' +
        '<li><a href="'+UTILS.phoneLink()+'" style="color:#8a9ab5;font-weight:700">'+d.contacts.phone+'</a></li>' +
        '<li><a href="'+UTILS.emailLink()+'">'+d.contacts.email+'</a></li>' +
        '<li style="color:#3d4f6a;font-size:.8rem;line-height:1.5">⏰ '+d.general.workingHours+'</li>' +
      '</ul></div>' +
    '</div></div>' +
    '<div style="border-top:1px solid rgba(255,255,255,.05)"><div class="container"><div class="footer-bottom">' +
      '<p>'+d.footer.copyright+'</p>' +
      '<p class="footer-disc">'+d.footer.disclaimer+' | '+d.footer.license+'</p>' +
    '</div></div></div>';
}

/* ── FLOAT WA ────────────────────────────────────────────────── */
function renderFloatWA() {
  if (document.querySelector('.float-wa')) return;
  var a = document.createElement('a');
  a.href = UTILS.whatsappLink();
  a.className = 'float-wa';
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'WhatsApp');
  a.innerHTML = SVG.wa;
  document.body.appendChild(a);
}

/* ── REVEAL (scroll animations) ──────────────────────────────── */
function initReveal() {
  var sel = '.reveal,.reveal-l,.reveal-r,.reveal-s';
  var els = document.querySelectorAll(sel);
  if (!els.length) return;

  // Немедленно показываем элементы которые уже в viewport
  els.forEach(function(el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add('in');
    }
  });

  if (!('IntersectionObserver' in window)) {
    els.forEach(function(el) { el.classList.add('in'); });
    return;
  }

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

  els.forEach(function(el) {
    if (!el.classList.contains('in')) obs.observe(el);
  });
}

/* ── COUNTERS ────────────────────────────────────────────────── */
function initCounters() {
  var els = document.querySelectorAll('[data-counter]');
  if (!els.length) return;

  function run(el) {
    if (el._counted) return;
    el._counted = true;
    var target = parseInt(el.dataset.to, 10) || 0;
    var sfx    = el.dataset.sfx || '';
    var dur    = 1600;
    var t0     = performance.now();
    function ease(x) { return 1 - Math.pow(1 - x, 3); }
    function tick(now) {
      var p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(ease(p) * target).toLocaleString('ru') + sfx;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(function(el) { obs.observe(el); });
  } else {
    els.forEach(run);
  }
}

/* ── TOAST ───────────────────────────────────────────────────── */
function showToast(msg, type) {
  var t = document.querySelector('.sp-toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'sp-toast toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'sp-toast toast ' + (type || 'success');
  requestAnimationFrame(function() {
    requestAnimationFrame(function() { t.classList.add('show'); });
  });
  setTimeout(function() { t.classList.remove('show'); }, 4000);
}

/* ── FORM SUBMIT ─────────────────────────────────────────────── */
async function handleFormSubmit(e, form) {
  e.preventDefault();
  var btn = form.querySelector('[type=submit]');
  var orig = btn.innerHTML;
  btn.innerHTML = '<span style="opacity:.6">Отправляем...</span>';
  btn.disabled = true;

  var qs = function(n) { var el = form.querySelector('[name='+n+']'); return el ? el.value : ''; };
  var data = { name: qs('name'), phone: qs('phone'), service: qs('service'), message: qs('message') };

  if (!SITE_DATA.api.telegramBotToken) {
    var txt = 'Здравствуйте!\nИмя: '+data.name+'\nТел: '+data.phone+'\nУслуга: '+data.service;
    window.open('https://wa.me/'+SITE_DATA.contacts.whatsapp.replace(/\D/g,'')+'?text='+encodeURIComponent(txt), '_blank');
    showToast('✅ ' + SITE_DATA.form.successMessage);
    form.reset();
  } else {
    var ok = await UTILS.sendToTelegram(data);
    showToast(ok ? '✅ ' + SITE_DATA.form.successMessage : '❌ Ошибка. Позвоните нам напрямую.', ok ? 'success' : 'error');
    if (ok) form.reset();
  }

  btn.innerHTML = orig;
  btn.disabled = false;
}

/* ── ФОРМА ЗАПИСИ HTML ───────────────────────────────────────── */
function getBookingFormHTML(showTitle) {
  var d = SITE_DATA;
  var opts = d.services.map(function(s) {
    return '<option value="'+s.title+'">'+s.title+'</option>';
  }).join('');
  var title = (showTitle !== false)
    ? '<div class="h3" style="margin-bottom:6px">'+d.form.title+'</div>' +
      '<p style="font-size:.88rem;color:var(--text-muted);margin-bottom:20px">'+d.form.subtitle+'</p>'
    : '';
  return '<form class="sp-form booking-form" novalidate>' +
    title +
    '<div class="form-group"><label class="form-label">'+d.form.fields.name+'</label>' +
    '<input name="name" type="text" class="form-input" placeholder="Ваше имя" required autocomplete="name"></div>' +
    '<div class="form-group"><label class="form-label">'+d.form.fields.phone+'</label>' +
    '<input name="phone" type="tel" class="form-input" placeholder="+7 (___) ___-__-__" required autocomplete="tel"></div>' +
    '<div class="form-group"><label class="form-label">'+d.form.fields.service+'</label>' +
    '<select name="service" class="form-select"><option value="">— Выберите услугу —</option>'+opts+'</select></div>' +
    '<div class="form-group"><label class="form-label">'+d.form.fields.message+'</label>' +
    '<textarea name="message" class="form-textarea" placeholder="Ваш вопрос..."></textarea></div>' +
    '<button type="submit" class="btn btn-primary btn-lg" style="width:100%;margin-bottom:10px">'+d.form.submitText+'</button>' +
    '<p style="font-size:.7rem;color:var(--text-xlight);text-align:center;margin-bottom:12px">Нажимая кнопку, вы соглашаетесь с <a href="#" style="color:var(--blue)">политикой конфиденциальности</a></p>' +
    '<div style="display:flex;gap:9px">' +
      '<a href="'+UTILS.whatsappLink()+'" class="btn btn-wa" style="flex:1;justify-content:center" target="_blank" rel="noopener">'+SVG.wa+' WhatsApp</a>' +
      '<a href="'+d.contacts.telegramLink+'" class="btn btn-tg" style="flex:1;justify-content:center" target="_blank" rel="noopener">'+SVG.tg+' Telegram</a>' +
    '</div>' +
  '</form>';
}

/* ── МАСКА ТЕЛЕФОНА ──────────────────────────────────────────── */
function initPhoneMask() {
  document.querySelectorAll('input[type=tel]').forEach(function(inp) {
    inp.addEventListener('input', function() {
      var v = this.value.replace(/\D/g, '');
      if (v[0] === '8') v = '7' + v.slice(1);
      if (v[0] === '7') {
        var f = '+7';
        if (v.length > 1) f += ' (' + v.slice(1,4);
        if (v.length >= 4) f += ') ' + v.slice(4,7);
        if (v.length >= 7) f += '-' + v.slice(7,9);
        if (v.length >= 9) f += '-' + v.slice(9,11);
        this.value = f;
      }
    });
  });
}

/* ── ЯНДЕКС МЕТРИКА ──────────────────────────────────────────── */
function initMetrika() {
  var id = SITE_DATA.api.yandexMetrikaId;
  if (!id) return;
  var s = document.createElement('script');
  s.innerHTML = '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym('+id+',"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});';
  document.head.appendChild(s);
}

/* ── ИНИЦИАЛИЗАЦИЯ СТРАНИЦЫ ──────────────────────────────────── */
function initPage(activePage) {
  renderHeader(activePage || 'index');
  renderFooter();
  renderFloatWA();
  initMetrika();

  // Задержка 50мс — даём DOMContentLoaded дорисовать динамический контент
  setTimeout(function() {
    initReveal();
    initCounters();
    initPhoneMask();
    document.querySelectorAll('.booking-form,.sp-form').forEach(function(f) {
      if (!f._bound) {
        f._bound = true;
        f.addEventListener('submit', function(e) { handleFormSubmit(e, f); });
      }
    });
  }, 50);
}

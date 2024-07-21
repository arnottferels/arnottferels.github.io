import { i as Z } from './index.CTbVEFV3.js';
function R() {
  const e = document.querySelector('.nav-links'),
    t = document.querySelector('.menu');
  e.classList.toggle('expanded'), t.classList.toggle('active');
}
function D() {
  const e = document.querySelector('.nav-links'),
    t = document.querySelector('.menu');
  window.innerWidth >= 1440 &&
    (e.classList.remove('expanded'), t.classList.remove('active'));
}
function b() {
  const e = document.querySelector('.nav-links'),
    t = document.querySelector('.menu');
  e.classList.remove('expanded'), t.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu').addEventListener('click', R);
});
window.addEventListener('load', D);
window.addEventListener('resize', D);
function _() {
  document.querySelector('.menu').addEventListener('click', R), D();
}
document.addEventListener('astro:before-swap', () => {
  document.querySelector('.menu').removeEventListener('click', R);
});
document.addEventListener('astro:after-swap', _);
document.addEventListener('astro:page-load', _);
window.addEventListener('popstate', b);
window.addEventListener('pushstate', b);
window.addEventListener('replacestate', b);
(function (e) {
  var t = e.pushState,
    n = e.replaceState;
  (e.pushState = function (o) {
    return (
      typeof e.onpushstate == 'function' && e.onpushstate({ state: o }),
      b(),
      t.apply(e, arguments)
    );
  }),
    (e.replaceState = function (o) {
      return (
        typeof e.onreplacestate == 'function' && e.onreplacestate({ state: o }),
        b(),
        n.apply(e, arguments)
      );
    });
})(window.history);
function X() {
  const e = window.location.pathname;
  document.querySelectorAll('a').forEach((n) => {
    n.getAttribute('href') === e
      ? n.classList.add('active')
      : n.classList.remove('active');
  });
}
document.addEventListener('DOMContentLoaded', () => {
  X();
});
document.addEventListener('astro:after-swap', () => {
  X();
});
function L() {
  if (window.innerWidth >= 1440) {
    var e = document.querySelector('header'),
      t = window.scrollY,
      n = window.innerHeight * 0.3;
    t > n
      ? e.classList.add('header-hidden')
      : e.classList.remove('header-hidden');
  } else {
    var e = document.querySelector('header');
    e.classList.remove('header-hidden');
  }
}
L();
window.addEventListener('scroll', L);
window.addEventListener('resize', L);
window.addEventListener('astro:after-swap', L);
const B = {
  scrollToTop: function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  init: function () {
    const e = document.getElementById('scrollToTopBtn');
    e?.style.setProperty('display', 'none'),
      window.addEventListener('scroll', function () {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
          ? e?.style.setProperty('display', 'block')
          : e?.style.setProperty('display', 'none');
      }),
      e?.addEventListener('click', this.scrollToTop);
  },
};
document.addEventListener('DOMContentLoaded', function () {
  B.init();
});
document.addEventListener('astro:after-swap', function () {
  B.init();
});
const y = 'data-astro-transition-persist';
function ee(e) {
  for (const t of document.scripts)
    for (const n of e.scripts)
      if (
        !n.hasAttribute('data-astro-rerun') &&
        ((!t.src && t.textContent === n.textContent) ||
          (t.src && t.type === n.type && t.src === n.src))
      ) {
        n.dataset.astroExec = '';
        break;
      }
}
function te(e) {
  const t = document.documentElement,
    n = [...t.attributes].filter(
      ({ name: o }) => (t.removeAttribute(o), o.startsWith('data-astro-'))
    );
  [...e.documentElement.attributes, ...n].forEach(({ name: o, value: r }) =>
    t.setAttribute(o, r)
  );
}
function ne(e) {
  for (const t of Array.from(document.head.children)) {
    const n = ie(t, e);
    n ? n.remove() : t.remove();
  }
  document.head.append(...e.head.children);
}
function oe(e, t) {
  t.replaceWith(e);
  for (const n of t.querySelectorAll(`[${y}]`)) {
    const o = n.getAttribute(y),
      r = e.querySelector(`[${y}="${o}"]`);
    r &&
      (r.replaceWith(n),
      r.localName === 'astro-island' &&
        se(n) &&
        (n.setAttribute('ssr', ''),
        n.setAttribute('props', r.getAttribute('props'))));
  }
}
const re = () => {
    const e = document.activeElement;
    if (e?.closest(`[${y}]`)) {
      if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
        const t = e.selectionStart,
          n = e.selectionEnd;
        return () => x({ activeElement: e, start: t, end: n });
      }
      return () => x({ activeElement: e });
    } else return () => x({ activeElement: null });
  },
  x = ({ activeElement: e, start: t, end: n }) => {
    e &&
      (e.focus(),
      (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) &&
        (typeof t == 'number' && (e.selectionStart = t),
        typeof n == 'number' && (e.selectionEnd = n)));
  },
  ie = (e, t) => {
    const n = e.getAttribute(y),
      o = n && t.head.querySelector(`[${y}="${n}"]`);
    if (o) return o;
    if (e.matches('link[rel=stylesheet]')) {
      const r = e.getAttribute('href');
      return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`);
    }
    return null;
  },
  se = (e) => {
    const t = e.dataset.astroTransitionPersistProps;
    return t == null || t === 'false';
  },
  ae = (e) => {
    ee(e), te(e), ne(e);
    const t = re();
    oe(e.body, document.body), t();
  },
  ce = 'astro:before-preparation',
  le = 'astro:after-preparation',
  de = 'astro:before-swap',
  ue = 'astro:after-swap',
  me = (e) => document.dispatchEvent(new Event(e));
class U extends Event {
  from;
  to;
  direction;
  navigationType;
  sourceElement;
  info;
  newDocument;
  signal;
  constructor(t, n, o, r, s, d, a, c, u, l) {
    super(t, n),
      (this.from = o),
      (this.to = r),
      (this.direction = s),
      (this.navigationType = d),
      (this.sourceElement = a),
      (this.info = c),
      (this.newDocument = u),
      (this.signal = l),
      Object.defineProperties(this, {
        from: { enumerable: !0 },
        to: { enumerable: !0, writable: !0 },
        direction: { enumerable: !0, writable: !0 },
        navigationType: { enumerable: !0 },
        sourceElement: { enumerable: !0 },
        info: { enumerable: !0 },
        newDocument: { enumerable: !0, writable: !0 },
        signal: { enumerable: !0 },
      });
  }
}
class fe extends U {
  formData;
  loader;
  constructor(t, n, o, r, s, d, a, c, u, l) {
    super(ce, { cancelable: !0 }, t, n, o, r, s, d, a, c),
      (this.formData = u),
      (this.loader = l.bind(this, this)),
      Object.defineProperties(this, {
        formData: { enumerable: !0 },
        loader: { enumerable: !0, writable: !0 },
      });
  }
}
class he extends U {
  direction;
  viewTransition;
  swap;
  constructor(t, n) {
    super(
      de,
      void 0,
      t.from,
      t.to,
      t.direction,
      t.navigationType,
      t.sourceElement,
      t.info,
      t.newDocument,
      t.signal
    ),
      (this.direction = t.direction),
      (this.viewTransition = n),
      (this.swap = () => ae(this.newDocument)),
      Object.defineProperties(this, {
        direction: { enumerable: !0 },
        viewTransition: { enumerable: !0 },
        swap: { enumerable: !0, writable: !0 },
      });
  }
}
async function pe(e, t, n, o, r, s, d, a, c) {
  const u = new fe(e, t, n, o, r, s, window.document, d, a, c);
  return (
    document.dispatchEvent(u) &&
      (await u.loader(),
      u.defaultPrevented ||
        (me(le), u.navigationType !== 'traverse' && P({ scrollX, scrollY }))),
    u
  );
}
function we(e, t) {
  const n = new he(e, t);
  return document.dispatchEvent(n), n.swap(), n;
}
const ve = history.pushState.bind(history),
  T = history.replaceState.bind(history),
  P = (e) => {
    history.state &&
      ((history.scrollRestoration = 'manual'),
      T({ ...history.state, ...e }, ''));
  },
  M = !!document.startViewTransition,
  I = () => !!document.querySelector('[name="astro-view-transitions-enabled"]'),
  W = (e, t) => e.pathname === t.pathname && e.search === t.search;
let m, w, A;
const $ = (e) => document.dispatchEvent(new Event(e)),
  j = () => $('astro:page-load'),
  ge = () => {
    let e = document.createElement('div');
    e.setAttribute('aria-live', 'assertive'),
      e.setAttribute('aria-atomic', 'true'),
      (e.className = 'astro-route-announcer'),
      document.body.append(e),
      setTimeout(() => {
        let t =
          document.title ||
          document.querySelector('h1')?.textContent ||
          location.pathname;
        e.textContent = t;
      }, 60);
  },
  N = 'data-astro-transition-persist',
  q = 'data-astro-transition',
  k = 'data-astro-transition-fallback';
let O,
  E = 0;
history.state
  ? ((E = history.state.index),
    scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
  : I() &&
    (T({ index: E, scrollX, scrollY }, ''),
    (history.scrollRestoration = 'manual'));
async function ye(e, t) {
  try {
    const n = await fetch(e, t),
      r = (n.headers.get('content-type') ?? '').split(';', 1)[0].trim();
    return r !== 'text/html' && r !== 'application/xhtml+xml'
      ? null
      : {
          html: await n.text(),
          redirected: n.redirected ? n.url : void 0,
          mediaType: r,
        };
  } catch {
    return null;
  }
}
function K() {
  const e = document.querySelector('[name="astro-view-transitions-fallback"]');
  return e ? e.getAttribute('content') : 'animate';
}
function be() {
  let e = Promise.resolve();
  for (const t of Array.from(document.scripts)) {
    if (t.dataset.astroExec === '') continue;
    const n = t.getAttribute('type');
    if (n && n !== 'module' && n !== 'text/javascript') continue;
    const o = document.createElement('script');
    o.innerHTML = t.innerHTML;
    for (const r of t.attributes) {
      if (r.name === 'src') {
        const s = new Promise((d) => {
          o.onload = o.onerror = d;
        });
        e = e.then(() => s);
      }
      o.setAttribute(r.name, r.value);
    }
    (o.dataset.astroExec = ''), t.replaceWith(o);
  }
  return e;
}
const V = (e, t, n, o, r) => {
  const s = W(t, e),
    d = document.title;
  document.title = o;
  let a = !1;
  if (e.href !== location.href && !r)
    if (n.history === 'replace') {
      const c = history.state;
      T(
        { ...n.state, index: c.index, scrollX: c.scrollX, scrollY: c.scrollY },
        '',
        e.href
      );
    } else ve({ ...n.state, index: ++E, scrollX: 0, scrollY: 0 }, '', e.href);
  if (
    ((document.title = d),
    (A = e),
    s || (scrollTo({ left: 0, top: 0, behavior: 'instant' }), (a = !0)),
    r)
  )
    scrollTo(r.scrollX, r.scrollY);
  else {
    if (e.hash) {
      history.scrollRestoration = 'auto';
      const c = history.state;
      (location.href = e.href),
        history.state ||
          (T(c, ''), s && window.dispatchEvent(new PopStateEvent('popstate')));
    } else a || scrollTo({ left: 0, top: 0, behavior: 'instant' });
    history.scrollRestoration = 'manual';
  }
};
function Ee(e) {
  const t = [];
  for (const n of e.querySelectorAll('head link[rel=stylesheet]'))
    if (
      !document.querySelector(
        `[${N}="${n.getAttribute(N)}"], link[rel=stylesheet][href="${n.getAttribute('href')}"]`
      )
    ) {
      const o = document.createElement('link');
      o.setAttribute('rel', 'preload'),
        o.setAttribute('as', 'style'),
        o.setAttribute('href', n.getAttribute('href')),
        t.push(
          new Promise((r) => {
            ['load', 'error'].forEach((s) => o.addEventListener(s, r)),
              document.head.append(o);
          })
        );
    }
  return t;
}
async function C(e, t, n, o, r) {
  async function s(c) {
    function u(h) {
      const f = h.effect;
      return !f || !(f instanceof KeyframeEffect) || !f.target
        ? !1
        : window.getComputedStyle(f.target, f.pseudoElement)
            .animationIterationCount === 'infinite';
    }
    const l = document.getAnimations();
    document.documentElement.setAttribute(k, c);
    const p = document.getAnimations().filter((h) => !l.includes(h) && !u(h));
    return Promise.allSettled(p.map((h) => h.finished));
  }
  if (r === 'animate' && !n.transitionSkipped && !e.signal.aborted)
    try {
      await s('old');
    } catch {}
  const d = document.title,
    a = we(e, n.viewTransition);
  V(a.to, a.from, t, d, o),
    $(ue),
    r === 'animate' &&
      (!n.transitionSkipped && !a.signal.aborted
        ? s('new').finally(() => n.viewTransitionFinished())
        : n.viewTransitionFinished());
}
function Te() {
  return m?.controller.abort(), (m = { controller: new AbortController() });
}
async function z(e, t, n, o, r) {
  const s = Te();
  if (!I() || location.origin !== n.origin) {
    s === m && (m = void 0), (location.href = n.href);
    return;
  }
  const d = r ? 'traverse' : o.history === 'replace' ? 'replace' : 'push';
  if (
    (d !== 'traverse' && P({ scrollX, scrollY }),
    W(t, n) && ((e !== 'back' && n.hash) || (e === 'back' && t.hash)))
  ) {
    V(n, t, o, document.title, r), s === m && (m = void 0);
    return;
  }
  const a = await pe(
    t,
    n,
    e,
    d,
    o.sourceElement,
    o.info,
    s.controller.signal,
    o.formData,
    c
  );
  if (a.defaultPrevented || a.signal.aborted) {
    s === m && (m = void 0), a.signal.aborted || (location.href = n.href);
    return;
  }
  async function c(i) {
    const p = i.to.href,
      h = { signal: i.signal };
    if (i.formData) {
      h.method = 'POST';
      const g =
        i.sourceElement instanceof HTMLFormElement
          ? i.sourceElement
          : i.sourceElement instanceof HTMLElement && 'form' in i.sourceElement
            ? i.sourceElement.form
            : i.sourceElement?.closest('form');
      h.body =
        g?.attributes.getNamedItem('enctype')?.value ===
        'application/x-www-form-urlencoded'
          ? new URLSearchParams(i.formData)
          : i.formData;
    }
    const f = await ye(p, h);
    if (f === null) {
      i.preventDefault();
      return;
    }
    if (f.redirected) {
      const g = new URL(f.redirected);
      if (g.origin !== i.to.origin) {
        i.preventDefault();
        return;
      }
      i.to = g;
    }
    if (
      ((O ??= new DOMParser()),
      (i.newDocument = O.parseFromString(f.html, f.mediaType)),
      i.newDocument.querySelectorAll('noscript').forEach((g) => g.remove()),
      !i.newDocument.querySelector('[name="astro-view-transitions-enabled"]') &&
        !i.formData)
    ) {
      i.preventDefault();
      return;
    }
    const S = Ee(i.newDocument);
    S.length && !i.signal.aborted && (await Promise.all(S));
  }
  async function u() {
    if (w && w.viewTransition) {
      try {
        w.viewTransition.skipTransition();
      } catch {}
      try {
        await w.viewTransition.updateCallbackDone;
      } catch {}
    }
    return (w = { transitionSkipped: !1 });
  }
  const l = await u();
  if (a.signal.aborted) {
    s === m && (m = void 0);
    return;
  }
  if ((document.documentElement.setAttribute(q, a.direction), M))
    l.viewTransition = document.startViewTransition(
      async () => await C(a, o, l, r)
    );
  else {
    const i = (async () => {
      await Promise.resolve(), await C(a, o, l, r, K());
    })();
    l.viewTransition = {
      updateCallbackDone: i,
      ready: i,
      finished: new Promise((p) => (l.viewTransitionFinished = p)),
      skipTransition: () => {
        (l.transitionSkipped = !0), document.documentElement.removeAttribute(k);
      },
    };
  }
  l.viewTransition.updateCallbackDone.finally(async () => {
    await be(), j(), ge();
  }),
    l.viewTransition.finished.finally(() => {
      (l.viewTransition = void 0),
        l === w && (w = void 0),
        s === m && (m = void 0),
        document.documentElement.removeAttribute(q),
        document.documentElement.removeAttribute(k);
    });
  try {
    await l.viewTransition.updateCallbackDone;
  } catch (i) {
    const p = i;
    console.log('[astro]', p.name, p.message, p.stack);
  }
}
async function H(e, t) {
  await z('forward', A, new URL(e, location.href), t ?? {});
}
function Le(e) {
  if (!I() && e.state) {
    location.reload();
    return;
  }
  if (e.state === null) return;
  const t = history.state,
    n = t.index,
    o = n > E ? 'forward' : 'back';
  (E = n), z(o, A, new URL(location.href), {}, t);
}
const F = () => {
  history.state &&
    (scrollX !== history.state.scrollX || scrollY !== history.state.scrollY) &&
    P({ scrollX, scrollY });
};
{
  if (M || K() !== 'none')
    if (
      ((A = new URL(location.href)),
      addEventListener('popstate', Le),
      addEventListener('load', j),
      'onscrollend' in window)
    )
      addEventListener('scrollend', F);
    else {
      let e, t, n, o;
      const r = () => {
        if (o !== history.state?.index) {
          clearInterval(e), (e = void 0);
          return;
        }
        if (t === scrollY && n === scrollX) {
          clearInterval(e), (e = void 0), F();
          return;
        } else (t = scrollY), (n = scrollX);
      };
      addEventListener(
        'scroll',
        () => {
          e === void 0 &&
            ((o = history.state.index),
            (t = scrollY),
            (n = scrollX),
            (e = window.setInterval(r, 50)));
        },
        { passive: !0 }
      );
    }
  for (const e of document.scripts) e.dataset.astroExec = '';
}
function Ae() {
  const e = document.querySelector('[name="astro-view-transitions-fallback"]');
  return e ? e.getAttribute('content') : 'animate';
}
function Y(e) {
  return e.dataset.astroReload !== void 0;
}
(M || Ae() !== 'none') &&
  (document.addEventListener('click', (e) => {
    let t = e.target;
    if (
      (e.composed && (t = e.composedPath()[0]),
      t instanceof Element && (t = t.closest('a, area')),
      !(t instanceof HTMLAnchorElement) &&
        !(t instanceof SVGAElement) &&
        !(t instanceof HTMLAreaElement))
    )
      return;
    const n = t instanceof HTMLElement ? t.target : t.target.baseVal,
      o = t instanceof HTMLElement ? t.href : t.href.baseVal,
      r = new URL(o, location.href).origin;
    Y(t) ||
      t.hasAttribute('download') ||
      !t.href ||
      (n && n !== '_self') ||
      r !== location.origin ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey ||
      e.defaultPrevented ||
      (e.preventDefault(),
      H(o, {
        history: t.dataset.astroHistory === 'replace' ? 'replace' : 'auto',
        sourceElement: t,
      }));
  }),
  document.addEventListener('submit', (e) => {
    let t = e.target;
    if (t.tagName !== 'FORM' || e.defaultPrevented || Y(t)) return;
    const n = t,
      o = e.submitter,
      r = new FormData(n, o),
      s = typeof n.action == 'string' ? n.action : n.getAttribute('action'),
      d = typeof n.method == 'string' ? n.method : n.getAttribute('method');
    let a = o?.getAttribute('formaction') ?? s ?? location.pathname;
    const c = o?.getAttribute('formmethod') ?? d ?? 'get';
    if (c === 'dialog' || location.origin !== new URL(a, location.href).origin)
      return;
    const u = { sourceElement: o ?? n };
    if (c === 'get') {
      const l = new URLSearchParams(r),
        i = new URL(a);
      (i.search = l.toString()), (a = i.toString());
    } else u.formData = r;
    e.preventDefault(), H(a, u);
  }),
  Z({ prefetchAll: !0 }));
const Se = new URL('https://arnottferels.github.io');
Se.origin;
const xe = 'Arnott Ferels',
  ke = 'Arnott',
  Re = 'Arn',
  qe = [
    { text: 'Hello', latin: !0 },
    { text: 'Hola', latin: !0 },
    { text: 'Bonjour', latin: !0 },
    { text: '你好', latin: !1, transliteration: 'Nǐ hǎo' },
    { text: 'こんにちは', latin: !1, transliteration: 'Konnichiwa' },
    { text: '안녕하세요', latin: !1, transliteration: 'Annyeonghaseyo' },
    { text: 'مرحبا', latin: !1, transliteration: 'Marhaban' },
    { text: 'नमस्ते', latin: !1, transliteration: 'Namaste' },
    { text: 'Γειά σου', latin: !1, transliteration: 'Geiá sou' },
    { text: 'Hej', latin: !0 },
    { text: 'สวัสดี', latin: !1, transliteration: 'S̄wạs̄dī' },
    { text: 'שלום', latin: !1, transliteration: 'Shalom' },
    { text: 'Xin chào', latin: !0 },
    { text: 'Ahoj', latin: !0 },
    { text: 'Salut', latin: !0 },
    { text: 'Halo', latin: !0 },
  ],
  De = xe,
  Pe = ke,
  Me = Re;
function v() {
  const e = document.querySelector('.name-span');
  if (!e) return;
  const t = document.documentElement.clientWidth;
  t < 320
    ? (e.textContent = Me)
    : t <= 600
      ? (e.textContent = Pe)
      : (e.textContent = De);
}
document.addEventListener('DOMContentLoaded', () => {
  v(),
    window.addEventListener('resize', v),
    document.addEventListener('astro:before-preparation', v),
    document.addEventListener('astro:after-preparation', v),
    document.addEventListener('astro:before-swap', v),
    document.addEventListener('astro:after-swap', v),
    document.addEventListener('astro:page-load', v);
});
const G = () => localStorage.getItem('theme') || 'light',
  J = (e) => {
    document.documentElement.setAttribute('data-theme', e),
      document.querySelectorAll('[data-theme-toggle]').forEach((t) => {
        t.textContent = e === 'light' ? 'Dark' : 'Light';
      });
  },
  Ie = () => {
    const e = G() === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', e), J(e);
  },
  Q = () => {
    J(G()),
      document.querySelectorAll('[data-theme-toggle]').forEach((e) => {
        e.addEventListener('click', Ie);
      });
  };
document.addEventListener('DOMContentLoaded', Q);
document.addEventListener('astro:after-swap', Q);
export { qe as g };

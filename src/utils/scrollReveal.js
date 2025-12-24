// Lightweight scroll reveal using IntersectionObserver.
// Observes elements with class `reveal` and adds `active` when they enter view.
// Supports data attributes on the element:
//  - data-delay: e.g. "150ms" or "0.15s"
//  - data-duration: e.g. "800ms"
//  - data-animation: "fade-left" | "fade-right" (affects transform directions)
//  - data-once: "false" (if present and equal to 'false', element will toggle on exit)

const defaultOptions = {
  root: null,
  rootMargin: '0px 0px -12% 0px', // start reveal a bit before fully in view
  threshold: 0.12,
};

function applyInlineTiming(el) {
  const delay = el.dataset.delay;
  const duration = el.dataset.duration;
  if (delay) el.style.transitionDelay = delay;
  if (duration) el.style.transitionDuration = duration;
}

export default function initScrollReveal(options = {}) {
  const opts = Object.assign({}, defaultOptions, options);

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        applyInlineTiming(el);
        el.classList.add('active');
        // If element should only reveal once (default), unobserve it
        if (el.dataset.once !== 'false') observer.unobserve(el);
      } else {
        // If data-once="false" allow re-hiding when leaving viewport
        if (el.dataset.once === 'false') {
          el.classList.remove('active');
        }
      }
    });
  }, opts);

  function observeAll(root = document) {
    const els = root.querySelectorAll('.reveal');
    els.forEach((el) => {
      // Apply initial inline timing if present so transition is ready
      applyInlineTiming(el);
      io.observe(el);
    });
  }

  // Observe existing elements
  if (typeof document !== 'undefined') observeAll(document);

  // Keep an eye for dynamically added nodes with class reveal
  if (typeof MutationObserver !== 'undefined') {
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.classList && node.classList.contains('reveal')) {
            applyInlineTiming(node);
            io.observe(node);
          }
          // also search inside the node
          const children = node.querySelectorAll && node.querySelectorAll('.reveal');
          if (children && children.length) children.forEach((c) => { applyInlineTiming(c); io.observe(c); });
        });
      });
    });
    mo.observe(document.documentElement || document.body, { childList: true, subtree: true });
  }

  // return observer for advanced uses
  return { io };
}

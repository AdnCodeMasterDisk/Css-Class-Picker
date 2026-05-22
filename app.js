const HTML_ELEMENTS = [
  'div',
  'section',
  'article',
  'main',
  'header',
  'footer',
  'nav',
  'aside',
  'h1',
  'h2',
  'h3',
  'p',
  'span',
  'a',
  'button',
  'img',
  'input',
  'textarea',
  'select',
  'option',
  'ul',
  'ol',
  'li',
];

let selectedElement = 'div';

const CLASS_GROUPS = [
  {
    category: 'Width',
    classes: [
      'w-auto',
      'w-full',
      'w-screen',
      'w-10',
      'w-20',
      'w-30',
      'w-40',
      'w-50',
      'w-60',
      'w-70',
      'w-80',
      'w-90',
    ],
  },
  {
    category: 'Height',
    classes: ['h-auto', 'h-full', 'h-screen'],
  },
  {
    category: 'Container',
    classes: ['container'],
  },
  {
    category: 'Display',
    classes: [
      'd-block',
      'd-inline',
      'd-inline-block',
      'd-flex',
      'd-grid',
      'd-none',
    ],
  },
  {
    category: 'Flex Direction',
    classes: ['flex-row', 'flex-col', 'mobile-flex-col'],
  },
  {
    category: 'Justify Content',
    classes: [
      'justify-start',
      'justify-center',
      'justify-end',
      'justify-between',
      'justify-around',
    ],
  },
  {
    category: 'Align Items',
    classes: ['items-start', 'items-center', 'items-end', 'items-stretch'],
  },
  {
    category: 'Align Self',
    classes: ['self-start', 'self-center', 'self-end'],
  },
  {
    category: 'Flex Wrap',
    classes: ['flex-wrap', 'flex-nowrap'],
  },
  {
    category: 'Gap',
    classes: [
      'gap-1',
      'gap-2',
      'gap-3',
      'gap-4',
      'gap-5',
      'gap-6',
      'gap-7',
      'gap-8',
    ],
  },
  {
    category: 'Grid Columns',
    classes: [
      'grid-1',
      'grid-2',
      'grid-3',
      'grid-4',
      'grid-6',
      'grid-8',
      'mobile-grid',
    ],
  },

  {
    category: 'Padding Top',
    classes: [
      'pt-0',
      'pt-1',
      'pt-2',
      'pt-3',
      'pt-4',
      'pt-5',
      'pt-6',
      'pt-7',
      'pt-8',
      'pt-9',
      'pt-10',
      'pt-11',
      'pt-12',
      'pt-13',
      'pt-14',
      'pt-15',
      'pt-16',
    ],
  },
  {
    category: 'Padding Bottom',
    classes: [
      'pb-0',
      'pb-1',
      'pb-2',
      'pb-3',
      'pb-4',
      'pb-5',
      'pb-6',
      'pb-7',
      'pb-8',
      'pb-9',
      'pb-10',
      'pb-11',
      'pb-12',
      'pb-13',
      'pb-14',
      'pb-15',
      'pb-16',
    ],
  },
  {
    category: 'Padding Left',
    classes: [
      'pl-0',
      'pl-1',
      'pl-2',
      'pl-3',
      'pl-4',
      'pl-5',
      'pl-6',
      'pl-7',
      'pl-8',
      'pl-9',
      'pl-10',
      'pl-11',
      'pl-12',
      'pl-13',
      'pl-14',
      'pl-15',
      'pl-16',
    ],
  },
  {
    category: 'Padding Right',
    classes: [
      'pr-0',
      'pr-1',
      'pr-2',
      'pr-3',
      'pr-4',
      'pr-5',
      'pr-6',
      'pr-7',
      'pr-8',
      'pr-9',
      'pr-10',
      'pr-11',
      'pr-12',
      'pr-13',
      'pr-14',
      'pr-15',
      'pr-16',
    ],
  },

  {
    category: 'Margin X Auto',
    classes: ['mx-auto'],
  },
  {
    category: 'Margin All',
    classes: [
      'm-0',
      'm-1',
      'm-2',
      'm-3',
      'm-4',
      'm-5',
      'm-6',
      'm-7',
      'm-8',
      'm-9',
      'm-10',
      'm-11',
      'm-12',
      'm-13',
      'm-14',
      'm-15',
      'm-16',
    ],
  },
  {
    category: 'Margin Top',
    classes: [
      'mt-0',
      'mt-1',
      'mt-2',
      'mt-3',
      'mt-4',
      'mt-5',
      'mt-6',
      'mt-7',
      'mt-8',
      'mt-9',
      'mt-10',
      'mt-11',
      'mt-12',
      'mt-13',
      'mt-14',
      'mt-15',
      'mt-16',
    ],
  },
  {
    category: 'Margin Bottom',
    classes: [
      'mb-0',
      'mb-1',
      'mb-2',
      'mb-3',
      'mb-4',
      'mb-5',
      'mb-6',
      'mb-7',
      'mb-8',
      'mb-9',
      'mb-10',
      'mb-11',
      'mb-12',
      'mb-13',
      'mb-14',
      'mb-15',
      'mb-16',
    ],
  },
  {
    category: 'Margin Left',
    classes: [
      'ml-0',
      'ml-1',
      'ml-2',
      'ml-3',
      'ml-4',
      'ml-5',
      'ml-6',
      'ml-7',
      'ml-8',
      'ml-9',
      'ml-10',
      'ml-11',
      'ml-12',
      'ml-13',
      'ml-14',
      'ml-15',
      'ml-16',
    ],
  },
  {
    category: 'Margin Right',
    classes: [
      'mr-0',
      'mr-1',
      'mr-2',
      'mr-3',
      'mr-4',
      'mr-5',
      'mr-6',
      'mr-7',
      'mr-8',
      'mr-9',
      'mr-10',
      'mr-11',
      'mr-12',
      'mr-13',
      'mr-14',
      'mr-15',
      'mr-16',
    ],
  },
  {
    category: 'Text Align',
    classes: ['text-left', 'text-center', 'text-right'],
  },
  {
    category: 'Font Weight',
    classes: [
      'weight-light',
      'weight-regular',
      'weight-medium',
      'weight-semibold',
      'weight-bold',
    ],
  },
  {
    category: 'Font Style',
    classes: ['font-italic'],
  },
  {
    category: 'Font Family',
    classes: ['font-main'],
  },
  {
    category: 'Text Size',
    classes: [
      'text-xs',
      'text-sm',
      'text-md',
      'text-lg',
      'text-xl',
      'text-2xl',
    ],
  },
  {
    category: 'Line Height',
    classes: ['line-tight', 'line-base', 'line-loose'],
  },
  {
    category: 'Text Colors',
    classes: [
      't-c1',
      't-c2',
      't-c3',
      't-c4',
      't-c5',
      't-c6',
      't-c7',
      't-c8',
      't-c9',
      't-c10',
      't-c11',
      't-c12',
      't-c13',
      't-c14',
      't-c15',
      't-c16',
    ],
  },
  {
    category: 'Background Colors',
    classes: [
      'bg-c1',
      'bg-c2',
      'bg-c3',
      'bg-c4',
      'bg-c5',
      'bg-c6',
      'bg-c7',
      'bg-c8',
      'bg-c9',
      'bg-c10',
      'bg-c11',
      'bg-c12',
      'bg-c13',
      'bg-c14',
      'bg-c15',
      'bg-c16',
    ],
  },

  {
    category: 'Gradients',
    classes: ['grad1', 'grad2', 'grad2'],
  },
  {
    category: 'Background Image',

    classes: [
      'bg-image',

      /* repeat */
      'bg-repeat',
      'bg-no-repeat',
      'bg-repeat-x',
      'bg-repeat-y',

      /* size */
      'bg-cover',
      'bg-contain',
      'bg-auto',

      /* position */
      'bg-center',
      'bg-top',
      'bg-bottom',
      'bg-left',
      'bg-right',

      'bg-top-left',
      'bg-top-right',

      'bg-bottom-left',
      'bg-bottom-right',

      /* attachment */
      'bg-fixed',
      'bg-scroll',

      /* blend */
      'bg-blend-multiply',
      'bg-blend-overlay',
      'bg-blend-screen',

      /* utilities */
      'bg-parallax',
    ],
  },
  {
    category: 'Border',
    classes: ['border', 'border-dark', 'border-none'],
  },
  {
    category: 'Radius',
    classes: [
      'radius-sm',
      'radius-md',
      'radius-lg',
      'radius-xl',
      'radius-full',
    ],
  },
  {
    category: 'Shadow',
    classes: ['shadow-sm', 'shadow-md', 'shadow-lg'],
  },
  {
    category: 'Opacity',
    classes: [
      'opacity-100',
      'opacity-80',
      'opacity-70',
      'opacity-50',
      'opacity-30',
    ],
  },
  {
    category: 'Position',
    classes: ['pos-relative', 'pos-absolute', 'pos-fixed', 'pos-sticky'],
  },
  {
    category: 'Z-Index',
    classes: ['z-1', 'z-10', 'z-50', 'z-100', 'z-200'],
  },
  {
    category: 'Overflow',
    classes: ['overflow-hidden', 'overflow-auto'],
  },
  {
    category: 'Cursor',
    classes: ['cursor-pointer'],
  },
  {
    category: 'Spacing - Padding All',
    classes: ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-7', 'p-8'],
  },
];

const selectedClasses = new Set();

const classContainer = document.querySelector('[data-class-container]');
const output = document.querySelector('[data-output]');
const htmlOutput = document.querySelector('[data-html-output]');
const searchInput = document.querySelector('[data-search]');
const clearButtons = document.querySelectorAll('[data-clear]');
const copyButtons = document.querySelectorAll('[data-copy]');
const previewTarget = document.querySelector('[data-preview-target]');
const toast = document.querySelector('[data-toast]');

const htmlElementsContainer = document.querySelector('#htmlElements');

HTML_ELEMENTS.forEach((tag) => {
  const btn = document.createElement('button');

  btn.textContent = tag;

  btn.addEventListener('click', () => {
    selectedElement = tag;

    document
      .querySelectorAll('.class-grid-html button')
      .forEach((el) => el.classList.remove('active'));

    btn.classList.add('active');

    updateOutputs(false);
  });

  btn.classList.add('html-tag');

  htmlElementsContainer.appendChild(btn);

  if (tag === 'div') {
    btn.classList.add('active');
  }
});

function renderClasses(filter = '') {
  const normalizedFilter = filter.trim().toLowerCase();

  classContainer.innerHTML = CLASS_GROUPS.map((group) => {
    const classes = group.classes.filter(
      (className) =>
        className.toLowerCase().includes(normalizedFilter) ||
        group.category.toLowerCase().includes(normalizedFilter)
    );

    if (!classes.length) return '';

    const buttons = classes
      .map(
        (className) => `
      <button
        class="class-chip ${selectedClasses.has(className) ? 'is-active' : ''}"
        type="button"
        data-class="${className}"
        title="Agregar ${className}"
      >.${className}</button>
    `
      )
      .join('');

    return `
      <section class="class-section">
        <h2>${group.category}</h2>
        <div class="class-list">${buttons}</div>
      </section>
    `;
  }).join('');
}

function getClassString() {
  return Array.from(selectedClasses).join(' ');
}

function updateOutputs(copyToClipboard = true) {
  const classString = getClassString();

  output.value = classString;

  htmlOutput.value = `<${selectedElement} class="${classString}">  </${selectedElement}>`;

  previewTarget.className = `preview-target
  ${classString}`;

  if (copyToClipboard) {
    copyText(classString, false);
  }
}

async function copyText(text, showMessage = true, clearAfterCopy = true) {
  try {
    await navigator.clipboard.writeText(text);

    if (clearAfterCopy) {
      selectedClasses.clear();
      renderClasses();
      searchInput.value = '';
      updateOutputs(false);
    }

    if (showMessage) {
      showToast('Copiado al portapapeles');
    }
  } catch (error) {
    console.warn('No se pudo copiar automáticamente:', error);

    if (showMessage) {
      showToast('Classes copiadas');
    }
  }
}

function clearSelection() {
  selectedClasses.clear();
  renderClasses(searchInput.value);
  updateOutputs(true);
  showToast('Selección limpiada');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');

  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 1600);
}

classContainer.addEventListener('click', (event) => {
  const button = event.target.closest('[data-class]');
  if (!button) return;

  const className = button.dataset.class;

  if (selectedClasses.has(className)) {
    selectedClasses.delete(className);
  } else {
    selectedClasses.add(className);
  }

  renderClasses(searchInput.value);
  updateOutputs(true);
});

searchInput.addEventListener('input', (event) => {
  renderClasses(event.target.value);
});

clearButtons.forEach((button) => {
  button.addEventListener('click', clearSelection);
});

copyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const type = button.dataset.copy;

    if (type === 'classes') {
      copyText(output.value);
    }

    if (type === 'html') {
      copyText(htmlOutput.value);
    }
  });
});

const FRAMEWORK_CSS = `
:root {
  /* colors */
  --c1: #6155f5;
  --c2: #ff383c;
  --c3: #fe7700;
  --c4: #ffcc00;
  --c5: #31db5c;
  --c6: #00c8b3;
  --c7: #00c0e8;
  --c8: #0088ff;
  --c9: #cb30e0;
  --c10: #ff2d55;
  --c11: #141414;
  --c12: #ffffff;
  --c13: #e0e0e0;
  --c14: #d3d3d3;
  --c15: #646464;
  --c16: #000000;

  /* text colors */
  --ct1: #6155f5;
  --ct2: #ff383c;
  --ct3: #fe7700;
  --ct4: #ffcc00;
  --ct5: #31db5c;
  --ct6: #00c8b3;
  --ct7: #00c0e8;
  --ct8: #0088ff;
  --ct9: #cb30e0;
  --ct10: #ff2d55;
  --ct11: #141414;
  --ct12: #ffffff;
  --ct13: #e0e0e0;
  --ct14: #d3d3d3;
  --ct15: #646464;
  --ct16: #000000;

  /* colors gradient */
  --grad1: linear-gradient(
    90deg,
    rgba(42, 123, 155, 1) 0%,
    rgba(87, 199, 133, 1) 50%,
    rgba(237, 221, 83, 1) 100%
  );
  --grad2: linear-gradient(
    90deg,
    rgba(23, 23, 194, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  --grad3: radial-gradient(
    circle,
    rgba(251, 63, 176, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );

  /* borders */
  --border-main: #e4e7ec;
  --border-dark: #1f2328;

  /* shadows */
  --shadow-sm: 0 2px 8px rgba(38, 34, 56, 0.06);
  --shadow-md: 0 0px 28px #6c21aa57;
  --shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.171);

  /* font */
  --font-main: 'Mulish', sans-serif;

  /* container */
  --container: 70%;

  /* text sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-md: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.75rem;
  --text-2xl: 2.5rem;

  /* mobile text sizes */
  --text-xs-mobile: 0.75rem;
  --text-sm-mobile: 0.9rem;
  --text-md-mobile: 0.9375rem;
  --text-lg-mobile: 1rem;
  --text-xl-mobile: 1.2rem;
  --text-2xl-mobile: 2.5rem;

  /* line height */
  --line-base: 1.6;
  --line-tight: 1.2;
  --line-loose: 1.8;

  /* radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 999px;

  /* spacing */
  --space-0: 0px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 48px;
  --space-10: 56px;
  --space-11: 64px;
  --space-12: 72px;
  --space-13: 80px;
  --space-14: 92px;
  --space-15: 112px;
  --space-16: 130px;
}

/* display */
.d-block {
  display: block;
}
.d-inline {
  display: inline;
}
.d-inline-block {
  display: inline-block;
}
.d-flex {
  display: flex;
}
.d-grid {
  display: grid;
}
.d-none {
  display: none;
}

/* flex direction */
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}

/* justify content */
.justify-start {
  justify-content: flex-start;
}
.justify-center {
  justify-content: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}

/* align items */
.items-start {
  align-items: flex-start;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-stretch {
  align-items: stretch;
}

/* align self */
.self-start {
  align-self: flex-start;
}
.self-center {
  align-self: center;
}
.self-end {
  align-self: flex-end;
}

/* flex wrap */
.flex-wrap {
  flex-wrap: wrap;
}
.flex-nowrap {
  flex-wrap: nowrap;
}

/* gap */
.gap-1 {
  gap: var(--space-1);
}
.gap-2 {
  gap: var(--space-2);
}
.gap-3 {
  gap: var(--space-3);
}
.gap-4 {
  gap: var(--space-4);
}
.gap-5 {
  gap: var(--space-5);
}
.gap-6 {
  gap: var(--space-6);
}
.gap-7 {
  gap: var(--space-7);
}
.gap-8 {
  gap: var(--space-8);
}

/* grid columns */
.grid-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.grid-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}
.grid-8 {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}

/* width */
.w-auto {
  width: auto;
}
.w-full {
  width: 100%;
}

.w-screen {
  width: 100vw;
}

/* min / max width */
.min-w-0 {
  min-width: 0;
}
.max-w-full {
  max-width: 100%;
}

/* height */
.h-auto {
  height: auto;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}

/* container */
.container {
  width: min(100% - 32px, var(--container));
  margin-inline: auto;
}

/* text align */
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}

/* font weight */
.weight-light {
  font-weight: 300;
}
.weight-regular {
  font-weight: 400;
}
.weight-medium {
  font-weight: 500;
}
.weight-semibold {
  font-weight: 600;
}
.weight-bold {
  font-weight: 700;
}

/* font style */
.font-italic {
  font-style: italic;
}

/* font family */
.font-main {
  font-family: var(--font-main);
}

/* text size */
.text-xs {
  font-size: var(--text-xs);
}
.text-sm {
  font-size: var(--text-sm);
}
.text-md {
  font-size: var(--text-md);
}
.text-lg {
  font-size: var(--text-lg);
}
.text-xl {
  font-size: var(--text-xl);
}
.text-2xl {
  font-size: var(--text-2xl);
}

/* line height */
.line-tight {
  line-height: var(--line-tight);
}
.line-base {
  line-height: var(--line-base);
}
.line-loose {
  line-height: var(--line-loose);
}

/* text colors */
.t-c1 {
  color: var(--ct1);
}

.t-c2 {
  color: var(--ct2);
}

.t-c3 {
  color: var(--ct3);
}

.t-c4 {
  color: var(--ct4);
}

.t-c5 {
  color: var(--ct5);
}

.t-c6 {
  color: var(--ct6);
}

.t-c7 {
  color: var(--ct7);
}

.t-c8 {
  color: var(--ct8);
}

.t-c9 {
  color: var(--ct9);
}

.t-c10 {
  color: var(--ct10);
}

.t-c11 {
  color: var(--ct11);
}

.t-c12 {
  color: var(--ct12);
}

.t-c13 {
  color: var(--ct13);
}

.t-c14 {
  color: var(--ct14);
}

.t-c15 {
  color: var(--ct15);
}

.t-c16 {
  color: var(--ct16);
}

/* background colors */
.bg-c1 {
  background-color: var(--c1);
}

.bg-c2 {
  background-color: var(--c2);
}

.bg-c3 {
  background-color: var(--c3);
}

.bg-c4 {
  background-color: var(--c4);
}

.bg-c5 {
  background-color: var(--c5);
}

.bg-c6 {
  background-color: var(--c6);
}

.bg-c7 {
  background-color: var(--c7);
}

.bg-c8 {
  background-color: var(--c8);
}

.bg-c9 {
  background-color: var(--c9);
}

.bg-c10 {
  background-color: var(--c10);
}

.bg-c11 {
  background-color: var(--c11);
}

.bg-c12 {
  background-color: var(--c12);
}

.bg-c13 {
  background-color: var(--c13);
}

.bg-c14 {
  background-color: var(--c14);
}

.bg-c15 {
  background-color: var(--c15);
}

.bg-c16 {
  background-color: var(--c16);
}

/* gradient */
.grad1 {
  background: var(--grad1);
}

.grad2 {
  background: var(--grad2);
}

.grad3 {
  background: var(--grad3);
}

/* border */
.border {
  border: 1px solid var(--border-main);
}
.border-dark {
  border: 1px solid var(--border-dark);
}
.border-none {
  border: none;
}

/* radius */
.radius-sm {
  border-radius: var(--radius-sm);
}
.radius-md {
  border-radius: var(--radius-md);
}
.radius-lg {
  border-radius: var(--radius-lg);
}
.radius-xl {
  border-radius: var(--radius-xl);
}
.radius-full {
  border-radius: var(--radius-full);
}

/* shadow */
.shadow-sm {
  box-shadow: var(--shadow-sm);
}
.shadow-md {
  box-shadow: var(--shadow-md);
}
.shadow-lg {
  box-shadow: var(--shadow-lg);
}

/* opacity */
.opacity-100 {
  opacity: 1;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-70 {
  opacity: 0.7;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-30 {
  opacity: 0.3;
}

/* position */
.pos-relative {
  position: relative;
}
.pos-absolute {
  position: absolute;
}
.pos-fixed {
  position: fixed;
}
.pos-sticky {
  position: sticky;
}

/* z-index */
.z-1 {
  z-index: 1;
}
.z-10 {
  z-index: 10;
}
.z-50 {
  z-index: 50;
}
.z-100 {
  z-index: 100;
}
.z-200 {
  z-index: 200;
}

/* overflow */
.overflow-hidden {
  overflow: hidden;
}
.overflow-auto {
  overflow: auto;
}

/* cursor */
.cursor-pointer {
  cursor: pointer;
}

/* spacing - padding all */
.p-0 {
  padding: var(--space-0);
}
.p-1 {
  padding: var(--space-1);
}
.p-2 {
  padding: var(--space-2);
}
.p-3 {
  padding: var(--space-3);
}
.p-4 {
  padding: var(--space-4);
}
.p-5 {
  padding: var(--space-5);
}
.p-6 {
  padding: var(--space-6);
}
.p-7 {
  padding: var(--space-7);
}
.p-8 {
  padding: var(--space-8);
}

.p-9 {
  padding: var(--space-9);
}
.p-10 {
  padding: var(--space-10);
}
.p-11 {
  padding: var(--space-11);
}
.p-12 {
  padding: var(--space-12);
}
.p-13 {
  padding: var(--space-13);
}
.p-14 {
  padding: var(--space-14);
}
.p-15 {
  padding: var(--space-15);
}
.p-16 {
  padding: var(--space-16);
}

/* padding top */
.pt-0 {
  padding-top: var(--space-0);
}
.pt-1 {
  padding-top: var(--space-1);
}
.pt-2 {
  padding-top: var(--space-2);
}
.pt-3 {
  padding-top: var(--space-3);
}
.pt-4 {
  padding-top: var(--space-4);
}
.pt-5 {
  padding-top: var(--space-5);
}
.pt-6 {
  padding-top: var(--space-6);
}
.pt-7 {
  padding-top: var(--space-7);
}
.pt-8 {
  padding-top: var(--space-8);
}
.pt-9 {
  padding-top: var(--space-9);
}
.pt-10 {
  padding-top: var(--space-10);
}

.pt-11 {
  padding-top: var(--space-11);
}

.pt-12 {
  padding-top: var(--space-12);
}

.pt-13 {
  padding-top: var(--space-13);
}

.pt-14 {
  padding-top: var(--space-14);
}

.pt-15 {
  padding-top: var(--space-15);
}

.pt-16 {
  padding-top: var(--space-16);
}

/* padding bottom */
.pb-0 {
  padding-bottom: var(--space-0);
}
.pb-1 {
  padding-bottom: var(--space-1);
}
.pb-2 {
  padding-bottom: var(--space-2);
}
.pb-3 {
  padding-bottom: var(--space-3);
}
.pb-4 {
  padding-bottom: var(--space-4);
}
.pb-5 {
  padding-bottom: var(--space-5);
}
.pb-6 {
  padding-bottom: var(--space-6);
}
.pb-7 {
  padding-bottom: var(--space-7);
}
.pb-8 {
  padding-bottom: var(--space-8);
}
.pb-9 {
  padding-bottom: var(--space-9);
}
.pb-10 {
  padding-bottom: var(--space-10);
}

.pb-11 {
  padding-bottom: var(--space-11);
}

.pb-12 {
  padding-bottom: var(--space-12);
}

.pb-13 {
  padding-bottom: var(--space-13);
}

.pb-14 {
  padding-bottom: var(--space-14);
}

.pb-15 {
  padding-bottom: var(--space-15);
}

.pb-16 {
  padding-bottom: var(--space-16);
}

/* padding left */
.pl-0 {
  padding-left: var(--space-0);
}
.pl-1 {
  padding-left: var(--space-1);
}
.pl-2 {
  padding-left: var(--space-2);
}
.pl-3 {
  padding-left: var(--space-3);
}
.pl-4 {
  padding-left: var(--space-4);
}
.pl-5 {
  padding-left: var(--space-5);
}
.pl-6 {
  padding-left: var(--space-6);
}
.pl-7 {
  padding-left: var(--space-7);
}
.pl-8 {
  padding-left: var(--space-8);
}

.pl-9 {
  padding-left: var(--space-9);
}

.pl-10 {
  padding-left: var(--space-10);
}

.pl-11 {
  padding-left: var(--space-11);
}

.pl-12 {
  padding-left: var(--space-12);
}

.pl-13 {
  padding-left: var(--space-13);
}

.pl-14 {
  padding-left: var(--space-14);
}

.pl-15 {
  padding-left: var(--space-15);
}

.pl-16 {
  padding-left: var(--space-16);
}

/* padding right */
.pr-0 {
  padding-right: var(--space-0);
}
.pr-1 {
  padding-right: var(--space-1);
}
.pr-2 {
  padding-right: var(--space-2);
}
.pr-3 {
  padding-right: var(--space-3);
}
.pr-4 {
  padding-right: var(--space-4);
}
.pr-5 {
  padding-right: var(--space-5);
}
.pr-6 {
  padding-right: var(--space-6);
}
.pr-7 {
  padding-right: var(--space-7);
}
.pr-8 {
  padding-right: var(--space-8);
}

.pr-8 {
  padding-right: var(--space-8);
}

.pr-9 {
  padding-right: var(--space-9);
}

.pr-10 {
  padding-right: var(--space-10);
}

.pr-11 {
  padding-right: var(--space-11);
}

.pr-12 {
  padding-right: var(--space-12);
}

.pr-13 {
  padding-right: var(--space-13);
}

.pr-14 {
  padding-right: var(--space-14);
}

.pr-15 {
  padding-right: var(--space-15);
}

.pr-16 {
  padding-right: var(--space-16);
}

/* margin all */
.m-0 {
  margin: var(--space-0);
}
.m-1 {
  margin: var(--space-1);
}
.m-2 {
  margin: var(--space-2);
}
.m-3 {
  margin: var(--space-3);
}
.m-4 {
  margin: var(--space-4);
}
.m-5 {
  margin: var(--space-5);
}
.m-6 {
  margin: var(--space-6);
}
.m-7 {
  margin: var(--space-7);
}
.m-8 {
  margin: var(--space-8);
}

.m-9 {
  margin: var(--space-9);
}

.m-10 {
  margin: var(--space-10);
}

.m-11 {
  margin: var(--space-11);
}

.m-12 {
  margin: var(--space-12);
}

.m-13 {
  margin: var(--space-13);
}

.m-14 {
  margin: var(--space-14);
}

.m-15 {
  margin: var(--space-15);
}

.m-16 {
  margin: var(--space-16);
}
/* margin x auto */
.mx-auto {
  margin-inline: auto;
}

/* margin top */
.mt-0 {
  margin-top: var(--space-0);
}
.mt-1 {
  margin-top: var(--space-1);
}
.mt-2 {
  margin-top: var(--space-2);
}
.mt-3 {
  margin-top: var(--space-3);
}
.mt-4 {
  margin-top: var(--space-4);
}
.mt-5 {
  margin-top: var(--space-5);
}
.mt-6 {
  margin-top: var(--space-6);
}
.mt-7 {
  margin-top: var(--space-7);
}
.mt-8 {
  margin-top: var(--space-8);
}
.mt-9 {
  margin-top: var(--space-9);
}
.mt-10 {
  margin-top: var(--space-10);
}

.mt-11 {
  margin-top: var(--space-11);
}

.mt-12 {
  margin-top: var(--space-12);
}

.mt-13 {
  margin-top: var(--space-13);
}

.mt-14 {
  margin-top: var(--space-14);
}

.mt-15 {
  margin-top: var(--space-15);
}

.mt-16 {
  margin-top: var(--space-16);
}

/* margin bottom */
.mb-0 {
  margin-bottom: var(--space-0);
}
.mb-1 {
  margin-bottom: var(--space-1);
}
.mb-2 {
  margin-bottom: var(--space-2);
}
.mb-3 {
  margin-bottom: var(--space-3);
}
.mb-4 {
  margin-bottom: var(--space-4);
}
.mb-5 {
  margin-bottom: var(--space-5);
}
.mb-6 {
  margin-bottom: var(--space-6);
}
.mb-7 {
  margin-bottom: var(--space-7);
}
.mb-8 {
  margin-bottom: var(--space-8);
}
.mb-9 {
  margin-bottom: var(--space-9);
}
.mb-10 {
  margin-bottom: var(--space-10);
}

.mb-11 {
  margin-bottom: var(--space-11);
}

.mb-12 {
  margin-bottom: var(--space-12);
}

.mb-13 {
  margin-bottom: var(--space-13);
}

.mb-14 {
  margin-bottom: var(--space-14);
}

.mb-15 {
  margin-bottom: var(--space-15);
}

.mb-16 {
  margin-bottom: var(--space-16);
}

/* margin left */
.ml-0 {
  margin-left: var(--space-0);
}
.ml-1 {
  margin-left: var(--space-1);
}
.ml-2 {
  margin-left: var(--space-2);
}
.ml-3 {
  margin-left: var(--space-3);
}
.ml-4 {
  margin-left: var(--space-4);
}
.ml-5 {
  margin-left: var(--space-5);
}

.ml-6 {
  margin-left: var(--space-6);
}

.ml-7 {
  margin-left: var(--space-7);
}

.ml-8 {
  margin-left: var(--space-8);
}

.ml-9 {
  margin-left: var(--space-9);
}

.ml-10 {
  margin-left: var(--space-10);
}

.ml-11 {
  margin-left: var(--space-11);
}

.ml-12 {
  margin-left: var(--space-12);
}

.ml-13 {
  margin-left: var(--space-13);
}

.ml-14 {
  margin-left: var(--space-14);
}

.ml-15 {
  margin-left: var(--space-15);
}

.ml-16 {
  margin-left: var(--space-16);
}

/* margin right */
.mr-0 {
  margin-right: var(--space-0);
}
.mr-1 {
  margin-right: var(--space-1);
}
.mr-2 {
  margin-right: var(--space-2);
}
.mr-3 {
  margin-right: var(--space-3);
}
.mr-4 {
  margin-right: var(--space-4);
}
.mr-5 {
  margin-right: var(--space-5);
}

.mr-6 {
  margin-right: var(--space-6);
}

.mr-7 {
  margin-right: var(--space-7);
}

.mr-8 {
  margin-right: var(--space-8);
}

.mr-9 {
  margin-right: var(--space-9);
}

.mr-10 {
  margin-right: var(--space-10);
}

.mr-11 {
  margin-right: var(--space-11);
}

.mr-12 {
  margin-right: var(--space-12);
}

.mr-13 {
  margin-right: var(--space-13);
}

.mr-14 {
  margin-right: var(--space-14);
}

.mr-15 {
  margin-right: var(--space-15);
}

.mr-16 {
  margin-right: var(--space-16);
}

@media (max-width: 1200px) {
  .desktop-grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .desktop-grid-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 992px) {
  .tablet-flex-col {
    flex-direction: column;
  }

  .tablet-grid-2,
  .tablet-grid-3,
  .tablet-grid-4,
  .tablet-grid-6,
  .tablet-grid-8 {
    grid-template-columns: 1fr;
  }

  .tablet-w-full {
    width: 100%;
  }

  .container {
    width: min(100% - 24px, var(--container));
  }

  .text-xs {
    font-size: var(--text-xs-mobile);
  }
  .text-sm {
    font-size: var(--text-sm-mobile);
  }
  .text-md {
    font-size: var(--text-md-mobile);
  }
  .text-lg {
    font-size: var(--text-lg-mobile);
  }
  .text-xl {
    font-size: var(--text-xl-mobile);
  }
  .text-2xl {
    font-size: var(--text-2xl-mobile);
  }
}

@media (max-width: 768px) {
  .mobile-flex-col {
    flex-direction: column;
  }

  .mobile-grid {
    grid-template-columns: 1fr;
  }

  .mobile-w-full {
    width: 100%;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--font-main);
  color: var(--text-main);
  background: var(--bg-main);
  line-height: var(--line-base);
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

`;

const copyCssBtn = document.querySelector('#copyCssBtn');

copyCssBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(FRAMEWORK_CSS);
    showToast('Framework copiado');
  } catch (error) {
    console.log(error);
  }
});

const HTML_HEADER = `

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Class Picker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&"
    />
    <style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' -25, 'opsz' 20;
      }
    </style>
  </head>
  <body>

    <script src=""></script>
  </body>
 `;

const copyHtmlBtn = document.querySelector('#copyHtmlBtn');

copyHtmlBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(HTML_HEADER);
    showToast('Html header copiado');
  } catch (error) {
    console.log(error);
  }
});

renderClasses();
updateOutputs(false);

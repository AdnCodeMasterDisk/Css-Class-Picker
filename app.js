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
      'w-half',
      'w-third',
      'w-two-third',
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
    classes: ['flex-row', 'flex-col'],
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
    classes: ['grid-1', 'grid-2', 'grid-3', 'grid-4', 'grid-6', 'grid-8'],
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
    ],
  },
  {
    category: 'Margin All',
    classes: ['m-0', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6', 'm-7', 'm-8'],
  },
  {
    category: 'Margin X Auto',
    classes: ['mx-auto'],
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
    ],
  },
  {
    category: 'Margin Left',
    classes: ['ml-0', 'ml-1', 'ml-2', 'ml-3', 'ml-4', 'ml-5'],
  },
  {
    category: 'Margin Right',
    classes: ['mr-0', 'mr-1', 'mr-2', 'mr-3', 'mr-4', 'mr-5'],
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
      'text-main',
      'text-light',
      'text-accent',
      'text-muted',
      'text-grey',
    ],
  },
  {
    category: 'Background Colors',
    classes: [
      'bg-primary',
      'bg-dark',
      'bg-accent',
      'bg-soft',
      'bg-main',
      'bg-black',
      'bg-white',
    ],
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
  --color-primary: #2fb868;
  --color-dark: #070707;
  --color-accent: #494a7d;
  --color-soft: #aeafc5;

  /* text colors */
  --text-main: #1c1c1c;
  --text-light: #4d5aee;
  --text-accent: #ff3030;
  --text-muted: #29d506;
  --text-grey: #a7a7a7;

  /* backgrounds */
  --bg-main: #ffffff;
  --bg-soft: #2f93f0;
  --bg-dark: #101114;

  /* borders */
  --border-main: #e4e7ec;
  --border-dark: #1f2328;

  /* shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 0px 28px #4caaf665;
  --shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.12);

  /* font */
  --font-main: 'Mulish', sans-serif;

  /* container */
  --container: 70rem;

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
  --space-0: 0;
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
}

/* css compress */
.bg-image{background-position:center;background-size:cover;background-repeat:no-repeat}.bg-repeat{background-repeat:repeat}.bg-no-repeat{background-repeat:no-repeat}.bg-repeat-x{background-repeat:repeat-x}.bg-repeat-y{background-repeat:repeat-y}.bg-cover{background-size:cover}.bg-contain{background-size:contain}.bg-auto{background-size:auto}.bg-center{background-position:center}.bg-top{background-position:top}.bg-bottom{background-position:bottom}.bg-left{background-position:left}.bg-right{background-position:right}.bg-top-left{background-position:left top}.bg-top-right{background-position:right top}.bg-bottom-left{background-position:left bottom}.bg-bottom-right{background-position:right bottom}.bg-fixed{background-attachment:fixed}.bg-scroll{background-attachment:scroll}.bg-blend-multiply{background-blend-mode:multiply}.bg-blend-overlay{background-blend-mode:overlay}.bg-blend-screen{background-blend-mode:screen}.bg-parallax{background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}
.d-block{display:block}.d-inline{display:inline}.d-inline-block{display:inline-block}.d-flex{display:flex}.d-grid{display:grid}.d-none{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.items-start{align-items:flex-start}.items-center{align-items:center}.items-end{align-items:flex-end}.items-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-center{align-self:center}.self-end{align-self:flex-end}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.gap-1{gap:var(--space-1)}.gap-2{gap:var(--space-2)}.gap-3{gap:var(--space-3)}.gap-4{gap:var(--space-4)}.gap-5{gap:var(--space-5)}.gap-6{gap:var(--space-6)}.gap-7{gap:var(--space-7)}.gap-8{gap:var(--space-8)}.grid-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-8{grid-template-columns:repeat(8,minmax(0,1fr))}.w-auto{width:auto}.w-full{width:100%}.w-half{width:50%}.w-third{width:33.333%}.w-two-third{width:66.666%}.w-screen{width:100vw}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.min-w-0{min-width:0}.max-w-full{max-width:100%}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.container{width:min(100% - 32px,var(--container));margin-inline:auto}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.weight-light{font-weight:300}.weight-regular{font-weight:400}.weight-medium{font-weight:500}.weight-semibold{font-weight:600}.weight-bold{font-weight:700}.font-italic{font-style:italic}.font-main{font-family:var(--font-main)}.text-xs{font-size:var(--text-xs)}.text-sm{font-size:var(--text-sm)}.text-md{font-size:var(--text-md)}.text-lg{font-size:var(--text-lg)}.text-xl{font-size:var(--text-xl)}.text-2xl{font-size:var(--text-2xl)}.line-tight{line-height:var(--line-tight)}.line-base{line-height:var(--line-base)}.line-loose{line-height:var(--line-loose)}.text-main{color:var(--text-main)}.text-light{color:var(--text-light)}.text-accent{color:var(--text-accent)}.text-muted{color:var(--text-muted)}.text-grey{color:var(--text-grey)}.bg-primary{background-color:var(--color-primary)}.bg-dark{background-color:var(--color-dark)}.bg-accent{background-color:var(--color-accent)}.bg-soft{background-color:var(--bg-soft)}.bg-main{background-color:var(--bg-main)}.bg-black{background-color:#000}.bg-white{background-color:#fff}.border{border:1px solid var(--border-main)}.border-dark{border:1px solid var(--border-dark)}.border-none{border:none}.radius-sm{border-radius:var(--radius-sm)}.radius-md{border-radius:var(--radius-md)}.radius-lg{border-radius:var(--radius-lg)}.radius-xl{border-radius:var(--radius-xl)}.radius-full{border-radius:var(--radius-full)}.shadow-sm{box-shadow:var(--shadow-sm)}.shadow-md{box-shadow:var(--shadow-md)}.shadow-lg{box-shadow:var(--shadow-lg)}.opacity-100{opacity:1}.opacity-80{opacity:.8}.opacity-70{opacity:.7}.opacity-50{opacity:.5}.opacity-30{opacity:.3}.pos-relative{position:relative}.pos-absolute{position:absolute}.pos-fixed{position:fixed}.pos-sticky{position:sticky}.z-1{z-index:1}.z-10{z-index:10}.z-50{z-index:50}.z-100{z-index:100}.z-200{z-index:200}.overflow-hidden{overflow:hidden}.overflow-auto{overflow:auto}.cursor-pointer{cursor:pointer}.p-0{padding:var(--space-0)}.p-1{padding:var(--space-1)}.p-2{padding:var(--space-2)}.p-3{padding:var(--space-3)}.p-4{padding:var(--space-4)}.p-5{padding:var(--space-5)}.p-6{padding:var(--space-6)}.p-7{padding:var(--space-7)}.p-8{padding:var(--space-8)}.px-0{padding-inline:var(--space-0)}.px-1{padding-inline:var(--space-1)}.px-2{padding-inline:var(--space-2)}.px-3{padding-inline:var(--space-3)}.px-4{padding-inline:var(--space-4)}.px-5{padding-inline:var(--space-5)}.px-6{padding-inline:var(--space-6)}.px-7{padding-inline:var(--space-7)}.px-8{padding-inline:var(--space-8)}.py-0{padding-block:var(--space-0)}.py-1{padding-block:var(--space-1)}.py-2{padding-block:var(--space-2)}.py-3{padding-block:var(--space-3)}.py-4{padding-block:var(--space-4)}.py-5{padding-block:var(--space-5)}.py-6{padding-block:var(--space-6)}.py-7{padding-block:var(--space-7)}.py-8{padding-block:var(--space-8)}.pt-0{padding-top:var(--space-0)}.pt-1{padding-top:var(--space-1)}.pt-2{padding-top:var(--space-2)}.pt-3{padding-top:var(--space-3)}.pt-4{padding-top:var(--space-4)}.pt-5{padding-top:var(--space-5)}.pt-6{padding-top:var(--space-6)}.pt-7{padding-top:var(--space-7)}.pt-8{padding-top:var(--space-8)}.pt-9{padding-top:var(--space-9)}.pt-10{padding-top:var(--space-10)}.pb-0{padding-bottom:var(--space-0)}.pb-1{padding-bottom:var(--space-1)}.pb-2{padding-bottom:var(--space-2)}.pb-3{padding-bottom:var(--space-3)}.pb-4{padding-bottom:var(--space-4)}.pb-5{padding-bottom:var(--space-5)}.pb-6{padding-bottom:var(--space-6)}.pb-7{padding-bottom:var(--space-7)}.pb-8{padding-bottom:var(--space-8)}.pb-9{padding-bottom:var(--space-9)}.pb-10{padding-bottom:var(--space-10)}.pl-0{padding-left:var(--space-0)}.pl-1{padding-left:var(--space-1)}.pl-2{padding-left:var(--space-2)}.pl-3{padding-left:var(--space-3)}.pl-4{padding-left:var(--space-4)}.pl-5{padding-left:var(--space-5)}.pl-6{padding-left:var(--space-6)}.pl-7{padding-left:var(--space-7)}.pl-8{padding-left:var(--space-8)}.pr-0{padding-right:var(--space-0)}.pr-1{padding-right:var(--space-1)}.pr-2{padding-right:var(--space-2)}.pr-3{padding-right:var(--space-3)}.pr-4{padding-right:var(--space-4)}.pr-5{padding-right:var(--space-5)}.pr-6{padding-right:var(--space-6)}.pr-7{padding-right:var(--space-7)}.pr-8{padding-right:var(--space-8)}.m-0{margin:var(--space-0)}.m-1{margin:var(--space-1)}.m-2{margin:var(--space-2)}.m-3{margin:var(--space-3)}.m-4{margin:var(--space-4)}.m-5{margin:var(--space-5)}.m-6{margin:var(--space-6)}.m-7{margin:var(--space-7)}.m-8{margin:var(--space-8)}.mx-auto{margin-inline:auto}.mt-0{margin-top:var(--space-0)}.mt-1{margin-top:var(--space-1)}.mt-2{margin-top:var(--space-2)}.mt-3{margin-top:var(--space-3)}.mt-4{margin-top:var(--space-4)}.mt-5{margin-top:var(--space-5)}.mt-6{margin-top:var(--space-6)}.mt-7{margin-top:var(--space-7)}.mt-8{margin-top:var(--space-8)}.mt-9{margin-top:var(--space-9)}.mt-10{margin-top:var(--space-10)}.mb-0{margin-bottom:var(--space-0)}.mb-1{margin-bottom:var(--space-1)}.mb-2{margin-bottom:var(--space-2)}.mb-3{margin-bottom:var(--space-3)}.mb-4{margin-bottom:var(--space-4)}.mb-5{margin-bottom:var(--space-5)}.mb-6{margin-bottom:var(--space-6)}.mb-7{margin-bottom:var(--space-7)}.mb-8{margin-bottom:var(--space-8)}.mb-9{margin-bottom:var(--space-9)}.mb-10{margin-bottom:var(--space-10)}.ml-0{margin-left:var(--space-0)}.ml-1{margin-left:var(--space-1)}.ml-2{margin-left:var(--space-2)}.ml-3{margin-left:var(--space-3)}.ml-4{margin-left:var(--space-4)}.ml-5{margin-left:var(--space-5)}.mr-0{margin-right:var(--space-0)}.mr-1{margin-right:var(--space-1)}.mr-2{margin-right:var(--space-2)}.mr-3{margin-right:var(--space-3)}.mr-4{margin-right:var(--space-4)}.mr-5{margin-right:var(--space-5)}@media (max-width: 1200px){.desktop-grid-4{grid-template-columns:repeat(2,minmax(0,1fr))}.desktop-grid-3{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (max-width: 992px){.tablet-flex-col{flex-direction:column}.tablet-grid-2,.tablet-grid-3,.tablet-grid-4,.tablet-grid-6,.tablet-grid-8{grid-template-columns:1fr}.tablet-w-full{width:100%}.container{width:min(100% - 24px,var(--container))}.text-xs{font-size:var(--text-xs-mobile)}.text-sm{font-size:var(--text-sm-mobile)}.text-md{font-size:var(--text-md-mobile)}.text-lg{font-size:var(--text-lg-mobile)}.text-xl{font-size:var(--text-xl-mobile)}.text-2xl{font-size:var(--text-2xl-mobile)}}@media (max-width: 768px){.w-10{width:100%}.w-20{width:100%}.w-30{width:100%}.w-40{width:100%}.w-50{width:100%}.w-60{width:100%}.w-70{width:100%}.w-80{width:100%}.w-90{width:100%}.mobile-flex-col{flex-direction:column}.mobile-grid-2,.mobile-grid-3,.mobile-grid-4,.mobile-grid-6,.mobile-grid-8{grid-template-columns:1fr}.mobile-w-full{width:100%}}*,::before,::after{box-sizing:border-box}html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}body{margin:0;padding:0;font-family:var(--font-main);color:var(--text-main);background:var(--bg-main);line-height:var(--line-base)}img,picture,video,canvas,svg{display:block;max-width:100%}button,input,textarea,select{font:inherit}a{color:inherit;text-decoration:none}
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

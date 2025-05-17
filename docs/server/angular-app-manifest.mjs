
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-Mexicesta-landingpage',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-Mexicesta-landingpage"
  }
],
  assets: {
    'index.csr.html': {size: 3857, hash: 'a0f8cea1fbc6f00d9834a5d24c990d3bb6d4c6330adfd7fb7fdec2f621cfb1bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2356, hash: '7077cafd1a64c29142dbdfa17e7befac5c19058fd79ad9e667a664e36e1ff55b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29891, hash: 'e08a1b33a7d8580b48342f73a1bc7261ea2751d1c873391f3d0407d130fa1031', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HDHY74NI.css': {size: 14854, hash: 'Q66V01hdTxI', text: () => import('./assets-chunks/styles-HDHY74NI_css.mjs').then(m => m.default)}
  },
};

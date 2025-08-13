import { _ as _export_sfc } from './server.mjs';
import { v as vueExports } from '../runtime.mjs';
import { d as ssrRenderAttrs_1, m as ssrRenderSlot_1 } from '../routes/renderer.mjs';
import 'unhead';
import '@unhead/shared';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@vue/compiler-dom';
import '@vue/runtime-dom';
import '@vue/shared';
import 'nitropack/dist/runtime/plugin';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'shiki/core';
import '@shikijs/transformers';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import '@vue/compiler-ssr';
import 'node:stream';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ul${ssrRenderAttrs_1(_attrs)}>`);
  ssrRenderSlot_1(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.8.3_magicast@0.3.5_rollup@4.22.5_webpack-sources@3.2.3/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseUl = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ProseUl as default };
//# sourceMappingURL=ProseUl-BdzI-BsS.mjs.map

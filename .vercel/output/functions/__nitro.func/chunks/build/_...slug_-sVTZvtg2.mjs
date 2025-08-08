import { _ as _sfc_main$1 } from './NuxtImg-BfpTJSde.mjs';
import _sfc_main$2 from './ContentRenderer-ByeK65gK.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Rx7tK5LK.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { CalendarIcon } from 'lucide-vue-next';
import { u as useI18n, a as useLocalePath, b as useRoute } from './server.mjs';
import { u as useAsyncData, q as queryContent } from './query-CyEY8F-w.mjs';
import { u as useHead } from './index-BR4-xsG4.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
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
import './ContentRendererMarkdown-BN7a97ly.mjs';
import 'property-information';
import './node-04k6j4dz.mjs';
import './preview-BG8vzoGF.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, locale } = useI18n();
    const localePath = useLocalePath();
    const { path } = useRoute();
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `content-${path}`,
      () => queryContent(path).findOne()
    )), __temp = await __temp, __restore(), __temp);
    useHead(() => ({
      title: post.value ? `${post.value.title} | Merouane Amqor` : t("blog.post_not_found"),
      meta: [
        { name: "description", content: post.value ? post.value.excerpt : t("blog.post_not_found_desc") }
      ]
    }));
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString(locale.value === "fr" ? "fr-FR" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-16" }, _attrs))}><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">`);
      if (unref(post)) {
        _push(`<article class="prose prose-lg max-w-none"><h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">${ssrInterpolate(unref(post).title)}</h1><div class="flex items-center text-sm text-gray-500 mb-8">`);
        _push(ssrRenderComponent(unref(CalendarIcon), { class: "w-4 h-4 mr-2" }, null, _parent));
        _push(` ${ssrInterpolate(formatDate(unref(post).date))}</div>`);
        if (unref(post).coverImage) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: unref(post).coverImage,
            alt: unref(post).title,
            width: "800",
            height: "400",
            format: "webp",
            loading: "eager",
            class: "w-full h-64 object-cover rounded-lg mb-8"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(post) }, null, _parent));
        _push(`</article>`);
      } else {
        _push(`<div class="text-center py-16"><h2 class="text-2xl font-semibold text-gray-900">${ssrInterpolate(unref(t)("blog.post_not_found"))}</h2><p class="mt-2 text-gray-600">${ssrInterpolate(unref(t)("blog.post_not_found_desc"))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/blog"),
          class: "mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("blog.back_to_blog"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("blog.back_to_blog")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-sVTZvtg2.mjs.map

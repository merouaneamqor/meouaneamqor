import { _ as __nuxt_component_0 } from './nuxt-link-Rx7tK5LK.mjs';
import { useSSRContext, defineComponent, withAsyncContext, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './preview-BG8vzoGF.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, locale } = useI18n();
    useHead({
      title: () => locale.value === "fr" ? "Blog | Merouane Amqor" : "Blog | Merouane Amqor",
      meta: [
        { name: "description", content: t("blog.seo_description") }
      ]
    });
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "posts",
      () => queryContent("/blog").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const selectedCategory = ref("all");
    const newsletterEmail = ref("");
    const isLoading = ref(false);
    const hasMorePosts = ref(false);
    const isSubscribing = ref(false);
    const subscriptionSuccess = ref(false);
    const categories = computed(() => {
      if (!posts.value)
        return [];
      const cats = [...new Set(posts.value.map((post) => post.category).filter(Boolean))];
      return cats.sort();
    });
    const totalReadTime = computed(() => {
      if (!posts.value)
        return 0;
      return posts.value.reduce((total, post) => {
        var _a;
        return total + (post.readTime || calculateReadTime((_a = post.body) == null ? void 0 : _a.children) || 5);
      }, 0);
    });
    const filteredPosts = computed(() => {
      if (!posts.value)
        return [];
      if (selectedCategory.value === "all") {
        return posts.value;
      }
      return posts.value.filter((post) => post.category === selectedCategory.value);
    });
    const formatDate = (dateString) => {
      if (!dateString)
        return t("blog.recent");
      const date = new Date(dateString);
      return date.toLocaleDateString(locale.value === "fr" ? "fr-FR" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const calculateReadTime = (content) => {
      if (!content)
        return 5;
      const text = JSON.stringify(content);
      const wordCount = text.split(/\s+/).length;
      return Math.ceil(wordCount / 200);
    };
    const generateExcerpt = (content) => {
      if (!content)
        return t("blog.read_more_prompt");
      const text = JSON.stringify(content);
      return text.substring(0, 150) + "...";
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" }, _attrs))} data-v-a7a130ec><div class="absolute inset-0 opacity-5" data-v-a7a130ec><div class="blog-grid-pattern" data-v-a7a130ec></div></div><div class="absolute inset-0 overflow-hidden" data-v-a7a130ec><div class="blog-element element-1" data-v-a7a130ec></div><div class="blog-element element-2" data-v-a7a130ec></div><div class="blog-element element-3" data-v-a7a130ec></div><div class="blog-element element-4" data-v-a7a130ec></div></div><div class="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10" data-v-a7a130ec><div class="text-center mb-16" data-v-a7a130ec><div class="inline-flex items-center gap-3 mb-6" data-v-a7a130ec><div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center" data-v-a7a130ec><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a7a130ec><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-v-a7a130ec></path></svg></div><h1 class="text-4xl lg:text-5xl font-bold text-white professional-glow" data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.title"))}</h1></div><div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6" data-v-a7a130ec></div><p class="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8" data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.subtitle"))}</p><div class="flex flex-wrap justify-center gap-6 mb-12" data-v-a7a130ec><div class="blog-stat" data-v-a7a130ec><div class="stat-number" data-v-a7a130ec>${ssrInterpolate(((_a = unref(posts)) == null ? void 0 : _a.length) || 0)}</div><div class="stat-label" data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.articles"))}</div></div><div class="blog-stat" data-v-a7a130ec><div class="stat-number" data-v-a7a130ec>${ssrInterpolate(((_b = categories.value) == null ? void 0 : _b.length) || 0)}</div><div class="stat-label" data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.categories"))}</div></div><div class="blog-stat" data-v-a7a130ec><div class="stat-number" data-v-a7a130ec>${ssrInterpolate(totalReadTime.value)}</div><div class="stat-label" data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.min_read"))}</div></div></div><div class="flex flex-wrap justify-center gap-3 mb-12" data-v-a7a130ec><button class="${ssrRenderClass(["category-filter", selectedCategory.value === "all" ? "active" : ""])}" data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.all_posts"))}</button><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<button class="${ssrRenderClass(["category-filter", selectedCategory.value === category ? "active" : ""])}" data-v-a7a130ec>${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-v-a7a130ec><!--[-->`);
      ssrRenderList(filteredPosts.value, (post) => {
        var _a2, _b2;
        _push(`<article class="blog-post-card group" data-v-a7a130ec><div class="post-image-container" data-v-a7a130ec><img${ssrRenderAttr("src", post.image || `https://placehold.co/400x200?text=${encodeURIComponent(post.title || "No Title")}`)}${ssrRenderAttr("alt", post.title || "No Title")} class="post-image" data-v-a7a130ec><div class="post-overlay" data-v-a7a130ec><div class="post-category-badge" data-v-a7a130ec>${ssrInterpolate(post.category || unref(t)("blog.general"))}</div></div></div><div class="post-content" data-v-a7a130ec><div class="post-meta" data-v-a7a130ec><div class="flex items-center gap-2 text-xs text-slate-400" data-v-a7a130ec><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a7a130ec><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-a7a130ec></path></svg><span data-v-a7a130ec>${ssrInterpolate(formatDate(post.date || post.createdAt))}</span></div><div class="flex items-center gap-2 text-xs text-slate-400" data-v-a7a130ec><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a7a130ec><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-a7a130ec></path></svg><span data-v-a7a130ec>${ssrInterpolate(post.readTime || calculateReadTime((_a2 = post.body) == null ? void 0 : _a2.children))} ${ssrInterpolate(unref(t)("blog.min_read_short"))}</span></div></div><h2 class="post-title" data-v-a7a130ec>${ssrInterpolate(post.title)}</h2><p class="post-excerpt" data-v-a7a130ec>${ssrInterpolate(post.excerpt || post.description || generateExcerpt((_b2 = post.body) == null ? void 0 : _b2.children))}</p>`);
        if (post.tags && post.tags.length) {
          _push(`<div class="post-tags" data-v-a7a130ec><!--[-->`);
          ssrRenderList(post.tags, (tag) => {
            _push(`<span class="post-tag" data-v-a7a130ec>${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="post-actions" data-v-a7a130ec>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post._path,
          class: "read-more-btn group/btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-a7a130ec${_scopeId}>${ssrInterpolate(unref(t)("blog.read_article"))}</span><svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a7a130ec${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-a7a130ec${_scopeId}></path></svg>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(unref(t)("blog.read_article")), 1),
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></article>`);
      });
      _push(`<!--]--></div>`);
      if (!((_c = filteredPosts.value) == null ? void 0 : _c.length)) {
        _push(`<div class="text-center py-16" data-v-a7a130ec><div class="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4" data-v-a7a130ec><svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a7a130ec><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-a7a130ec></path></svg></div><h3 class="text-xl font-semibold text-slate-300 mb-2" data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.no_articles_found"))}</h3><p class="text-slate-400" data-v-a7a130ec>${ssrInterpolate(selectedCategory.value === "all" ? unref(t)("blog.no_posts_yet") : unref(t)("blog.no_articles_in_category", { category: selectedCategory.value }))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (hasMorePosts.value) {
        _push(`<div class="text-center mt-16" data-v-a7a130ec><button${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="load-more-btn" data-v-a7a130ec>`);
        if (!isLoading.value) {
          _push(`<span data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.load_more"))}</span>`);
        } else {
          _push(`<span class="flex items-center gap-2" data-v-a7a130ec><svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" data-v-a7a130ec><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-a7a130ec></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-a7a130ec></path></svg> ${ssrInterpolate(unref(t)("common.loading"))}</span>`);
        }
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="newsletter-section" data-v-a7a130ec><div class="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8 text-center" data-v-a7a130ec><div class="mb-6" data-v-a7a130ec><h3 class="text-2xl font-bold text-white mb-3" data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.stay_updated"))}</h3><p class="text-slate-300" data-v-a7a130ec>${ssrInterpolate(unref(t)("blog.stay_updated_desc"))}</p></div><div class="max-w-md mx-auto" data-v-a7a130ec><div class="flex gap-3" data-v-a7a130ec><input type="email"${ssrRenderAttr("placeholder", unref(t)("common.email_placeholder"))}${ssrRenderAttr("value", newsletterEmail.value)} class="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors" data-v-a7a130ec><button${ssrIncludeBooleanAttr(!newsletterEmail.value || isSubscribing.value) ? " disabled" : ""} class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all disabled:opacity-50" data-v-a7a130ec>${ssrInterpolate(isSubscribing.value ? unref(t)("blog.subscribing") : unref(t)("common.subscribe"))}</button></div>`);
      if (subscriptionSuccess.value) {
        _push(`<div class="mt-3 text-emerald-400 text-sm" data-v-a7a130ec> \u2713 ${ssrInterpolate(unref(t)("blog.subscribe_success"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7a130ec"]]);

export { index as default };
//# sourceMappingURL=index-DNVxbVLZ.mjs.map

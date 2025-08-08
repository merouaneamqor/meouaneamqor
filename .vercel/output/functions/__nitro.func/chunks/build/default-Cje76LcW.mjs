import { _ as __nuxt_component_0$1 } from './nuxt-link-Rx7tK5LK.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useI18n, b as useRoute, a as useLocalePath, A as useSwitchLocalePath, _ as _export_sfc } from './server.mjs';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-vue-next';
import { u as useHead } from './index-BR4-xsG4.mjs';
import { _ as _sfc_main$4 } from './NuxtImg-BfpTJSde.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const mobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    const { t, locale } = useI18n();
    const localePath = useLocalePath();
    useSwitchLocalePath();
    const navigation = [
      { nameKey: "nav.home", href: "/" },
      { nameKey: "nav.about", href: "/about" },
      { nameKey: "nav.portfolio", href: "/portfolio" },
      { nameKey: "nav.blog", href: "/blog" },
      { nameKey: "nav.contact", href: "/contact" }
    ];
    const isActive = (href) => {
      if (href === "/")
        return route.path === "/";
      return route.path.startsWith(href);
    };
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
    };
    watch(() => route.path, () => {
      mobileMenuOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 supports-backdrop-blur:bg-white/60 backdrop-blur-2xl font-myriad transition-colors duration-300",
          unref(isScrolled) ? "bg-white/80 border-b border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.04)]" : "bg-white/60 border-b border-transparent"
        ]
      }, _attrs))} data-v-aab2d4a6><div class="max-w-7xl mx-auto px-4 sm:px-6" data-v-aab2d4a6><div class="flex items-center justify-between h-16" data-v-aab2d4a6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "text-slate-900 font-semibold text-lg tracking-tight hover:text-slate-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Merouane Amqor `);
          } else {
            return [
              createTextVNode(" Merouane Amqor ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center gap-1" data-v-aab2d4a6><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.href,
          to: unref(localePath)(item.href),
          "aria-current": isActive(item.href) ? "page" : void 0,
          class: ["px-3 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 transition-colors", { "text-slate-900 bg-slate-900/10": isActive(item.href) }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(item.nameKey))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(item.nameKey)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="hidden md:flex items-center gap-2" data-v-aab2d4a6><div class="flex items-center gap-1 border border-slate-200 rounded-full px-1 py-1 bg-white/70" data-v-aab2d4a6><button${ssrRenderAttr("aria-pressed", unref(locale) === "en")} class="${ssrRenderClass([unref(locale) === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-900/5", "px-2 py-1 text-xs rounded-full"])}" data-v-aab2d4a6>EN</button><button${ssrRenderAttr("aria-pressed", unref(locale) === "fr")} class="${ssrRenderClass([unref(locale) === "fr" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-900/5", "px-2 py-1 text-xs rounded-full"])}" data-v-aab2d4a6>FR</button></div><a href="mailto:marouaneamqor@gmail.com" class="px-4 py-2 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors" data-v-aab2d4a6>${ssrInterpolate(unref(t)("nav.contact"))}</a></div><button class="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"${ssrRenderAttr("aria-label", unref(t)("navigation.toggle"))} data-v-aab2d4a6><svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-aab2d4a6>`);
      if (!unref(mobileMenuOpen)) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-v-aab2d4a6></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-v-aab2d4a6></path>`);
      }
      _push(`</svg></button></div></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden" data-v-aab2d4a6><div class="border-t border-slate-200/80 bg-white/80 backdrop-blur-2xl" data-v-aab2d4a6><div class="max-w-7xl mx-auto px-4 sm:px-6 py-3" data-v-aab2d4a6><div class="flex flex-col gap-2" data-v-aab2d4a6><div class="flex items-center gap-2 mb-1" data-v-aab2d4a6><button${ssrRenderAttr("aria-pressed", unref(locale) === "en")} class="${ssrRenderClass([unref(locale) === "en" ? "bg-slate-900 text-white" : "text-slate-700", "px-3 py-1.5 text-xs rounded-full border border-slate-200"])}" data-v-aab2d4a6>EN</button><button${ssrRenderAttr("aria-pressed", unref(locale) === "fr")} class="${ssrRenderClass([unref(locale) === "fr" ? "bg-slate-900 text-white" : "text-slate-700", "px-3 py-1.5 text-xs rounded-full border border-slate-200"])}" data-v-aab2d4a6>FR</button></div><!--[-->`);
        ssrRenderList(navigation, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.href,
            to: unref(localePath)(item.href),
            onClick: closeMobileMenu,
            "aria-current": isActive(item.href) ? "page" : void 0,
            class: ["px-3 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 transition-colors", { "text-slate-900 bg-slate-900/10": isActive(item.href) }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)(item.nameKey))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)(item.nameKey)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><a href="mailto:marouaneamqor@gmail.com" class="mt-2 px-4 py-3 rounded-xl text-base font-semibold bg-slate-900 text-white text-center hover:bg-slate-800 transition-colors" data-v-aab2d4a6>${ssrInterpolate(unref(t)("nav.contact"))}</a></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-aab2d4a6"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localePath = useLocalePath();
    const quickLinks = [
      { textKey: "nav.home", url: "/" },
      { textKey: "nav.portfolio", url: "/portfolio" },
      { textKey: "nav.about", url: "/about" },
      { textKey: "nav.contact", url: "/contact" },
      { textKey: "nav.blog", url: "/blog" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-transparent text-slate-700 border-t border-slate-200 relative" }, _attrs))} data-v-915e4e8c><div class="container mx-auto px-6 py-20 relative z-10" data-v-915e4e8c><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" data-v-915e4e8c><div class="lg:col-span-2" data-v-915e4e8c><div class="mb-8" data-v-915e4e8c><h2 class="text-3xl font-bold mb-6 text-white professional-glow relative inline-block" data-v-915e4e8c><span class="relative z-10" data-v-915e4e8c>Merouane Amqor</span><span class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent opacity-20" data-v-915e4e8c>Merouane Amqor</span></h2><div class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" data-v-915e4e8c></div></div><p class="text-slate-300 mb-8 leading-relaxed max-w-md text-lg" data-v-915e4e8c>${ssrInterpolate(unref(t)("footer.about_line1"))} ${ssrInterpolate(unref(t)("footer.about_line2"))}</p><div class="flex items-center gap-4 mb-10" data-v-915e4e8c><div class="w-4 h-4 bg-emerald-400 rounded-full animate-pulse" data-v-915e4e8c></div><span class="text-base font-medium text-slate-400" data-v-915e4e8c>${ssrInterpolate(unref(t)("footer.available"))}</span></div><div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 group/newsletter" data-v-915e4e8c><h3 class="text-lg font-bold text-slate-200 mb-3" data-v-915e4e8c>${ssrInterpolate(unref(t)("footer.stay_connected"))}</h3><p class="text-sm text-slate-400 mb-5" data-v-915e4e8c>${ssrInterpolate(unref(t)("footer.newsletter_cta"))}</p><div class="flex flex-col sm:flex-row gap-3" data-v-915e4e8c><input type="email"${ssrRenderAttr("placeholder", unref(t)("common.email_placeholder"))} class="flex-1 px-5 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-base text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors" data-v-915e4e8c><button class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-base font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-emerald-500/20" data-v-915e4e8c>${ssrInterpolate(unref(t)("common.subscribe"))}</button></div></div></div><div data-v-915e4e8c><h3 class="text-xl font-bold mb-8 text-white flex items-center gap-3" data-v-915e4e8c><div class="w-3 h-3 bg-cyan-400 rounded-full" data-v-915e4e8c></div> ${ssrInterpolate(unref(t)("footer.quick_links"))}</h3><ul class="space-y-4" data-v-915e4e8c><!--[-->`);
      ssrRenderList(quickLinks, (link) => {
        _push(`<li data-v-915e4e8c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(link.url),
          class: "footer-link group flex items-center gap-3 py-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-2 h-2 bg-slate-500 rounded-full group-hover:bg-emerald-400 transition-colors" data-v-915e4e8c${_scopeId}></div><span class="text-base group-hover:text-emerald-300 transition-colors" data-v-915e4e8c${_scopeId}>${ssrInterpolate(unref(t)(link.textKey))}</span>`);
            } else {
              return [
                createVNode("div", { class: "w-2 h-2 bg-slate-500 rounded-full group-hover:bg-emerald-400 transition-colors" }),
                createVNode("span", { class: "text-base group-hover:text-emerald-300 transition-colors" }, toDisplayString(unref(t)(link.textKey)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div data-v-915e4e8c><h3 class="text-xl font-bold mb-8 text-white flex items-center gap-3" data-v-915e4e8c><div class="w-3 h-3 bg-emerald-400 rounded-full" data-v-915e4e8c></div> ${ssrInterpolate(unref(t)("footer.get_in_touch"))}</h3><ul class="space-y-5 mb-10" data-v-915e4e8c><li data-v-915e4e8c><a href="mailto:marouane.amqor@gmail.com" class="footer-contact-link group" data-v-915e4e8c><div class="contact-icon" data-v-915e4e8c>`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-5 h-5" }, null, _parent));
      _push(`</div><div data-v-915e4e8c><div class="text-xs text-slate-500 uppercase tracking-wider" data-v-915e4e8c>${ssrInterpolate(unref(t)("common.email"))}</div><div class="text-base font-medium" data-v-915e4e8c>marouane.amqor@gmail.com</div></div></a></li><li data-v-915e4e8c><a href="tel:+212701086726" class="footer-contact-link group" data-v-915e4e8c><div class="contact-icon" data-v-915e4e8c>`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-5 h-5" }, null, _parent));
      _push(`</div><div data-v-915e4e8c><div class="text-xs text-slate-500 uppercase tracking-wider" data-v-915e4e8c>${ssrInterpolate(unref(t)("common.phone"))}</div><div class="text-base font-medium" data-v-915e4e8c>+212 7 01 086 726</div></div></a></li><li class="footer-contact-link" data-v-915e4e8c><div class="contact-icon" data-v-915e4e8c>`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-5 h-5" }, null, _parent));
      _push(`</div><div data-v-915e4e8c><div class="text-xs text-slate-500 uppercase tracking-wider" data-v-915e4e8c>${ssrInterpolate(unref(t)("common.location"))}</div><div class="text-base font-medium" data-v-915e4e8c>Casablanca, Morocco</div></div></li></ul><div data-v-915e4e8c><h4 class="text-lg font-bold text-slate-200 mb-5" data-v-915e4e8c>${ssrInterpolate(unref(t)("footer.connect"))}</h4><div class="flex gap-4" data-v-915e4e8c><a href="https://linkedin.com/in/merouane-amqor" target="_blank" rel="noopener noreferrer" class="social-link linkedin-link group/social" title="LinkedIn" data-v-915e4e8c>`);
      _push(ssrRenderComponent(unref(Linkedin), { class: "w-6 h-6" }, null, _parent));
      _push(`</a><a href="https://github.com/merouaneamqor" target="_blank" rel="noopener noreferrer" class="social-link github-link group/social" title="GitHub" data-v-915e4e8c>`);
      _push(ssrRenderComponent(unref(Github), { class: "w-6 h-6" }, null, _parent));
      _push(`</a><a href="https://douq.ma/about" target="_blank" rel="noopener noreferrer" class="social-link website-link group/social" title="Douq.ma" data-v-915e4e8c>`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-6 h-6" }, null, _parent));
      _push(`</a></div></div></div></div><div class="mt-20 pt-10 border-t border-slate-700/50" data-v-915e4e8c><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6" data-v-915e4e8c><div class="flex flex-col sm:flex-row sm:items-center gap-4" data-v-915e4e8c><p class="text-slate-600 text-base" data-v-915e4e8c> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Merouane Amqor. ${ssrInterpolate(unref(t)("footer.rights"))}</p><div class="hidden md:flex items-center gap-3" data-v-915e4e8c><div class="w-1.5 h-1.5 bg-slate-600 rounded-full" data-v-915e4e8c></div><span class="text-sm text-slate-600" data-v-915e4e8c>${ssrInterpolate(unref(t)("footer.built_with"))}</span></div></div><button class="back-to-top-btn group"${ssrRenderAttr("title", unref(t)("footer.back_to_top"))} data-v-915e4e8c><svg class="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-915e4e8c><path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" data-v-915e4e8c></path></svg><span class="text-sm" data-v-915e4e8c>${ssrInterpolate(unref(t)("footer.back_to_top"))}</span></button></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-915e4e8c"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlurBackground",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-none fixed inset-0 -z-10 overflow-hidden" }, _attrs))} data-v-37f25d19>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "~/assets/images/bg-hero.png",
        alt: "Background",
        class: "absolute inset-0 block md:hidden w-full h-full object-cover scale-110 blur-xl opacity-95 filter saturate-150 contrast-125 brightness-110",
        sizes: "100vw",
        decoding: "async",
        loading: "eager",
        placeholder: "blur"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "~/assets/images/bg-hero.png",
        alt: "Background",
        class: "absolute inset-0 hidden md:block w-full h-full object-cover scale-110 blur-2xl opacity-95 filter saturate-150 contrast-125 brightness-110",
        sizes: "(min-width: 768px) 100vw",
        decoding: "async",
        loading: "eager",
        placeholder: "blur"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-slate-950/10" data-v-37f25d19></div><div class="absolute inset-0 github-mesh pointer-events-none" data-v-37f25d19></div><div class="absolute inset-0 vibrant-glow pointer-events-none" data-v-37f25d19></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlurBackground.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlurBackground = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-37f25d19"]]);
const __default__ = {
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Merouane AMQOR",
        "jobTitle": "Software Engineer | Certified ScrumMaster\xAE",
        "url": "https://merouaneamqor.com",
        "email": "marouane.amqor@gmail.com",
        "telephone": "+212701086726",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Casablanca, Morocco"
        },
        "image": "https://merouaneamqor.com/merouane_amqor.jpg",
        "sameAs": [
          "https://linkedin.com/in/merouane-amqor",
          "https://instagram.com/merouaneamqor",
          "https://rubygems.org/profiles/merouaneamqor",
          "https://github.com/merouaneamqor",
          "https://www.crunchbase.com/person/amqor-merouane",
          "https://en.wikipedia.org/wiki/AMQOR_Merouane"
        ],
        "interactionStatistic": [
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/FollowAction",
            "userInteractionCount": 0
          },
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/LikeAction",
            "userInteractionCount": 0
          }
        ],
        "description": "Merouane AMQOR, an experienced Software Engineer and Certified ScrumMaster\xAE based in Casablanca, Morocco, specializes in innovative web development solutions. Skilled in a variety of platforms and languages, with a particular proficiency in back-end development, Merouane is known for his strong leadership skills and experience in leading teams to achieve their goals."
      }
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const keywordSuggestions = [
      "Full-Stack Developer",
      "Certified ScrumMaster",
      "Web Development Expert",
      "Software Engineering Leadership",
      "Rapid Prototyping Specialist",
      "Solution Design Expertise",
      "Tech Market Research",
      "Technology Benchmarking",
      "MongoDB Developer",
      "AngularJS Specialist",
      "Vue.js Developer",
      "React Developer",
      "Ruby on Rails Developer",
      "Node.js Developer",
      "AWS Expert",
      "Docker Specialist",
      "Git Version Control",
      "RESTful API Development",
      "Front-End Development",
      "Back-End Development",
      "Database Management Expert",
      "Server Administration Skills",
      "Team Leadership in Tech",
      "Web Application Development",
      "Nuxt.js Developer",
      "Laravel Developer",
      "Blockchain in Web Solutions",
      "Technology Innovation",
      "Web Solutions Architect",
      "Tech Project Leadership"
    ];
    useHead({
      htmlAttrs: {
        lang: () => locale.value === "fr" ? "fr" : "en"
      },
      meta: [
        { name: "keywords", content: keywordSuggestions.join(", ") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[--><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PNCBHTD5" height="0" width="0" style="${ssrRenderStyle({ "display": "none", "visibility": "hidden" })}"></iframe></noscript><div class="flex flex-col min-h-screen relative">`);
      _push(ssrRenderComponent(BlurBackground, { class: "pointer-events-none" }, null, _parent));
      _push(ssrRenderComponent(_component_Navbar, { class: "w-full" }, null, _parent));
      _push(`<main class="flex-1 w-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, { class: "w-full" }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Cje76LcW.mjs.map

import { _ as __nuxt_component_0 } from './nuxt-link-Rx7tK5LK.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n, a as useLocalePath } from './server.mjs';
import { a as useSeoMeta } from './index-BR4-xsG4.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localePath = useLocalePath();
    const viewMode = ref("list");
    const selectedProject = ref(null);
    const projects = [
      {
        id: 1,
        name: "DabaDoc Healthcare Platform",
        duration: "Sep 2018 - Present",
        description: "Led the development of a comprehensive healthcare platform, improving patient care delivery by 30% and boosting operational efficiency by 25%. Implemented Agile methodologies, resulting in a 20% reduction in project delivery times.",
        technologies: ["Ruby on Rails", "React", "MongoDB", "AWS", "RESTful API", "Agile"],
        link: "https://dabadoc.com"
      },
      {
        id: 2,
        name: "Douq.ma Discovery Platform",
        duration: "2021 - Present",
        description: "Co-founded Morocco's premier location discovery platform. Led product development and technical architecture for a comprehensive venue discovery and review system.",
        technologies: ["React", "Ruby on Rails", "MongoDB", "AI/ML", "Geolocation APIs"],
        link: "https://www.douq.ma"
      },
      {
        id: 3,
        name: "Meram / Texam E-commerce Solution",
        duration: "2018 - 2019",
        description: "Engineered an innovative e-commerce platform with a robust JSON API for seamless mobile integration. This solution significantly enhanced the digital shopping experience for users.",
        technologies: ["Ruby on Rails", "Next.js", "PostgreSQL", "RESTful API"],
        link: "https://texam-app-git-master-douq-ma.vercel.app/"
      },
      {
        id: 4,
        name: "Riad Raha Real Estate Management System",
        duration: "1 month, 2021",
        description: "Developed a sophisticated real estate sales management system that streamlined operations and improved client service efficiency, resulting in increased sales and customer satisfaction.",
        technologies: ["Laravel", "Vue.js", "PostgreSQL"],
        link: "#"
      },
      {
        id: 5,
        name: "DabaDoc Corporate Healthcare Platform",
        duration: "Apr 2022 - Jan 2024",
        description: "Spearheaded the development of a corporate healthcare management platform, enhancing employee access to health services and improving overall healthcare delivery for businesses.",
        technologies: ["Ruby on Rails", "Docker", "MongoDB", "RESTful API", "Angular"],
        link: "https://info.dabadoc.com/corporate"
      },
      {
        id: 6,
        name: "DabaDoc Mind - Mental Health",
        duration: "Apr 2022 - Jan 2024",
        description: "Created a secure and user-friendly platform for online mental health consultations, significantly improving accessibility and confidentiality for patients seeking mental health support.",
        technologies: ["React", "Ruby On Rails", "MongoDB", "RESTful API", "Angular"],
        link: "https://info.dabadoc.com/mind"
      },
      {
        id: 7,
        name: "DabaDoc Live - Interactive Health",
        duration: "Apr 2022 - Jan 2024",
        description: "Engineered an interactive live-streaming platform for health education and real-time consultations, featuring cutting-edge real-time communication tools and user engagement features.",
        technologies: ["React", "Ruby On Rails", "Elasticsearch", "MongoDB", "RESTful API", "Angular"],
        link: "https://info.dabadoc.com/live"
      }
    ];
    useSeoMeta({
      title: "Portfolio - Merouane Amqor",
      description: "Explore my portfolio of innovative projects combining engineering excellence, great design, and real-world impact.",
      ogTitle: "Portfolio - Merouane Amqor",
      ogDescription: "Explore my portfolio of innovative projects combining engineering excellence, great design, and real-world impact.",
      ogImage: "/merouane_amqor.jpg",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-ios-background font-myriad min-h-screen" }, _attrs))} data-v-c8954c11><nav class="bg-ios-background/95 backdrop-blur-xl border-b border-ios-separator/50 pt-16" data-v-c8954c11><div class="max-w-4xl mx-auto px-6 py-4" data-v-c8954c11><div class="flex items-center justify-between" data-v-c8954c11>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "flex items-center text-ios-label hover:text-ios-label-secondary transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-c8954c11${_scopeId}></path></svg><span class="font-medium" data-v-c8954c11${_scopeId}>${ssrInterpolate(unref(t)("common.back"))}</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5 mr-2",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                })
              ])),
              createVNode("span", { class: "font-medium" }, toDisplayString(unref(t)("common.back")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="flex items-center text-ios-label hover:text-ios-label-secondary transition-colors" data-v-c8954c11>`);
      if (viewMode.value === "list") {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11><rect width="7" height="7" x="3" y="3" rx="1" data-v-c8954c11></rect><rect width="7" height="7" x="14" y="3" rx="1" data-v-c8954c11></rect><rect width="7" height="7" x="3" y="14" rx="1" data-v-c8954c11></rect><rect width="7" height="7" x="14" y="14" rx="1" data-v-c8954c11></rect></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11><line x1="8" x2="21" y1="6" y2="6" data-v-c8954c11></line><line x1="8" x2="21" y1="12" y2="12" data-v-c8954c11></line><line x1="8" x2="21" y1="18" y2="18" data-v-c8954c11></line><line x1="3" x2="3.01" y1="6" y2="6" data-v-c8954c11></line><line x1="3" x2="3.01" y1="12" y2="12" data-v-c8954c11></line><line x1="3" x2="3.01" y1="18" y2="18" data-v-c8954c11></line></svg>`);
      }
      _push(`</button></div></div></nav><header class="px-6 pt-8 pb-4 max-w-4xl mx-auto" data-v-c8954c11><h1 class="text-4xl sm:text-5xl font-bold text-ios-label mb-2 tracking-tight" data-v-c8954c11>${ssrInterpolate(unref(t)("nav.portfolio"))}</h1><p class="text-lg text-ios-label-secondary leading-relaxed max-w-2xl" data-v-c8954c11>${ssrInterpolate(unref(t)("portfolio.subtitle"))}</p></header><main class="px-6 pb-8 max-w-4xl mx-auto" data-v-c8954c11>`);
      if (viewMode.value === "list") {
        _push(`<div class="space-y-4" data-v-c8954c11><!--[-->`);
        ssrRenderList(projects, (project) => {
          _push(`<div class="bg-ios-background-secondary rounded-xl border border-ios-separator overflow-hidden hover:bg-ios-background-tertiary transition-all duration-200 cursor-pointer active:scale-[0.98] active:bg-ios-background-tertiary" data-v-c8954c11><div class="flex items-start p-4 space-x-4" data-v-c8954c11><div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" data-v-c8954c11><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z" data-v-c8954c11></path></svg></div><div class="flex-1 min-w-0" data-v-c8954c11><div class="flex items-start justify-between mb-2" data-v-c8954c11><h3 class="text-lg font-semibold text-ios-label truncate" data-v-c8954c11>${ssrInterpolate(project.name)}</h3><svg class="w-5 h-5 text-ios-label-tertiary mt-0.5 flex-shrink-0 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11><path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6" data-v-c8954c11></path></svg></div><div class="flex flex-wrap gap-1.5 mb-3" data-v-c8954c11><!--[-->`);
          ssrRenderList(project.technologies.slice(0, 3), (tech) => {
            _push(`<span class="px-2 py-1 bg-ios-background text-ios-label-secondary text-xs font-medium rounded-full border border-ios-separator" data-v-c8954c11>${ssrInterpolate(tech)}</span>`);
          });
          _push(`<!--]-->`);
          if (project.technologies.length > 3) {
            _push(`<span class="px-2 py-1 bg-ios-background text-ios-label-tertiary text-xs rounded-full border border-ios-separator" data-v-c8954c11> +${ssrInterpolate(project.technologies.length - 3)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="text-sm text-ios-label-secondary line-clamp-2 leading-relaxed" data-v-c8954c11>${ssrInterpolate(project.description)}</p><p class="text-xs text-ios-label-tertiary mt-2" data-v-c8954c11>${ssrInterpolate(project.duration)}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-c8954c11><!--[-->`);
        ssrRenderList(projects, (project) => {
          _push(`<div class="bg-ios-background-secondary rounded-xl border border-ios-separator overflow-hidden hover:bg-ios-background-tertiary transition-all duration-200 cursor-pointer active:scale-[0.98] active:bg-ios-background-tertiary" data-v-c8954c11><div class="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" data-v-c8954c11><svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z" data-v-c8954c11></path></svg></div><div class="p-4" data-v-c8954c11><h3 class="text-lg font-semibold text-ios-label mb-2 line-clamp-1" data-v-c8954c11>${ssrInterpolate(project.name)}</h3><div class="flex flex-wrap gap-1.5 mb-3" data-v-c8954c11><!--[-->`);
          ssrRenderList(project.technologies.slice(0, 2), (tech) => {
            _push(`<span class="px-2 py-1 bg-ios-background text-ios-label-secondary text-xs font-medium rounded-full border border-ios-separator" data-v-c8954c11>${ssrInterpolate(tech)}</span>`);
          });
          _push(`<!--]-->`);
          if (project.technologies.length > 2) {
            _push(`<span class="px-2 py-1 bg-ios-background text-ios-label-tertiary text-xs rounded-full border border-ios-separator" data-v-c8954c11> +${ssrInterpolate(project.technologies.length - 2)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="text-sm text-ios-label-secondary line-clamp-3 leading-relaxed mb-2" data-v-c8954c11>${ssrInterpolate(project.description)}</p><p class="text-xs text-ios-label-tertiary" data-v-c8954c11>${ssrInterpolate(project.duration)}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</main>`);
      if (selectedProject.value) {
        _push(`<div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4" data-v-c8954c11><div class="${ssrRenderClass([{ "translate-y-0": selectedProject.value, "translate-y-full": !selectedProject.value }, "bg-ios-background rounded-t-xl sm:rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto transform transition-transform duration-300"])}" data-v-c8954c11><div class="sticky top-0 bg-ios-background/95 backdrop-blur-xl border-b border-ios-separator p-4" data-v-c8954c11><div class="flex items-center justify-between" data-v-c8954c11><h2 class="text-xl font-semibold text-ios-label" data-v-c8954c11>${ssrInterpolate(unref(t)("portfolio.project_details"))}</h2><button class="w-8 h-8 rounded-full bg-ios-background-secondary flex items-center justify-center" data-v-c8954c11><svg class="w-5 h-5 text-ios-label-secondary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-v-c8954c11></path></svg></button></div></div><div class="p-6" data-v-c8954c11><div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6" data-v-c8954c11><svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z" data-v-c8954c11></path></svg></div><h3 class="text-2xl font-bold text-ios-label mb-2" data-v-c8954c11>${ssrInterpolate(selectedProject.value.name)}</h3><div class="flex items-center space-x-4 mb-6" data-v-c8954c11><div class="flex items-center text-ios-label-secondary" data-v-c8954c11><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-c8954c11></path></svg><span class="text-sm" data-v-c8954c11>Senior Engineering Manager</span></div><div class="flex items-center text-ios-label-secondary" data-v-c8954c11><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c8954c11><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-c8954c11></path></svg><span class="text-sm" data-v-c8954c11>${ssrInterpolate(selectedProject.value.duration)}</span></div></div><div class="mb-6" data-v-c8954c11><h4 class="text-lg font-semibold text-ios-label mb-3" data-v-c8954c11>${ssrInterpolate(unref(t)("portfolio.technologies_used"))}</h4><div class="flex flex-wrap gap-2" data-v-c8954c11><!--[-->`);
        ssrRenderList(selectedProject.value.technologies, (tech) => {
          _push(`<span class="px-3 py-1 bg-ios-background-secondary text-ios-label text-sm font-medium rounded-full border border-ios-separator" data-v-c8954c11>${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div><div class="mb-6" data-v-c8954c11><h4 class="text-lg font-semibold text-ios-label mb-3" data-v-c8954c11>${ssrInterpolate(unref(t)("portfolio.key_achievements"))}</h4><div class="space-y-2" data-v-c8954c11><div class="flex items-start space-x-3" data-v-c8954c11><div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" data-v-c8954c11></div><p class="text-ios-label-secondary" data-v-c8954c11>${ssrInterpolate(selectedProject.value.description)}</p></div><div class="flex items-start space-x-3" data-v-c8954c11><div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" data-v-c8954c11></div><p class="text-ios-label-secondary" data-v-c8954c11>${ssrInterpolate(unref(t)("portfolio.achievement_team_delivery"))}</p></div><div class="flex items-start space-x-3" data-v-c8954c11><div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" data-v-c8954c11></div><p class="text-ios-label-secondary" data-v-c8954c11>${ssrInterpolate(unref(t)("portfolio.achievement_best_practices"))}</p></div></div></div><div class="flex space-x-3" data-v-c8954c11>`);
        if (selectedProject.value.link !== "#") {
          _push(`<a${ssrRenderAttr("href", selectedProject.value.link)} target="_blank" rel="noopener noreferrer" class="flex-1 bg-blue-500 text-white text-center py-3 px-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors" data-v-c8954c11>${ssrInterpolate(unref(t)("portfolio.view_live_project"))}</a>`);
        } else {
          _push(`<button disabled class="flex-1 bg-ios-background-secondary text-ios-label-tertiary text-center py-3 px-4 rounded-xl font-semibold" data-v-c8954c11>${ssrInterpolate(unref(t)("portfolio.private_project"))}</button>`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8954c11"]]);

export { portfolio as default };
//# sourceMappingURL=portfolio-DNy-P6bF.mjs.map

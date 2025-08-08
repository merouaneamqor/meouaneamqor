import { useSSRContext, version, defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, ref, computed, getCurrentInstance, inject, watchEffect, watch } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n, a as useLocalePath } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Rx7tK5LK.mjs';
import { u as useHead$1, a as useSeoMeta } from './index-BR4-xsG4.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const technologies = [
      "Swift",
      "Ruby",
      "iOS Development",
      "Engineering Leadership",
      "AWS Solutions",
      "Agile & Scrum",
      "Team Management",
      "Ruby on Rails",
      "Vue.js",
      "React",
      "Next.js",
      "Nuxt.js",
      "Node.js",
      "Docker",
      "System Design"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "font-myriad relative" }, _attrs))} data-v-839b0ec3><div class="pt-64 pb-24 px-6 max-w-6xl mx-auto text-center relative z-40 h-screen flex flex-col justify-center pointer-events-auto" data-v-839b0ec3><h1 class="text-5xl sm:text-7xl lg:text-8xl font-semibold text-slate-900 mb-4 tracking-tight leading-none" data-v-839b0ec3> iAmqor </h1><p class="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-800 mb-8 tracking-tight" data-v-839b0ec3>${ssrInterpolate(unref(t)("header.subtitle"))}</p><span class="text-sm sm:text-base lg:text-lg font-light text-slate-700 mb-8 tracking-tight" data-v-839b0ec3>${ssrInterpolate(unref(t)("header.tagline"))}</span><p class="text-lg sm:text-xl text-slate-800 max-w-2xl mx-auto mb-16 leading-relaxed" data-v-839b0ec3>${ssrInterpolate(unref(t)("header.description_1"))} ${ssrInterpolate(unref(t)("header.description_2"))}</p><div class="mb-20" data-v-839b0ec3><h3 class="text-2xl font-semibold text-slate-900 mb-8" data-v-839b0ec3>${ssrInterpolate(unref(t)("common.core_technologies"))}</h3><div class="flex flex-wrap justify-center gap-2.5 sm:gap-3" data-v-839b0ec3><!--[-->`);
      ssrRenderList(technologies, (tech) => {
        _push(`<span class="px-4 py-2 rounded-full text-base font-medium text-slate-800 bg-white/70 border border-slate-200 backdrop-blur-xl hover:bg-white transition-colors" data-v-839b0ec3>${ssrInterpolate(tech)}</span>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col sm:flex-row gap-3 justify-center items-center relative z-40 pointer-events-auto" data-v-839b0ec3><a href="mailto:marouaneamqor@gmail.com" class="px-6 py-3 bg-slate-900 text-white text-base font-semibold rounded-full hover:bg-slate-800 transition-colors min-w-[140px] text-center" data-v-839b0ec3>${ssrInterpolate(unref(t)("common.get_in_touch"))}</a><a href="/Merouane-AMQOR-en.pdf" download class="px-6 py-3 text-slate-800 text-base font-medium hover:text-slate-600 transition-colors" data-v-839b0ec3>${ssrInterpolate(unref(t)("common.download_resume"))}</a></div></div></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-839b0ec3"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Introduction",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localePath = useLocalePath();
    const technologies = [
      "Ruby on Rails",
      "Angular",
      "React",
      "Vue.js",
      "JavaScript",
      "PHP",
      "MongoDB",
      "SQL",
      "AWS",
      "Heroku",
      "Laravel",
      "Nuxt.js",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Scrum & Agile"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-transparent font-myriad relative" }, _attrs))} data-v-54d12974><div class="pt-32 pb-24 px-6 max-w-6xl mx-auto text-center relative z-20" data-v-54d12974><h1 class="text-5xl sm:text-7xl lg:text-8xl font-semibold text-slate-900 mb-6 tracking-tight leading-none" data-v-54d12974>${ssrInterpolate(unref(t)("intro.title"))}</h1><p class="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-800 mb-8 tracking-tight leading-relaxed max-w-4xl mx-auto" data-v-54d12974>${ssrInterpolate(unref(t)("intro.value"))}</p><p class="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed" data-v-54d12974>${ssrInterpolate(unref(t)("intro.supporting"))}</p><p class="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto mb-16 leading-relaxed font-light" data-v-54d12974>${ssrInterpolate(unref(t)("intro.philosophy"))}</p><div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20" data-v-54d12974><div class="text-center" data-v-54d12974><div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2" data-v-54d12974>8</div><div class="text-lg text-slate-700" data-v-54d12974>${ssrInterpolate(unref(t)("intro.stats.developers_led"))}</div></div><div class="text-center" data-v-54d12974><div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2" data-v-54d12974>10K+</div><div class="text-lg text-slate-700" data-v-54d12974>${ssrInterpolate(unref(t)("intro.stats.monthly_users"))}</div></div><div class="text-center" data-v-54d12974><div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2" data-v-54d12974>30%</div><div class="text-lg text-slate-700" data-v-54d12974>${ssrInterpolate(unref(t)("intro.stats.cycle_reduction"))}</div></div><div class="text-center" data-v-54d12974><div class="text-4xl lg:text-5xl font-semibold text-slate-900 mb-2" data-v-54d12974>93%</div><div class="text-lg text-slate-700" data-v-54d12974>${ssrInterpolate(unref(t)("intro.stats.sprint_success"))}</div></div></div><div class="mb-20" data-v-54d12974><h3 class="text-2xl font-semibold text-slate-900 mb-8" data-v-54d12974>${ssrInterpolate(unref(t)("common.core_technologies"))}</h3><div class="flex flex-wrap justify-center gap-2.5 sm:gap-3" data-v-54d12974><!--[-->`);
      ssrRenderList(technologies, (tech) => {
        _push(`<span class="px-4 py-2 rounded-full text-base font-medium text-slate-800 bg-white/70 border border-slate-200 backdrop-blur-xl hover:bg-white transition-colors" data-v-54d12974>${ssrInterpolate(tech)}</span>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col sm:flex-row gap-3 justify-center items-center" data-v-54d12974>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/portfolio"),
        class: "px-6 py-3 bg-slate-900 text-white text-base font-semibold rounded-full hover:bg-slate-800 transition-colors min-w-[160px] text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("intro.view_portfolio"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("intro.view_portfolio")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact"),
        class: "px-6 py-3 text-slate-800 text-base font-medium hover:text-slate-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("common.get_in_touch"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("common.get_in_touch")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Introduction.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-54d12974"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const leadershipSkills = [
      {
        name: "Team Leadership",
        icon: "\u{1F465}",
        description: "Leading cross-functional engineering teams of 8+ developers"
      },
      {
        name: "Scrum Master",
        icon: "\u{1F3AF}",
        description: "Certified ScrumMaster\xAE achieving 93% sprint success rate"
      },
      {
        name: "Mentoring & Development",
        icon: "\u{1F331}",
        description: "Growing junior developers into senior engineers"
      },
      {
        name: "Process Optimization",
        icon: "\u26A1",
        description: "Reducing development cycles by 30% through improved workflows"
      },
      {
        name: "Strategic Planning",
        icon: "\u{1F5FA}\uFE0F",
        description: "Aligning technical roadmaps with business objectives"
      }
    ];
    const strategicSkills = [
      {
        name: "Product Strategy",
        icon: "\u{1F3AF}",
        description: "Roadmap planning and feature prioritization for 10K+ users"
      },
      {
        name: "Agile Methodology",
        icon: "\u{1F504}",
        description: "Implementing Scrum practices for continuous delivery"
      },
      {
        name: "Stakeholder Alignment",
        icon: "\u{1F91D}",
        description: "Bridging technical and business requirements"
      },
      {
        name: "Performance Analytics",
        icon: "\u{1F4CA}",
        description: "Data-driven decision making and team metrics"
      },
      {
        name: "Resource Planning",
        icon: "\u{1F4CB}",
        description: "Optimizing team capacity and project timelines"
      }
    ];
    const technicalSkills = [
      {
        name: "Full-Stack Development",
        icon: "\u{1F4BB}",
        description: "Ruby on Rails, React, Angular, Vue.js - end-to-end solutions"
      },
      {
        name: "System Architecture",
        icon: "\u{1F3D7}\uFE0F",
        description: "Clean architecture patterns that scale effortlessly"
      },
      {
        name: "Cloud Infrastructure",
        icon: "\u2601\uFE0F",
        description: "AWS deployment and optimization for high availability"
      },
      {
        name: "Database Design",
        icon: "\u{1F5C3}\uFE0F",
        description: "MongoDB, SQL - data models that perform beautifully"
      },
      {
        name: "Modern Toolchain",
        icon: "\u{1F6E0}\uFE0F",
        description: "Next.js, Nuxt.js, Tailwind CSS - cutting-edge development"
      }
    ];
    const businessSkills = [
      {
        name: "Healthcare Technology",
        icon: "\u{1F3E5}",
        description: "DabaDoc platform serving 10K+ monthly active users"
      },
      {
        name: "E-commerce Solutions",
        icon: "\u{1F6D2}",
        description: "Scalable systems for marketplace and booking platforms"
      },
      {
        name: "Client Success",
        icon: "\u2728",
        description: "Delivering measurable impact through software solutions"
      },
      {
        name: "Innovation Leadership",
        icon: "\u{1F680}",
        description: "Driving technology adoption and digital transformation"
      },
      {
        name: "Market Expansion",
        icon: "\u{1F30D}",
        description: "Building solutions that scale across international markets"
      }
    ];
    const certifications = [
      {
        name: "Certified ScrumMaster\xAE",
        issuer: "Scrum Alliance",
        icon: "\u{1F3C6}",
        year: "2021"
      },
      {
        name: "AWS Machine Learning Foundations",
        issuer: "Amazon Web Services",
        icon: "\u2601\uFE0F",
        year: "2021"
      },
      {
        name: "Master's in Software Engineering",
        issuer: "SUPEMIR",
        icon: "\u{1F393}",
        year: "2023"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 bg-ios-background-secondary font-myriad" }, _attrs))} data-v-7c83d6c1><div class="max-w-6xl mx-auto px-6 text-center" data-v-7c83d6c1><h2 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-ios-label mb-6 tracking-tight" data-v-7c83d6c1>${ssrInterpolate(unref(t)("skills.title"))}</h2><p class="text-xl sm:text-2xl text-ios-label-secondary mb-8 max-w-3xl mx-auto leading-relaxed font-light" data-v-7c83d6c1>${ssrInterpolate(unref(t)("skills.subtitle"))}</p><p class="text-base sm:text-lg text-ios-label-tertiary mb-16 max-w-2xl mx-auto leading-relaxed" data-v-7c83d6c1>${ssrInterpolate(unref(t)("skills.description"))}</p></div><div class="max-w-6xl mx-auto px-6" data-v-7c83d6c1><div class="max-w-6xl mx-auto" data-v-7c83d6c1><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8" data-v-7c83d6c1><div class="bg-ios-background border border-ios-separator rounded-3xl p-8 hover:bg-ios-background-secondary transition-colors duration-300" data-v-7c83d6c1><h3 class="text-2xl font-semibold text-ios-label mb-6" data-v-7c83d6c1>${ssrInterpolate(unref(t)("skills.leadership"))}</h3><div class="space-y-4" data-v-7c83d6c1><!--[-->`);
      ssrRenderList(leadershipSkills, (skill) => {
        _push(`<div class="flex items-start gap-4" data-v-7c83d6c1><span class="text-2xl" data-v-7c83d6c1>${ssrInterpolate(skill.icon)}</span><div data-v-7c83d6c1><h4 class="text-lg font-medium text-ios-label mb-1" data-v-7c83d6c1>${ssrInterpolate(skill.name)}</h4><p class="text-base text-ios-label-tertiary" data-v-7c83d6c1>${ssrInterpolate(skill.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-ios-background border border-ios-separator rounded-3xl p-8 hover:bg-ios-background-secondary transition-colors duration-300" data-v-7c83d6c1><h3 class="text-2xl font-semibold text-ios-label mb-6" data-v-7c83d6c1>${ssrInterpolate(unref(t)("skills.technical_architecture"))}</h3><div class="space-y-4" data-v-7c83d6c1><!--[-->`);
      ssrRenderList(technicalSkills, (skill) => {
        _push(`<div class="flex items-start gap-4" data-v-7c83d6c1><span class="text-2xl" data-v-7c83d6c1>${ssrInterpolate(skill.icon)}</span><div data-v-7c83d6c1><h4 class="text-lg font-medium text-ios-label mb-1" data-v-7c83d6c1>${ssrInterpolate(skill.name)}</h4><p class="text-base text-ios-label-tertiary" data-v-7c83d6c1>${ssrInterpolate(skill.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-ios-background border border-ios-separator rounded-3xl p-8 hover:bg-ios-background-secondary transition-colors duration-300" data-v-7c83d6c1><h3 class="text-2xl font-semibold text-ios-label mb-6" data-v-7c83d6c1>${ssrInterpolate(unref(t)("skills.strategic_management"))}</h3><div class="space-y-4" data-v-7c83d6c1><!--[-->`);
      ssrRenderList(strategicSkills, (skill) => {
        _push(`<div class="flex items-start gap-4" data-v-7c83d6c1><span class="text-2xl" data-v-7c83d6c1>${ssrInterpolate(skill.icon)}</span><div data-v-7c83d6c1><h4 class="text-lg font-medium text-ios-label mb-1" data-v-7c83d6c1>${ssrInterpolate(skill.name)}</h4><p class="text-base text-ios-label-tertiary" data-v-7c83d6c1>${ssrInterpolate(skill.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-ios-background border border-ios-separator rounded-3xl p-8 hover:bg-ios-background-secondary transition-colors duration-300" data-v-7c83d6c1><h3 class="text-2xl font-semibold text-ios-label mb-6" data-v-7c83d6c1>${ssrInterpolate(unref(t)("skills.business_development"))}</h3><div class="space-y-4" data-v-7c83d6c1><!--[-->`);
      ssrRenderList(businessSkills, (skill) => {
        _push(`<div class="flex items-start gap-4" data-v-7c83d6c1><span class="text-2xl" data-v-7c83d6c1>${ssrInterpolate(skill.icon)}</span><div data-v-7c83d6c1><h4 class="text-lg font-medium text-ios-label mb-1" data-v-7c83d6c1>${ssrInterpolate(skill.name)}</h4><p class="text-base text-ios-label-tertiary" data-v-7c83d6c1>${ssrInterpolate(skill.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="mt-16 bg-ios-background border border-ios-separator rounded-3xl p-8" data-v-7c83d6c1><div class="text-center mb-8" data-v-7c83d6c1><h3 class="text-3xl font-semibold text-ios-label mb-4" data-v-7c83d6c1>${ssrInterpolate(unref(t)("skills.certifications"))}</h3><p class="text-lg text-ios-label-tertiary" data-v-7c83d6c1>${ssrInterpolate(unref(t)("skills.certifications_desc"))}</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-7c83d6c1><!--[-->`);
      ssrRenderList(certifications, (cert) => {
        _push(`<div class="text-center" data-v-7c83d6c1><div class="w-20 h-20 mx-auto mb-4 bg-ios-background-secondary rounded-2xl flex items-center justify-center" data-v-7c83d6c1><span class="text-3xl" data-v-7c83d6c1>${ssrInterpolate(cert.icon)}</span></div><h4 class="text-lg font-semibold text-ios-label mb-2" data-v-7c83d6c1>${ssrInterpolate(cert.name)}</h4><p class="text-base text-ios-label-secondary mb-2" data-v-7c83d6c1>${ssrInterpolate(cert.issuer)}</p><span class="inline-flex items-center px-3 py-1 bg-ios-background-secondary text-ios-label-tertiary text-sm rounded-full border border-ios-separator" data-v-7c83d6c1>${ssrInterpolate(cert.year)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7c83d6c1"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Experience",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const executiveExperiences = ref([
      {
        role: "Tech Lead & Engineering Manager",
        company: "DabaDoc",
        location: "Casablanca, Morocco",
        startDate: "Jan 2024",
        endDate: "Present",
        teamSize: "15+",
        achievements: [
          "Leading cross-functional engineering teams across Africa and Middle East healthcare markets",
          "Architected microservices infrastructure reducing system latency by 40% and improving user satisfaction",
          "Implemented Agile/Scrum methodologies resulting in 30% faster delivery cycles",
          "Mentored junior developers and established code review processes that improved code quality by 50%",
          "Spearheaded cloud migration to AWS, reducing operational costs by 25% while improving scalability"
        ],
        skills: ["Team Leadership", "AWS Architecture", "Agile/Scrum", "Performance Optimization", "Microservices"],
        metrics: [
          { value: "40%", label: "Performance Gain" },
          { value: "25%", label: "Cost Reduction" },
          { value: "30%", label: "Faster Delivery" }
        ]
      },
      {
        role: "Senior Full-stack Developer",
        company: "DabaDoc",
        location: "Casablanca, Morocco",
        startDate: "Apr 2022",
        endDate: "Dec 2023",
        teamSize: "8",
        achievements: [
          "Led development of patient-doctor matching platform serving 100K+ users across multiple countries",
          "Collaborated with product teams to translate business requirements into scalable technical solutions",
          "Designed and implemented RESTful APIs handling 1M+ requests daily with 99.9% uptime",
          "Mentored 3 junior developers and established best practices for code quality and testing"
        ],
        skills: ["Ruby on Rails", "React", "MongoDB", "API Design", "Mentoring", "Product Development"],
        metrics: [
          { value: "400K+", label: "Active Users monthly" },
          { value: "99.9%", label: "System Uptime" },
          { value: "1.2M+", label: "Daily API Calls" }
        ]
      },
      {
        role: "Software Engineer & Team Contributor",
        company: "Majorel",
        location: "Casablanca, Morocco",
        startDate: "May 2020",
        endDate: "Apr 2022",
        teamSize: "12",
        achievements: [
          "Contributed to multi-client projects serving international markets with diverse technical requirements",
          "Developed responsive web applications using modern JavaScript frameworks and backend technologies",
          "Participated in agile development processes and cross-team collaboration initiatives",
          "Gained expertise in client communication and project management in international context"
        ],
        skills: ["Full-stack Development", "JavaScript", "Agile Methodologies", "Client Relations", "Project Management"]
      },
      {
        role: "Junior Developer",
        company: "Majorel (Solocal Partnership)",
        location: "Casablanca, Morocco",
        startDate: "Mar 2018",
        endDate: "Apr 2020",
        teamSize: "6",
        achievements: [
          "Developed websites for French clients while working remotely, gaining international project experience",
          "Learned foundational web development technologies and professional development practices",
          "Built communication skills working with distributed teams across different time zones",
          "Established strong foundation in software development lifecycle and client requirements analysis"
        ],
        skills: ["Web Development", "Remote Collaboration", "HTML/CSS/JavaScript", "PHP", "Client Communication"]
      }
    ]);
    const challengesLearned = [
      {
        title: "Scaling Database Performance",
        challenge: "DabaDoc's user base grew 300% in 6 months, causing database timeouts and affecting user experience. Initial attempts to optimize queries weren't sufficient.",
        solution: "Implemented database sharding and caching strategies, reducing query times by 75% and handling the increased load effectively."
      },
      {
        title: "Remote Team Communication",
        challenge: "Managing distributed teams across different time zones led to misaligned priorities and delayed deliveries. Some projects fell behind schedule by 2-3 weeks.",
        solution: "Established clear communication protocols, introduced daily async standups, and created shared documentation standards."
      },
      {
        title: "Legacy Code Refactoring",
        challenge: "Inherited a monolithic codebase at Majorel with 60% test coverage and frequent production bugs. Technical debt was slowing down feature development.",
        solution: "Gradually extracted microservices, improved test coverage to 85%, and established code review practices that reduced bugs by 50%."
      },
      {
        title: "Team Retention During Growth",
        challenge: "Lost 3 senior engineers within 6 months due to burnout and unclear career progression. Team morale and productivity dropped significantly.",
        solution: "Implemented regular 1-on-1s, created clear career paths, and introduced rotation opportunities. Retention improved to 90% over the next year."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-20 md:py-24 lg:py-32 bg-transparent relative min-h-screen flex items-center justify-center" }, _attrs))} data-v-ad194604><div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full max-w-4xl" data-v-ad194604><div class="text-center mb-16 sm:mb-20 md:mb-24" data-v-ad194604><div class="mb-8" data-v-ad194604><div class="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg" data-v-ad194604><svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-ad194604><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-ad194604></path></svg></div><h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-4 tracking-tight leading-tight" data-v-ad194604>${ssrInterpolate(unref(t)("experience.title"))}</h2><p class="text-lg sm:text-xl text-slate-700 font-light" data-v-ad194604>${ssrInterpolate(unref(t)("experience.subtitle"))}</p></div></div><div class="space-y-8 sm:space-y-12 md:space-y-16" data-v-ad194604><!--[-->`);
      ssrRenderList(unref(executiveExperiences), (experience, index2) => {
        _push(`<div class="opacity-0 translate-y-4 animate-fade-in-up group" style="${ssrRenderStyle({ animationDelay: `${index2 * 100}ms` })}" data-v-ad194604><div class="bg-white/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-xl border border-slate-200 hover:bg-white/80 hover:-translate-y-1 transition-all duration-300 ease-out" data-v-ad194604><div class="mb-6 sm:mb-8" data-v-ad194604><div class="flex items-start justify-between mb-4" data-v-ad194604><div class="flex-1" data-v-ad194604><h3 class="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mb-2 leading-tight" data-v-ad194604>${ssrInterpolate(experience.role)}</h3><div class="flex flex-wrap items-center gap-4 text-slate-700 text-base sm:text-lg" data-v-ad194604><div class="flex items-center gap-2" data-v-ad194604><div class="w-2 h-2 bg-blue-500 rounded-full" data-v-ad194604></div><span class="font-medium" data-v-ad194604>${ssrInterpolate(experience.company)}</span></div><div class="flex items-center gap-2" data-v-ad194604><div class="w-2 h-2 bg-green-500 rounded-full" data-v-ad194604></div><span data-v-ad194604>${ssrInterpolate(experience.location)}</span></div></div></div>`);
        if (experience.teamSize) {
          _push(`<div class="ml-4" data-v-ad194604><div class="bg-slate-100 rounded-full px-4 py-2 border border-slate-200" data-v-ad194604><span class="text-slate-700 text-sm font-medium" data-v-ad194604>${ssrInterpolate(experience.teamSize)} ${ssrInterpolate(unref(t)("experience.team"))}</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-2 text-slate-600 text-sm sm:text-base" data-v-ad194604><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-ad194604><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" data-v-ad194604></path></svg><span class="font-medium" data-v-ad194604>${ssrInterpolate(experience.startDate)} \u2013 ${ssrInterpolate(experience.endDate)}</span></div></div><div class="grid md:grid-cols-2 gap-8 md:gap-12" data-v-ad194604><div data-v-ad194604><div class="flex items-center gap-3 mb-4" data-v-ad194604><div class="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center" data-v-ad194604><svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-ad194604><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-ad194604></path></svg></div><span class="text-slate-900 font-semibold text-lg" data-v-ad194604>${ssrInterpolate(unref(t)("experience.leadership_impact"))}</span></div><ul class="space-y-3" data-v-ad194604><!--[-->`);
        ssrRenderList(experience.achievements, (achievement, achIndex) => {
          _push(`<li class="flex items-start gap-3 text-slate-700 leading-relaxed" data-v-ad194604><div class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0" data-v-ad194604></div><span data-v-ad194604>${ssrInterpolate(achievement)}</span></li>`);
        });
        _push(`<!--]--></ul></div><div data-v-ad194604><div class="flex items-center gap-3 mb-4" data-v-ad194604><div class="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center" data-v-ad194604><svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-ad194604><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" data-v-ad194604></path></svg></div><span class="text-slate-900 font-semibold text-lg" data-v-ad194604>${ssrInterpolate(unref(t)("experience.technical_excellence"))}</span></div><div class="flex flex-wrap gap-2" data-v-ad194604><!--[-->`);
        ssrRenderList(experience.skills, (skill, skillIndex) => {
          _push(`<span class="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200 hover:bg-slate-200 transition-colors" data-v-ad194604>${ssrInterpolate(skill)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
        if (experience.metrics) {
          _push(`<div class="mt-8 pt-8 border-t border-slate-200" data-v-ad194604><div class="grid grid-cols-3 gap-6" data-v-ad194604><!--[-->`);
          ssrRenderList(experience.metrics, (metric, metricIndex) => {
            _push(`<div class="text-center" data-v-ad194604><div class="text-2xl sm:text-3xl font-semibold text-slate-900 mb-1" data-v-ad194604>${ssrInterpolate(metric.value)}</div><div class="text-sm text-slate-600 font-medium" data-v-ad194604>${ssrInterpolate(metric.label)}</div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="mt-20 sm:mt-24 md:mt-32" data-v-ad194604><div class="text-center mb-12 sm:mb-16" data-v-ad194604><div class="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" data-v-ad194604><svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-ad194604><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 7.478a12.06 12.06 0 004.5 0m-3.75 7.478V21a2.25 2.25 0 003.75 0V8.197a2.25 2.25 0 00-1.5-2.122L12 5.25a2.25 2.25 0 00-3 2.122v8.197a2.25 2.25 0 001.5 2.122z" data-v-ad194604></path></svg></div><h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4" data-v-ad194604>${ssrInterpolate(unref(t)("experience.challenges_title"))}</h3><p class="text-lg text-gray-600 font-light" data-v-ad194604>${ssrInterpolate(unref(t)("experience.challenges_subtitle"))}</p></div><div class="grid md:grid-cols-2 gap-6 sm:gap-8" data-v-ad194604><!--[-->`);
      ssrRenderList(challengesLearned, (lesson, index2) => {
        _push(`<div class="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300" data-v-ad194604><div class="flex items-start gap-4 mb-4" data-v-ad194604><div class="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0" data-v-ad194604><svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-ad194604><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" data-v-ad194604></path></svg></div><div class="flex-1" data-v-ad194604><h4 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3" data-v-ad194604>${ssrInterpolate(lesson.title)}</h4><p class="text-gray-600 mb-4 leading-relaxed" data-v-ad194604>${ssrInterpolate(lesson.challenge)}</p><div class="flex items-start gap-3" data-v-ad194604><div class="w-6 h-6 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" data-v-ad194604><svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-ad194604><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75" data-v-ad194604></path></svg></div><div data-v-ad194604><span class="text-sm font-medium text-gray-500 uppercase tracking-wide" data-v-ad194604>${ssrInterpolate(unref(t)("experience.solution"))}</span><p class="text-green-600 font-medium mt-1" data-v-ad194604>${ssrInterpolate(lesson.solution)}</p></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experience.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ad194604"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Education",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 sm:py-16 md:py-20 bg-transparent font-myriad border-b border-slate-200 relative min-h-screen flex items-center justify-center" }, _attrs))} data-v-3fb879ff><div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" data-v-3fb879ff><div class="text-center mb-12 sm:mb-14 md:mb-16" data-v-3fb879ff><div class="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6" data-v-3fb879ff><div class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center" data-v-3fb879ff><svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" data-v-3fb879ff></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6.25l-9-5.25v6.25L12 22l9-1.25v-6.25l-9 5.25V14z" data-v-3fb879ff></path></svg></div><div class="text-left" data-v-3fb879ff><h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.title"))}</h2><p class="text-slate-700 text-xs sm:text-sm" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.subtitle"))}</p></div></div><div class="w-16 sm:w-20 md:w-24 h-1 bg-slate-300 rounded-full mx-auto mb-4 sm:mb-6" data-v-3fb879ff></div><p class="text-slate-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.description"))}</p></div><div class="max-w-5xl mx-auto" data-v-3fb879ff><div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-10 md:mb-12 hover:bg-white/80 transition-all duration-300 group" data-v-3fb879ff><div class="bg-white border-b border-slate-200 p-4 sm:p-6 md:p-8" data-v-3fb879ff><div class="flex flex-col lg:flex-row lg:items-center lg:justify-between" data-v-3fb879ff><div class="flex items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 lg:mb-0" data-v-3fb879ff><div class="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-slate-100 border border-slate-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300" data-v-3fb879ff><svg class="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-ios-system-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" data-v-3fb879ff></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 14v6.25l-9-5.25v6.25L12 22l9-1.25v-6.25l-9 5.25V14z" data-v-3fb879ff></path></svg></div><div data-v-3fb879ff><h3 class="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mb-1 sm:mb-2" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.degree"))}</h3><div class="text-base sm:text-lg md:text-xl text-slate-800 font-semibold mb-2 sm:mb-3" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.specialization"))}</div><div class="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-slate-700 text-sm" data-v-3fb879ff><div class="flex items-center gap-1 sm:gap-2" data-v-3fb879ff><svg class="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z" data-v-3fb879ff></path></svg><span class="font-medium text-xs sm:text-sm" data-v-3fb879ff>SUPEMIR</span></div><div class="flex items-center gap-1 sm:gap-2" data-v-3fb879ff><svg class="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-3fb879ff></path></svg><span class="font-medium text-xs sm:text-sm" data-v-3fb879ff>2019 - 2021</span></div><div class="flex items-center gap-1 sm:gap-2" data-v-3fb879ff><svg class="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 8a8.001 8.001 0 01-1.343 8.657z" data-v-3fb879ff></path></svg><span class="text-xs sm:text-sm" data-v-3fb879ff>Casablanca, Morocco</span></div></div></div></div><div class="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 backdrop-blur-sm border border-slate-200 rounded-full text-slate-800 text-xs sm:text-sm font-medium" data-v-3fb879ff><svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-3fb879ff></path></svg><span class="hidden sm:inline" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.graduated_with_distinction"))}</span><span class="sm:hidden" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.distinction_short"))}</span></div></div></div><div class="p-4 sm:p-6 md:p-8" data-v-3fb879ff><div class="grid lg:grid-cols-2 gap-6 sm:gap-8" data-v-3fb879ff><div data-v-3fb879ff><div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6" data-v-3fb879ff><div class="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center" data-v-3fb879ff><svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-v-3fb879ff></path></svg></div><h4 class="text-lg sm:text-xl font-semibold text-slate-900" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.leadership_positions"))}</h4></div><div class="space-y-4 sm:space-y-6" data-v-3fb879ff><div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/80 transition-all duration-300" data-v-3fb879ff><div class="flex items-start gap-3 sm:gap-4" data-v-3fb879ff><div class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0" data-v-3fb879ff><svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-3fb879ff></path></svg></div><div data-v-3fb879ff><h5 class="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.president_junior_enterprise"))}</h5><p class="text-slate-700 text-xs sm:text-sm leading-relaxed" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.president_junior_enterprise_desc"))}</p></div></div></div><div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/80 transition-all duration-300" data-v-3fb879ff><div class="flex items-start gap-3 sm:gap-4" data-v-3fb879ff><div class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0" data-v-3fb879ff><svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-v-3fb879ff></path></svg></div><div data-v-3fb879ff><h5 class="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.president_student_union"))}</h5><p class="text-slate-700 text-xs sm:text-sm leading-relaxed" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.president_student_union_desc"))}</p></div></div></div></div></div><div data-v-3fb879ff><div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6" data-v-3fb879ff><div class="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-lg sm:rounded-xl flex items-center justify-center" data-v-3fb879ff><svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-3fb879ff><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-3fb879ff></path></svg></div><h4 class="text-lg sm:text-xl font-semibold text-slate-900" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.academic_excellence"))}</h4></div><div class="bg-ios-background backdrop-blur-sm border border-ios-separator rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6" data-v-3fb879ff><h5 class="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.about_supemir"))}</h5><p class="text-slate-700 leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.about_supemir_desc_1"))} <span class="text-ios-system-blue font-medium" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.technical_expertise"))}</span> ${ssrInterpolate(unref(t)("education.and"))} <span class="text-ios-system-purple font-medium" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.leadership_skills"))}</span> ${ssrInterpolate(unref(t)("education.about_supemir_desc_2"))}</p><div class="inline-flex items-center px-2 sm:px-3 py-1 bg-slate-100 backdrop-blur-sm border border-slate-200 rounded-full text-slate-800 text-xs font-medium" data-v-3fb879ff><span class="hidden sm:inline" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.equivalent_public_status"))}</span><span class="sm:hidden" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.university_status"))}</span></div></div><div class="space-y-1 sm:space-y-2" data-v-3fb879ff><h5 class="text-sm sm:text-base md:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.core_competencies"))}</h5><div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1" data-v-3fb879ff><div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full" data-v-3fb879ff></div><span class="text-slate-700 text-xs" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.competency_software"))}</span></div><div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1" data-v-3fb879ff><div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full" data-v-3fb879ff></div><span class="text-slate-700 text-xs" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.competency_network"))}</span></div><div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1" data-v-3fb879ff><div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full" data-v-3fb879ff></div><span class="text-slate-700 text-xs" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.competency_project"))}</span></div><div class="flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1" data-v-3fb879ff><div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full" data-v-3fb879ff></div><span class="text-slate-700 text-xs" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.competency_entrepreneurship"))}</span></div></div></div></div></div></div><div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8" data-v-3fb879ff><div class="text-center mb-6 sm:mb-8" data-v-3fb879ff><h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.achievements_summary"))}</h3><div class="w-12 sm:w-16 h-1 bg-slate-300 rounded-full mx-auto" data-v-3fb879ff></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" data-v-3fb879ff><div class="text-center group" data-v-3fb879ff><div class="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2" data-v-3fb879ff> 2 </div><div class="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.leadership_roles"))}</div><div class="text-xs text-slate-600" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.campus_organizations"))}</div></div><div class="text-center group" data-v-3fb879ff><div class="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2" data-v-3fb879ff> 2021 </div><div class="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.graduation"))}</div><div class="text-xs text-slate-600" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.masters_degree"))}</div></div><div class="text-center group" data-v-3fb879ff><div class="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2" data-v-3fb879ff> M.Sc </div><div class="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.degree_level"))}</div><div class="text-xs text-slate-600" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.computer_science"))}</div></div><div class="text-center group" data-v-3fb879ff><div class="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2" data-v-3fb879ff> Excellence </div><div class="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mb-1" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.academic_standing"))}</div><div class="text-xs text-slate-600" data-v-3fb879ff>${ssrInterpolate(unref(t)("education.distinguished_graduate"))}</div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Education.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3fb879ff"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const projects = ref([
      {
        name: "DabaDoc Healthcare Platform",
        category: "Healthcare Technology",
        status: "Leading Production",
        duration: "2022 - Present",
        leadershipImpact: "Led engineering teams of 15+ developers across multiple countries. Architected scalable healthcare infrastructure serving 100K+ users. Implemented Agile methodologies resulting in 40% faster delivery cycles and improved team performance.",
        technologies: ["Ruby on Rails", "Angular", "MongoDB", "AWS", "Microservices"],
        metrics: [
          { value: "100K+", label: "Active Users" },
          { value: "40%", label: "Performance Gain" },
          { value: "15+", label: "Team Members" },
          { value: "5", label: "Countries" }
        ],
        link: "https://www.dabadoc.com"
      },
      {
        name: "Douq.ma Discovery Platform",
        category: "Location Intelligence",
        status: "Co-Founded",
        duration: "2021 - Present",
        leadershipImpact: "Co-founded and led product development for Morocco's premier location discovery platform. Established technical vision, built founding team, and secured initial user base. Integrated AI-powered recommendations with community-driven content strategy.",
        technologies: ["React", "Ruby on Rails", "MongoDB", "AI/ML", "Geolocation APIs"],
        metrics: [
          { value: "10K+", label: "Venues Listed" },
          { value: "2", label: "Co-Founded" },
          { value: "95%", label: "User Satisfaction" },
          { value: "3", label: "Cities Covered" }
        ],
        link: "https://www.douq.ma"
      },
      {
        name: "Meram/Texam E-commerce Platform",
        category: "E-commerce Solutions",
        status: "Co-Founded",
        duration: "2018 - 2019",
        leadershipImpact: "Co-founded innovative e-commerce platform with focus on mobile-first experience. Led technical team of 6 developers, established development processes, and delivered cross-platform solution with complex inventory and payment integrations.",
        technologies: ["Ruby on Rails", "React Native", "PostgreSQL", "Payment Gateways"],
        metrics: [
          { value: "5K+", label: "Products" },
          { value: "6", label: "Team Size" },
          { value: "99.9%", label: "Uptime" },
          { value: "2", label: "Platforms" }
        ],
        link: "https://www.texam.ma"
      },
      {
        name: "Real Estate Management System",
        category: "Enterprise Solutions",
        status: "Client Delivery",
        duration: "2021",
        leadershipImpact: "Delivered comprehensive real estate management solution for Riad Raha. Managed client relationships, defined technical requirements, and led development team to deliver on-time, on-budget solution that improved operational efficiency by 60%.",
        technologies: ["Laravel", "Vue.js", "MySQL", "RESTful APIs"],
        metrics: [
          { value: "60%", label: "Efficiency Gain" },
          { value: "100%", label: "On-Time Delivery" },
          { value: "1M", label: "Process Optimization" },
          { value: "24/7", label: "System Availability" }
        ],
        link: "#"
      }
    ]);
    const portfolioStats = [
      {
        value: "$2M+",
        label: "Project Value",
        description: "Total business impact delivered"
      },
      {
        value: "2",
        label: "Startups Founded",
        description: "Entrepreneurial ventures led"
      },
      {
        value: "200K+",
        label: "Users Impacted",
        description: "Across all platforms"
      },
      {
        value: "4",
        label: "Industry Sectors",
        description: "Healthcare, E-commerce, Real Estate, Discovery"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-transparent border-b border-slate-200 relative min-h-screen flex items-center justify-center" }, _attrs))} data-v-4375bb1a><div class="container mx-auto px-6 lg:px-8 relative z-10 w-full" data-v-4375bb1a><div class="text-center mb-16" data-v-4375bb1a><div class="inline-flex items-center gap-3 mb-6" data-v-4375bb1a><div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center" data-v-4375bb1a><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-4375bb1a><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h3v3H7V7z" data-v-4375bb1a></path></svg></div><div class="text-left" data-v-4375bb1a><h2 class="text-4xl lg:text-5xl font-bold text-white professional-glow" data-v-4375bb1a>${ssrInterpolate(unref(t)("projects.title"))}</h2><p class="text-slate-400 text-sm" data-v-4375bb1a>${ssrInterpolate(unref(t)("projects.caption"))}</p></div></div><div class="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full mx-auto mb-6" data-v-4375bb1a></div><p class="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed" data-v-4375bb1a>${ssrInterpolate(unref(t)("projects.description"))}</p></div><div class="max-w-7xl mx-auto" data-v-4375bb1a><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" data-v-4375bb1a><!--[-->`);
      ssrRenderList(projects.value, (project, index2) => {
        _push(`<div class="project-card group relative transition-all duration-300" data-v-4375bb1a><div class="absolute top-6 right-6 z-10" data-v-4375bb1a><span class="inline-flex items-center px-3 py-1 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/50 rounded-full text-emerald-300 text-xs font-medium" data-v-4375bb1a><div class="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" data-v-4375bb1a></div> ${ssrInterpolate(project.status)}</span></div><div class="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl overflow-hidden hover:bg-white/80 transition-all duration-300 h-full" data-v-4375bb1a><div class="bg-white border-b border-slate-200 p-6" data-v-4375bb1a><div class="flex items-start justify-between mb-4" data-v-4375bb1a><div class="flex items-center gap-3" data-v-4375bb1a><div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0" data-v-4375bb1a><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-4375bb1a><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-4375bb1a></path></svg></div><div data-v-4375bb1a><h3 class="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300" data-v-4375bb1a>${ssrInterpolate(project.name)}</h3><p class="text-slate-600 text-sm" data-v-4375bb1a>${ssrInterpolate(project.category)}</p></div></div></div></div><div class="p-6" data-v-4375bb1a><div class="mb-6" data-v-4375bb1a><h4 class="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3" data-v-4375bb1a>${ssrInterpolate(unref(t)("projects.leadership_impact"))}</h4><p class="text-slate-300 leading-relaxed" data-v-4375bb1a>${ssrInterpolate(project.leadershipImpact)}</p></div>`);
        if (project.metrics) {
          _push(`<div class="grid grid-cols-2 gap-4 mb-6" data-v-4375bb1a><!--[-->`);
          ssrRenderList(project.metrics, (metric) => {
            _push(`<div class="text-center p-3 bg-slate-700/30 rounded-lg" data-v-4375bb1a><div class="text-lg font-bold text-emerald-400" data-v-4375bb1a>${ssrInterpolate(metric.value)}</div><div class="text-xs text-slate-500" data-v-4375bb1a>${ssrInterpolate(metric.label)}</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mb-6" data-v-4375bb1a><h4 class="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3" data-v-4375bb1a>${ssrInterpolate(unref(t)("projects.technology_leadership"))}</h4><div class="flex flex-wrap gap-2" data-v-4375bb1a><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span class="px-2 py-1 bg-slate-100 border border-slate-200 text-xs text-slate-700 rounded-md hover:bg-slate-200 transition-colors" data-v-4375bb1a>${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div><div class="flex items-center justify-between" data-v-4375bb1a>`);
        if (project.link !== "#") {
          _push(`<a${ssrRenderAttr("href", project.link)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group/link" data-v-4375bb1a><span data-v-4375bb1a>${ssrInterpolate(unref(t)("common.view_project"))}</span><svg class="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-4375bb1a><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-v-4375bb1a></path></svg></a>`);
        } else {
          _push(`<span class="inline-flex items-center gap-2 text-slate-500" data-v-4375bb1a><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-4375bb1a><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-v-4375bb1a></path></svg> ${ssrInterpolate(unref(t)("projects.confidential_project"))}</span>`);
        }
        _push(`<div class="text-xs text-slate-500" data-v-4375bb1a>${ssrInterpolate(project.duration)}</div></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8" data-v-4375bb1a><div class="text-center mb-8" data-v-4375bb1a><h3 class="text-2xl font-bold text-white mb-4" data-v-4375bb1a>${ssrInterpolate(unref(t)("projects.portfolio_impact_summary"))}</h3><div class="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto" data-v-4375bb1a></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-6" data-v-4375bb1a><!--[-->`);
      ssrRenderList(portfolioStats, (stat, index2) => {
        _push(`<div class="text-center group" data-v-4375bb1a><div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400 mb-2" data-v-4375bb1a>${ssrInterpolate(stat.value)}</div><div class="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1" data-v-4375bb1a>${ssrInterpolate(stat.label)}</div><div class="text-xs text-slate-500" data-v-4375bb1a>${ssrInterpolate(stat.description)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4375bb1a"]]);
var activeHead;
var getActiveHead = () => activeHead;
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref3, lastKey = "") {
  if (ref3 instanceof Promise)
    return ref3;
  const root = resolveUnref(ref3);
  if (!ref3 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
version.startsWith("3");
var headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
var isFunc = (json) => typeof json === "function";
var useJsonld = (json) => {
  if (!json) {
    return;
  }
  const jsonComputed = computed(() => isFunc(json) ? json() : json);
  useHead(() => {
    if (!jsonComputed.value) {
      return {};
    }
    return {
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonComputed.value, null, "")
        }
      ]
    };
  });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    useHead$1({
      title: () => locale.value === "fr" ? "Merouane Amqor - Engineering Manager & Certified ScrumMaster\xAE" : "Merouane Amqor - Engineering Manager & Certified ScrumMaster\xAE",
      meta: [
        {
          name: "description",
          content: () => locale.value === "fr" ? "Ing\xE9nieur Manager et Certified ScrumMaster\xAE exp\xE9riment\xE9, sp\xE9cialis\xE9 dans le leadership d'\xE9quipe, la transformation agile et des solutions techniques strat\xE9giques." : "Experienced Engineering Manager and Certified ScrumMaster\xAE specializing in team leadership, agile transformation, and strategic technical solutions."
        },
        {
          name: "keywords",
          content: () => locale.value === "fr" ? "engineering manager, scrum master, leadership, transformation agile, direction technique, d\xE9veloppement logiciel, gestion de projet, maroc, casablanca" : "engineering manager, scrum master, team leadership, agile transformation, technical leadership, software development, project management, morocco, casablanca"
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Merouane Amqor Portfolio" }
      ]
    });
    useSeoMeta({
      ogTitle: () => locale.value === "fr" ? "Merouane Amqor - Engineering Manager & Certified ScrumMaster\xAE" : "Merouane Amqor - Engineering Manager & Certified ScrumMaster\xAE",
      ogDescription: () => locale.value === "fr" ? "Ing\xE9nieur Manager et Certified ScrumMaster\xAE dirigeant des \xE9quipes performantes et pilotant la transformation digitale dans la sant\xE9 et l'e-commerce." : "Experienced Engineering Manager and Certified ScrumMaster\xAE leading high-performing teams and driving digital transformation across healthcare and e-commerce sectors.",
      ogImage: "https://merouaneamqor.com/merouane_amqor.jpg",
      ogUrl: "https://merouaneamqor.com",
      twitterCard: "summary_large_image",
      twitterSite: "@merouaneamqor",
      twitterCreator: "@merouaneamqor"
    });
    useJsonld({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Merouane Amqor",
      jobTitle: "Engineering Manager & Certified ScrumMaster\xAE",
      description: () => locale.value === "fr" ? "Ing\xE9nieur Manager exp\xE9riment\xE9, sp\xE9cialis\xE9 dans le leadership d'\xE9quipe, la transformation agile et des solutions techniques strat\xE9giques." : "Experienced Engineering Manager specializing in team leadership, agile transformation, and strategic technical solutions.",
      url: "https://merouaneamqor.com",
      image: "https://merouaneamqor.com/merouane_amqor.jpg",
      sameAs: [
        "https://linkedin.com/in/merouane-amqor",
        "https://github.com/merouaneamqor",
        "https://douq.ma"
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressCountry: "Morocco"
      },
      alumniOf: {
        "@type": "Organization",
        name: "SUPEMIR",
        description: () => locale.value === "fr" ? "Master en Informatique - Ing\xE9nierie des R\xE9seaux & Multim\xE9dia" : "Master in Computer Science - Engineering in Networks & Multimedia"
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Certified ScrumMaster\xAE",
          credentialCategory: "Professional Certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Scrum Alliance"
          }
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Introduction = __nuxt_component_1;
      const _component_Skills = __nuxt_component_2;
      const _component_Experience = __nuxt_component_3;
      const _component_Education = __nuxt_component_4;
      const _component_Projects = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col text-slate-900 font-sans" }, _attrs))} data-v-f6ac7d84>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(ssrRenderComponent(_component_Introduction, null, null, _parent));
      _push(ssrRenderComponent(_component_Skills, null, null, _parent));
      _push(ssrRenderComponent(_component_Experience, null, null, _parent));
      _push(ssrRenderComponent(_component_Education, null, null, _parent));
      _push(ssrRenderComponent(_component_Projects, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6ac7d84"]]);

export { index as default };
//# sourceMappingURL=index-BSPGvKAT.mjs.map

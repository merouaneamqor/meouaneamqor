import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n } from './server.mjs';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const showSuccess = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "py-20 bg-ios-background font-myriad relative overflow-hidden min-h-screen"
      }, _attrs))} data-v-821ed568><div class="absolute inset-0 opacity-5" data-v-821ed568><div class="contact-grid-pattern" data-v-821ed568></div></div><div class="absolute inset-0 overflow-hidden" data-v-821ed568><div class="contact-element element-1" data-v-821ed568></div><div class="contact-element element-2" data-v-821ed568></div><div class="contact-element element-3" data-v-821ed568></div></div><div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10" data-v-821ed568><div class="text-center mb-16" data-v-821ed568><h2 class="text-4xl lg:text-5xl font-semibold text-ios-label mb-4 tracking-tight" data-v-821ed568>${ssrInterpolate(unref(t)("contact.title"))}</h2><div class="w-24 h-1 bg-gradient-to-r from-ios-system-blue via-ios-system-purple to-ios-system-blue rounded-full mx-auto mb-6" data-v-821ed568></div><p class="text-ios-label-secondary text-lg max-w-2xl mx-auto leading-relaxed" data-v-821ed568>${ssrInterpolate(unref(t)("contact.subtitle"))}</p></div><div class="lg:grid lg:grid-cols-2 lg:gap-12 items-start" data-v-821ed568><div class="mb-12 lg:mb-0" data-v-821ed568><div class="space-y-6 mb-12" data-v-821ed568><div class="contact-method-card group" data-v-821ed568><a href="mailto:marouane.amqor@gmail.com" class="contact-method-link" data-v-821ed568><div class="contact-icon email-icon" data-v-821ed568><svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-821ed568><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-821ed568></path></svg></div><div class="contact-info" data-v-821ed568><h3 class="contact-title" data-v-821ed568>${ssrInterpolate(unref(t)("common.email"))}</h3><p class="contact-detail" data-v-821ed568>marouane.amqor@gmail.com</p><p class="contact-description" data-v-821ed568>${ssrInterpolate(unref(t)("contact.email_desc"))}</p></div><div class="contact-arrow" data-v-821ed568><svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-821ed568><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-821ed568></path></svg></div></a></div><div class="contact-method-card group" data-v-821ed568><a href="tel:+212701086726" class="contact-method-link" data-v-821ed568><div class="contact-icon phone-icon" data-v-821ed568><svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-821ed568><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-821ed568></path></svg></div><div class="contact-info" data-v-821ed568><h3 class="contact-title" data-v-821ed568>${ssrInterpolate(unref(t)("common.phone"))}</h3><p class="contact-detail" data-v-821ed568>+212 7 01 086 726</p><p class="contact-description" data-v-821ed568>${ssrInterpolate(unref(t)("contact.phone_desc"))}</p></div><div class="contact-arrow" data-v-821ed568><svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-821ed568><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-821ed568></path></svg></div></a></div><div class="contact-method-card group" data-v-821ed568><a href="https://linkedin.com/in/merouane-amqor" target="_blank" rel="noopener noreferrer" class="contact-method-link" data-v-821ed568><div class="contact-icon linkedin-icon" data-v-821ed568><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-v-821ed568><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-v-821ed568></path></svg></div><div class="contact-info" data-v-821ed568><h3 class="contact-title" data-v-821ed568>LinkedIn</h3><p class="contact-detail" data-v-821ed568>${ssrInterpolate(unref(t)("contact.professional_network"))}</p><p class="contact-description" data-v-821ed568>${ssrInterpolate(unref(t)("contact.linkedin_desc"))}</p></div><div class="contact-arrow" data-v-821ed568><svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-821ed568><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-821ed568></path></svg></div></a></div><div class="contact-method-card group" data-v-821ed568><a href="https://github.com/merouaneamqor" target="_blank" rel="noopener noreferrer" class="contact-method-link" data-v-821ed568><div class="contact-icon github-icon" data-v-821ed568><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-v-821ed568><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-821ed568></path></svg></div><div class="contact-info" data-v-821ed568><h3 class="contact-title" data-v-821ed568>GitHub</h3><p class="contact-detail" data-v-821ed568>${ssrInterpolate(unref(t)("contact.code_repository"))}</p><p class="contact-description" data-v-821ed568>${ssrInterpolate(unref(t)("contact.github_desc"))}</p></div><div class="contact-arrow" data-v-821ed568><svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-821ed568><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-821ed568></path></svg></div></a></div></div><div class="availability-card" data-v-821ed568><div class="bg-ios-background-secondary backdrop-blur-sm border border-ios-separator rounded-xl p-6" data-v-821ed568><div class="flex items-center gap-3 mb-4" data-v-821ed568><div class="w-3 h-3 bg-ios-system-green rounded-full animate-pulse" data-v-821ed568></div><h3 class="text-lg font-semibold text-ios-label" data-v-821ed568>${ssrInterpolate(unref(t)("contact.current_availability"))}</h3></div><p class="text-ios-label-secondary text-sm leading-relaxed mb-4" data-v-821ed568>${ssrInterpolate(unref(t)("contact.availability_desc"))}</p><div class="flex items-center gap-2 text-xs text-ios-label-tertiary" data-v-821ed568><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-821ed568><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-821ed568></path></svg><span data-v-821ed568>${ssrInterpolate(unref(t)("contact.timezone"))}</span></div></div></div></div><div class="contact-form-container" data-v-821ed568><div class="bg-ios-background-secondary backdrop-blur-sm border border-ios-separator rounded-xl overflow-hidden" data-v-821ed568><div class="bg-ios-background/50 p-6 border-b border-ios-separator" data-v-821ed568><h3 class="text-2xl font-semibold text-ios-label mb-2" data-v-821ed568>${ssrInterpolate(unref(t)("contact.send_a_message"))}</h3><p class="text-ios-label-tertiary text-sm" data-v-821ed568>${ssrInterpolate(unref(t)("contact.form_subtitle"))}</p></div><div class="p-8" data-v-821ed568><form class="space-y-6" data-v-821ed568><div class="form-group" data-v-821ed568><label for="name" class="form-label" data-v-821ed568>${ssrInterpolate(unref(t)("common.full_name"))} <span class="text-ios-system-red" data-v-821ed568>*</span></label><input type="text" id="name"${ssrRenderAttr("value", form.value.name)} required class="form-input"${ssrRenderAttr("placeholder", unref(t)("contact.name_placeholder"))} data-v-821ed568></div><div class="form-group" data-v-821ed568><label for="email" class="form-label" data-v-821ed568>${ssrInterpolate(unref(t)("common.email_address"))} <span class="text-ios-system-red" data-v-821ed568>*</span></label><input type="email" id="email"${ssrRenderAttr("value", form.value.email)} required class="form-input"${ssrRenderAttr("placeholder", unref(t)("common.email_placeholder"))} data-v-821ed568></div><div class="form-group" data-v-821ed568><label for="subject" class="form-label" data-v-821ed568>${ssrInterpolate(unref(t)("contact.subject"))}</label><select id="subject" class="form-input" data-v-821ed568><option value="" data-v-821ed568${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "") : ssrLooseEqual(form.value.subject, "")) ? " selected" : ""}>${ssrInterpolate(unref(t)("contact.select_subject"))}</option><option value="collaboration" data-v-821ed568${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "collaboration") : ssrLooseEqual(form.value.subject, "collaboration")) ? " selected" : ""}>${ssrInterpolate(unref(t)("contact.subject_collaboration"))}</option><option value="opportunity" data-v-821ed568${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "opportunity") : ssrLooseEqual(form.value.subject, "opportunity")) ? " selected" : ""}>${ssrInterpolate(unref(t)("contact.subject_opportunity"))}</option><option value="consulting" data-v-821ed568${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "consulting") : ssrLooseEqual(form.value.subject, "consulting")) ? " selected" : ""}>${ssrInterpolate(unref(t)("contact.subject_consulting"))}</option><option value="mentoring" data-v-821ed568${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "mentoring") : ssrLooseEqual(form.value.subject, "mentoring")) ? " selected" : ""}>${ssrInterpolate(unref(t)("contact.subject_mentoring"))}</option><option value="other" data-v-821ed568${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "other") : ssrLooseEqual(form.value.subject, "other")) ? " selected" : ""}>${ssrInterpolate(unref(t)("contact.subject_other"))}</option></select></div><div class="form-group" data-v-821ed568><label for="message" class="form-label" data-v-821ed568>${ssrInterpolate(unref(t)("contact.message"))} <span class="text-ios-system-red" data-v-821ed568>*</span></label><textarea id="message" rows="5" required class="form-input resize-none"${ssrRenderAttr("placeholder", unref(t)("contact.message_placeholder"))} data-v-821ed568>${ssrInterpolate(form.value.message)}</textarea></div><div class="form-group" data-v-821ed568><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="submit-button group" data-v-821ed568>`);
      if (!isSubmitting.value) {
        _push(`<span class="flex items-center gap-2" data-v-821ed568>${ssrInterpolate(unref(t)("contact.send_message"))} <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-821ed568><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" data-v-821ed568></path></svg></span>`);
      } else {
        _push(`<span class="flex items-center gap-2" data-v-821ed568><svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" data-v-821ed568><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-821ed568></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-821ed568></path></svg> ${ssrInterpolate(unref(t)("common.sending"))}</span>`);
      }
      _push(`</button></div></form>`);
      if (showSuccess.value) {
        _push(`<div class="success-message" data-v-821ed568><div class="bg-ios-system-green/10 border border-ios-system-green/30 rounded-lg p-4 flex items-center gap-3" data-v-821ed568><div class="w-8 h-8 bg-ios-system-green rounded-full flex items-center justify-center flex-shrink-0" data-v-821ed568><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-821ed568><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-821ed568></path></svg></div><div data-v-821ed568><h4 class="text-ios-system-green font-semibold" data-v-821ed568>${ssrInterpolate(unref(t)("contact.success_title"))}</h4><p class="text-ios-system-green text-sm" data-v-821ed568>${ssrInterpolate(unref(t)("contact.success_desc"))}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-821ed568"]]);

export { contact as default };
//# sourceMappingURL=contact-BWfuVYBD.mjs.map

import { composableNames, unpackMeta } from '@unhead/shared';
import { v as injectHead$1, x as resolveUnrefHeadInput$1 } from './server.mjs';
import { v as vueExports } from '../runtime.mjs';

function useHead(input, options = {}) {
  const head = options.head || injectHead$1();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = vueExports.ref(false);
  const resolvedInput = vueExports.ref({});
  vueExports.watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput$1(input);
  });
  const entry = head.push(resolvedInput.value, options);
  vueExports.watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  vueExports.getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({ ...t._flatMeta });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}

export { useSeoMeta as a, useHead as u };
//# sourceMappingURL=index-BR4-xsG4.mjs.map

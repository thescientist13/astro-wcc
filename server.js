import 'wc-compiler/src/dom-shim.js';
import { renderFromHTML } from 'wc-compiler';

async function check(tag) {
  return true; // !!globalThis.customElements.get(tag);
}


async function renderToStaticMarkup(tagName, props, slots) {
  console.log('renderToStaticMarkup', { tagName, props, slots })
  const comp = customElements.get(tagName)
  console.log({ comp })
  // TODO handle props
  // TODO handle resolving component definitions
  const { html } = await renderFromHTML('<x-greeting></x-greeting', [
    new URL('./src/components/greeting.js', import.meta.url)
  ]);

  console.log({ html });

  return { html };
}

export default { check, renderToStaticMarkup };
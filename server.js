import { renderFromHTML } from 'wc-compiler';

// TODO handle this check without needing to manually import the component above
async function check(tag) {
  return true; // !!globalThis.customElements.get(tag);
}

async function renderToStaticMarkup(tagName, props, slots) {
  console.log('renderToStaticMarkup', { tagName, props, slots })
  const cwdUrl = new URL(`file://${process.cwd()}/`);
  const attributes = Object.entries(props).map(([key, value]) => ` ${key}="${value}"`).join('');
  
  const { html } = await renderFromHTML(`<x-greeting ${attributes}></x-greeting>`, [
    new URL('./src/components/greeting.js', cwdUrl)
  ]);
  console.log({ html });

  return { html };
}

export default { check, renderToStaticMarkup };
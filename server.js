import { renderFromHTML } from 'wc-compiler';

async function check(tagName) {
  return tagName.indexOf('-') > 0; 
}

async function renderToStaticMarkup(tagName, props, slots) {
  console.log('renderToStaticMarkup', { tagName, props, slots })
  const cwdUrl = new URL(`file://${process.cwd()}/`);
  const suffix = tagName.split('-')[1];
  const attributes = Object.entries(props).map(([key, value]) => ` ${key}="${value}"`).join('');

  const { html } = await renderFromHTML(`<${tagName} ${attributes}></${tagName}>`, [
    new URL(`./src/components/${suffix}.js`, cwdUrl)
  ]);
  console.log({ html });

  return { html };
}

export default { check, renderToStaticMarkup };
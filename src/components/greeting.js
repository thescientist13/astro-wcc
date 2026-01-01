export default class Greeting extends HTMLElement {
  connectedCallback() {
    if(!this.shadowRoot) {
      const template = document.createElement('template');
      const greeting = this.hasAttribute('name')
        ? this.getAttribute('name')
        : 'World';

      template.innerHTML = `<h2>Hello ${greeting}! 👋</h2>`;

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    } else {
      console.log('you should already have an SSR greeting!');
    }
  }
}

customElements.define('x-greeting', Greeting);
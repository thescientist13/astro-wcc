export class Greeting extends HTMLElement {
  connectedCallback() {
    if(!this.shadowRoot) {
      const greeting = this.hasAttribute('name')
        ? this.getAttribute('name')
        : 'World';
      
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <h2>Hello ${greeting}! 👋</h2>
      `
    }
  }
}

customElements.define('x-greeting', Greeting);
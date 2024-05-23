export default function wccSSR() {
  return {
    name: "wcc-ssr",
    hooks: {
      "astro:config:setup": ({ updateConfig, addRenderer, injectScript }) => {
        addRenderer({
          name: "wcc-ssr",
          serverEntrypoint: "./server.js"
        });
      }
    }
  }
}
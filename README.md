# astro-wcc

A demonstration repo for using Astro and WCC together.

## Caveats

- Currently assumes `<x-${tagName}>` maps to _src/components/${tagName}.js_
- Client hints (e.g. `<x-greeting client:visible>`) are not supported
# Muhammad Tayyab — 3D Portfolio Experiment

A responsive React + TypeScript portfolio inspired by the interaction and 3D presentation of [ladunjexa/reactjs18-3d-portfolio](https://github.com/ladunjexa/reactjs18-3d-portfolio). This implementation uses an original procedural Three.js workstation rather than copying the reference site's full code or shipping its 15 MB model assets.

## Development

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`

## Performance and accessibility

- The 3D scene is lazy-loaded and enabled only on wider screens when reduced motion is not requested.
- The workstation is built from lightweight Three.js geometry; no external 3D model or texture downloads are required.
- Rendering is on-demand, device pixel ratio is capped, antialiasing is disabled, and the GPU is requested in low-power mode.
- Small screens and reduced-motion users receive a CSS fallback instead of the WebGL scene.
- Semantic sections, keyboard-accessible navigation, and responsive layouts are included.

## Reference

Visual and interaction inspiration: [ladunjexa/reactjs18-3d-portfolio](https://github.com/ladunjexa/reactjs18-3d-portfolio). The current 3D workstation is original code created for this portfolio.
